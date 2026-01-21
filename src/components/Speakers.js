import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Speakers.css';
import { speakers as speakersConfig } from '../config/speakers';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const Speakers = () => {
  const items = useMemo(() => speakersConfig, []);

  const scrollerRef = useRef(null);
  const trackRef = useRef(null);
  const thumbDragRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startLeft: 0,
  });
  const dragRef = useRef({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    startScrollLeft: 0,
    lastX: 0,
    lastT: 0,
    velocity: 0,
    inertiaRaf: 0,
    dragging: false,
  });

  const [thumb, setThumb] = useState({ width: 0, left: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [isThumbDragging, setIsThumbDragging] = useState(false);

  const stopInertiaIfAny = () => {
    const s = dragRef.current;
    if (s.inertiaRaf) {
      cancelAnimationFrame(s.inertiaRaf);
      dragRef.current = { ...s, inertiaRaf: 0, velocity: 0 };
    }
  };

  const setScrollLeftFromThumbLeft = (nextThumbLeft) => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
    if (maxScroll <= 0) return;

    const trackWidth = track.clientWidth;
    const maxThumbLeft = Math.max(0, trackWidth - thumb.width);
    const clampedLeft = clamp(nextThumbLeft, 0, maxThumbLeft);

    const progress = maxThumbLeft <= 0 ? 0 : clampedLeft / maxThumbLeft;
    scroller.scrollLeft = progress * maxScroll;

    setThumb((prev) => ({ ...prev, left: clampedLeft }));
  };

  useEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track) return;

    let raf = 0;
    const update = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const trackWidth = track.clientWidth;
        const clientWidth = scroller.clientWidth;
        const scrollWidth = scroller.scrollWidth;

        const maxScroll = Math.max(0, scrollWidth - clientWidth);

        if (maxScroll <= 0) {
          setThumb({ width: trackWidth, left: 0 });
          return;
        }

        const minThumb = 64;
        const rawThumbWidth = (trackWidth * clientWidth) / scrollWidth;
        const thumbWidth = clamp(rawThumbWidth, minThumb, trackWidth);

        const progress = scroller.scrollLeft / maxScroll;
        const left = (trackWidth - thumbWidth) * progress;

        setThumb({ width: thumbWidth, left });
      });
    };

    update();
    scroller.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);

    return () => {
      cancelAnimationFrame(raf);
      scroller.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  const onScrollerPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    if (typeof e.button === 'number' && e.button !== 0) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Let interactive elements (links/buttons) work normally.
    const interactive = e.target?.closest?.('a,button,input,textarea,select,label');
    if (interactive) return;

    const prev = dragRef.current;
    if (prev.inertiaRaf) cancelAnimationFrame(prev.inertiaRaf);

    dragRef.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      startScrollLeft: scroller.scrollLeft,
      lastX: e.clientX,
      lastT: performance.now(),
      velocity: 0,
      inertiaRaf: 0,
      dragging: false,
    };

    try {
      scroller.setPointerCapture(e.pointerId);
    } catch (_) {
      // no-op (older browsers)
    }
  };

  const onScrollerPointerMove = (e) => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const s = dragRef.current;
    if (!s.active) return;

    const dxFromStart = e.clientX - s.startX;
    const dyFromStart = e.clientY - s.startY;

    // Only start drag after a small horizontal movement; before that allow clicks.
    if (!s.dragging) {
      const threshold = 6;
      if (Math.abs(dxFromStart) < threshold || Math.abs(dxFromStart) < Math.abs(dyFromStart)) {
        return;
      }
      s.dragging = true;
      setIsDragging(true);
    }

    const now = performance.now();
    const dt = Math.max(1, now - s.lastT);
    const ddx = e.clientX - s.lastX;
    s.velocity = (-ddx) / dt;
    s.lastX = e.clientX;
    s.lastT = now;

    const dx = e.clientX - s.startX;
    scroller.scrollLeft = s.startScrollLeft - dx;
    e.preventDefault();
  };

  const startInertia = () => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const s = dragRef.current;
    const minV = 0.02;
    if (Math.abs(s.velocity) < minV) return;

    let prevT = performance.now();
    const step = (t) => {
      const dt = Math.max(1, t - prevT);
      prevT = t;

      const decayPer16ms = 0.92;
      const decay = Math.pow(decayPer16ms, dt / 16);
      s.velocity *= decay;

      const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
      const next = scroller.scrollLeft + s.velocity * dt;
      scroller.scrollLeft = Math.min(maxScroll, Math.max(0, next));

      if (
        Math.abs(s.velocity) < minV ||
        scroller.scrollLeft <= 0 ||
        scroller.scrollLeft >= maxScroll
      ) {
        s.inertiaRaf = 0;
        return;
      }

      s.inertiaRaf = requestAnimationFrame(step);
    };

    s.inertiaRaf = requestAnimationFrame(step);
  };

  const stopDrag = (e) => {
    const scroller = scrollerRef.current;
    const s = dragRef.current;
    if (!s.active) return;

    const wasDragging = s.dragging;
    dragRef.current = { ...s, active: false, dragging: false };
    if (wasDragging) setIsDragging(false);

    if (scroller && s.pointerId != null) {
      try {
        scroller.releasePointerCapture(s.pointerId);
      } catch (_) {
        // no-op
      }
    }

    if (wasDragging) {
      startInertia();
      if (e?.preventDefault) e.preventDefault();
    }
  };

  const onWheel = () => {
    stopInertiaIfAny();
  };

  const onTrackPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    if (typeof e.button === 'number' && e.button !== 0) return;
    if (e.target !== e.currentTarget) return;

    const track = trackRef.current;
    if (!track) return;

    stopInertiaIfAny();

    const rect = track.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const nextLeft = x - thumb.width / 2;
    setScrollLeftFromThumbLeft(nextLeft);
    e.preventDefault();
  };

  const onThumbPointerDown = (e) => {
    if (e.pointerType !== 'mouse') return;
    if (typeof e.button === 'number' && e.button !== 0) return;

    stopInertiaIfAny();

    thumbDragRef.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startLeft: thumb.left,
    };

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {
      // no-op
    }

    setIsThumbDragging(true);
    e.preventDefault();
    e.stopPropagation();
  };

  const onThumbPointerMove = (e) => {
    const s = thumbDragRef.current;
    if (!s.active) return;

    const dx = e.clientX - s.startX;
    setScrollLeftFromThumbLeft(s.startLeft + dx);
    e.preventDefault();
    e.stopPropagation();
  };

  const stopThumbDrag = (e) => {
    const s = thumbDragRef.current;
    if (!s.active) return;

    thumbDragRef.current = { ...s, active: false };
    setIsThumbDragging(false);

    try {
      e?.currentTarget?.releasePointerCapture?.(s.pointerId);
    } catch (_) {
      // no-op
    }

    if (e?.preventDefault) e.preventDefault();
    if (e?.stopPropagation) e.stopPropagation();
  };

  return (
    <section className="speakers" id="speakers">
      <div className="container speakers__container">
        <h2 className="speakers__title">
          Ключевые
          <br />
          спикеры
        </h2>

        <div className="speakers__rail">
          <div
            className={`speakers__scroller${isDragging ? ' speakers__scroller--dragging' : ''}`}
            ref={scrollerRef}
            role="list"
            onPointerDown={onScrollerPointerDown}
            onPointerMove={onScrollerPointerMove}
            onPointerUp={stopDrag}
            onPointerCancel={stopDrag}
            onWheel={onWheel}
            aria-label="Список спикеров (можно прокручивать горизонтально)"
          >
            {items.map((speaker) => (
              <article
                key={speaker.id ?? `${speaker.company}-${speaker.name}`}
                className="speakers__card"
                role="listitem"
              >
                <div className="speakers__photoWrap">
                  <img
                    className="speakers__photo"
                    src={speaker.photo}
                    alt={speaker.name.replace('\n', ' ')}
                    loading="lazy"
                    draggable="false"
                  />
                </div>

                <div className="speakers__meta">
                  <h3 className="speakers__name">{speaker.name}</h3>
                  <p className="speakers__role">{speaker.role}</p>

                  <a
                    href={speaker.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="speakers__companyTextspeakers__companyPill"
                  >
                    <span className='speakers-company-arrow'>→</span>
                    <span className='speakers-company-text'>{speaker.company}</span>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="speakers__scrollbar" aria-hidden="true">
            <div
              className="speakers__scrollTrack"
              ref={trackRef}
              onPointerDown={onTrackPointerDown}
            >
              <div
                className={`speakers__scrollThumb${isThumbDragging ? ' speakers__scrollThumb--dragging' : ''}`}
                style={{
                  width: `${thumb.width}px`,
                  transform: `translateX(${thumb.left}px)`,
                }}
                onPointerDown={onThumbPointerDown}
                onPointerMove={onThumbPointerMove}
                onPointerUp={stopThumbDrag}
                onPointerCancel={stopThumbDrag}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Speakers;
