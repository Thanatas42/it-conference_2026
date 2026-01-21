import React, { useEffect, useMemo, useRef, useState } from 'react';

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const renderMultiline = (text) =>
  String(text ?? '')
    .split('\n')
    .map((line, i, arr) => (
      <React.Fragment key={`ml-${i}`}>
        {line}
        {i < arr.length - 1 ? <br /> : null}
      </React.Fragment>
    ));

const CompanyPill = ({ company }) => {
  return (
    <div className="scheduleSpeakerCard__companyPill" aria-label={`Организация: ${company}`}>
      <span className='scheduleSpeakerCard__companyArrow'>→</span>
      <span className="scheduleSpeakerCard__companyText">{company}</span>
    </div>
  );
};

const ScheduleSpeakerCard = ({ speaker, isSingle }) => {
  const isGroup = speaker?.type === 'group' && Array.isArray(speaker?.people);
  const people = isGroup ? speaker.people : [speaker];

  return (
    <article
      className={`scheduleSpeakerCard${isSingle ? ' scheduleSpeakerCard--single' : ''}${isGroup ? ' scheduleSpeakerCard--group' : ''
        }`}
    >
      <div className="scheduleSpeakerCard__top">
        <div className="scheduleSpeakerCard__people">
          {people.map((p, idx) => (
            <div key={p.id ?? `${p.company}-${p.name}-${idx}`} className="scheduleSpeakerCard__person">
              <div className="scheduleSpeakerCard__photoWrap">
                <img
                  className="scheduleSpeakerCard__photo"
                  src={p.photo}
                  alt={String(p.name ?? '').replace('\n', ' ')}
                  loading="lazy"
                  draggable="false"
                />
              </div>
              <h4 className="scheduleSpeakerCard__name">{renderMultiline(p.name)}</h4>
              <CompanyPill company={p.company} />
            </div>
          ))}
        </div>
      </div>

      <p className="scheduleSpeakerCard__talk">{renderMultiline(speaker.talk)}</p>
    </article>
  );
};

const ScheduleSessionSpeakers = ({ speakers, sessionId }) => {
  const items = useMemo(() => speakers ?? [], [speakers]);
  const isSingle = items.length === 1;

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
    startScrollLeft: 0,
    lastX: 0,
    lastT: 0,
    velocity: 0,
    inertiaRaf: 0,
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
    if (isSingle) return;

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

        const minThumb = 84;
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
  }, [isSingle, items.length]);

  const onScrollerPointerDown = (e) => {
    if (isSingle) return;
    if (e.pointerType !== 'mouse') return;
    if (typeof e.button === 'number' && e.button !== 0) return;

    const scroller = scrollerRef.current;
    if (!scroller) return;

    const prev = dragRef.current;
    if (prev.inertiaRaf) cancelAnimationFrame(prev.inertiaRaf);

    dragRef.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startScrollLeft: scroller.scrollLeft,
      lastX: e.clientX,
      lastT: performance.now(),
      velocity: 0,
      inertiaRaf: 0,
    };

    try {
      scroller.setPointerCapture(e.pointerId);
    } catch (_) {
      // no-op
    }

    setIsDragging(true);
    e.preventDefault();
  };

  const onScrollerPointerMove = (e) => {
    if (isSingle) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const s = dragRef.current;
    if (!s.active) return;

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
    if (isSingle) return;
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
    if (isSingle) return;
    const scroller = scrollerRef.current;
    const s = dragRef.current;
    if (!s.active) return;

    dragRef.current = { ...s, active: false };
    setIsDragging(false);

    if (scroller && s.pointerId != null) {
      try {
        scroller.releasePointerCapture(s.pointerId);
      } catch (_) {
        // no-op
      }
    }

    startInertia();
    if (e?.preventDefault) e.preventDefault();
  };

  const onWheel = () => {
    if (isSingle) return;
    stopInertiaIfAny();
  };

  const onTrackPointerDown = (e) => {
    if (isSingle) return;
    if (e.pointerType !== 'mouse') return;
    if (typeof e.button === 'number' && e.button !== 0) return;
    if (e.target !== e.currentTarget) return; // thumb handles its own drag

    stopInertiaIfAny();

    const track = trackRef.current;
    if (!track) return;

    const rect = track.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const nextLeft = x - thumb.width / 2;
    setScrollLeftFromThumbLeft(nextLeft);
    e.preventDefault();
  };

  const onThumbPointerDown = (e) => {
    if (isSingle) return;
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
    if (isSingle) return;
    const s = thumbDragRef.current;
    if (!s.active) return;

    const dx = e.clientX - s.startX;
    setScrollLeftFromThumbLeft(s.startLeft + dx);
    e.preventDefault();
    e.stopPropagation();
  };

  const stopThumbDrag = (e) => {
    if (isSingle) return;
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

  if (isSingle) {
    const p = items[0];
    return (
      <div className="scheduleSpeakers scheduleSpeakers--single" aria-label="Спикер сессии">
        <div className="scheduleSpeakerLine" role="group" aria-label="Спикер">
          <div className="scheduleSpeakerLine__person">
            <div className="scheduleSpeakerCard__photoWrap">
              <img
                className="scheduleSpeakerCard__photo"
                src={p.photo}
                alt={String(p.name ?? '').replace('\n', ' ')}
                loading="lazy"
                draggable="false"
              />
            </div>
            <div className="scheduleSpeakerLine__head">
              <h4 className="scheduleSpeakerLine__name">{renderMultiline(p.name)}</h4>
              <CompanyPill company={p.company} />
            </div>
          </div>
          <p className="scheduleSpeakerLine__talk">{renderMultiline(p.talk)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="scheduleSpeakers" aria-label="Спикеры сессии">
      <div className="scheduleSpeakers__rail">
        <div
          className={`scheduleSpeakers__scroller${isDragging ? ' scheduleSpeakers__scroller--dragging' : ''
            }`}
          ref={scrollerRef}
          role="list"
          aria-label={`Карточки спикеров для ${sessionId ?? 'сессии'}`}
          onPointerDown={onScrollerPointerDown}
          onPointerMove={onScrollerPointerMove}
          onPointerUp={stopDrag}
          onPointerCancel={stopDrag}
          onWheel={onWheel}
        >
          {items.map((speaker) => (
            <div
              key={speaker.id ?? `${speaker.company}-${speaker.name}-${speaker.talk}`}
              className={`scheduleSpeakers__item${speaker?.type === 'group' ? ' scheduleSpeakers__item--wide' : ''
                }`}
              role="listitem"
            >
              <ScheduleSpeakerCard speaker={speaker} />
            </div>
          ))}
        </div>

        <div className="scheduleSpeakers__scrollbar" aria-hidden="true">
          <div
            className="scheduleSpeakers__scrollTrack"
            ref={trackRef}
            onPointerDown={onTrackPointerDown}
          >
            <div
              className={`scheduleSpeakers__scrollThumb${isThumbDragging ? ' scheduleSpeakers__scrollThumb--dragging' : ''}`}
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
  );
};

export default ScheduleSessionSpeakers;

