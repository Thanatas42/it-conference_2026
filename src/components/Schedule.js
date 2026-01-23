import React from 'react';
import './Schedule.css';
import { schedule } from '../config/schedule';
import ScheduleIcon from './ScheduleIcon';
import ScheduleSessionSpeakers from './ScheduleSessionSpeakers';

const renderTime = (time) => {
  const start = time?.start ?? '';
  const end = time?.end ?? '';

  if (!end) return <span className="schedule__timeSingle">{start}</span>;

  return (
    <>
      <span className="schedule__timeStart">{start} —</span>
      <span className="schedule__timeEnd">{end}</span>
    </>
  );
};

const Schedule = () => {
  const title = schedule?.title ?? 'Программа\nконференции';
  const [t1, t2] = String(title).split('\n');
  const days = schedule?.days ?? [];

  return (
    <section className="schedule" id="schedule">
      <div className="container schedule__container">
        <h2 className="section-title schedule__title">
          {t1}
          {t2 ? (
            <>
              <br />
              {t2}
            </>
          ) : null}
        </h2>

        {days.map((day, dayIdx) => (
          <div key={`day-${dayIdx}`} className="schedule__day">
            <div className="schedule__layout">
              <aside className="schedule__date" aria-label="Дата мероприятия">
                <span>{day?.date?.day} {day?.date?.month}<br />
                  {day?.date?.year}
                </span>
              </aside>

              <div className="schedule__rows" role="list" aria-label="Расписание">
                {(day?.items ?? []).map((item, idx) => (
                  <div
                    key={item.id ?? `${item.title}-${dayIdx}-${idx}`}
                    className="schedule__row"
                    role="listitem"
                  >
                    <div className="schedule__time" aria-label="Время">
                      {renderTime(item.time)}
                    </div>

                    <div className="schedule__content">
                      <h3 className="schedule__itemTitle">
                        {String(item.title ?? '').split('\n').map((line, i, arr) => (
                          <React.Fragment key={`${item.id}-t-${i}`}>
                            {line}
                            {i < arr.length - 1 ? <br /> : null}
                          </React.Fragment>
                        ))}
                      </h3>

                      {item.meta?.length ? (
                        <div className="schedule__meta" aria-label="Дополнительная информация">
                          {item.meta.map((m, mIdx) => (
                            <div key={`${item.id}-m-${mIdx}`} className="schedule__metaItem">
                              <ScheduleIcon name={m.icon} className="schedule__metaIcon" />
                              <span className="schedule__metaText">{m.text}</span>
                            </div>
                          ))}
                        </div>
                      ) : null}

                      {item.description ? (
                        <p className="schedule__desc">
                          {String(item.description ?? '').split('\n').map((line, i, arr) => (
                            <React.Fragment key={`${item.id}-d-${i}`}>
                              {line}
                              {i < arr.length - 1 ? <br /> : null}
                            </React.Fragment>
                          ))}
                        </p>
                      ) : null}
                    </div>

                    {item.speakers?.length ? (
                      <div className="schedule__speakers">
                        <ScheduleSessionSpeakers speakers={item.speakers} sessionId={item.id} />
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
