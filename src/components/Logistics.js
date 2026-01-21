import React from 'react';
import './Logistics.css';
import { ReactComponent as LocationIcon } from '../image/Location.svg';

const Logistics = () => {
    return (
        <section className="logistics" id="logistics">
            <div className="container">
                <div className="logistics__section">
                    <div className="logistics__header">
                        <h2 className="logistics__title">
                            Место
                            <br />
                            проведения
                        </h2>

                        <div className="logistics__meta">
                            <span className="logistics__metaIcon" aria-hidden="true">
                                <LocationIcon className="logistics__pin" />
                            </span>
                            <div className="logistics__metaText">
                                <h5 className="logistics__metaTitle">РЕПИНО ПАРК ОТЕЛЬ</h5>
                                <p className="logistics__metaSub">
                                    г. Санкт-Петербург, п. Репино, Приморское шоссе,
                                    <br />
                                    д. 394, литера Б, корпус 1
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="logistics__grid logistics__grid--media">
                        <div className="logistics__media logistics__media--photo" aria-label="Фото места проведения" />
                        <div className="logistics__media logistics__media--map">
                            <iframe
                                className="logistics__map"
                                title="Карта: Репино Парк Отель"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=29.872%2C60.161%2C29.902%2C60.176&layer=mapnik&marker=60.1685%2C29.887"
                            />
                        </div>
                    </div>
                </div>

                <div className="logistics__section logistics__section--transfer">
                    <div className="logistics__header">
                        <h2 className="logistics__title">
                            Посадка на
                            <br />
                            трансфер
                        </h2>

                        <div className="logistics__metav2">
                            <span className="logistics__metaIcon" aria-hidden="true">
                                <LocationIcon className="logistics__pin" />
                            </span>
                            <div className="logistics__metaTextv2">
                                <div className="logistics__metaTitle">ТОЧКА СБОРА:</div>
                                <div className="logistics__metaSubv2">
                                    ул. Савушкина, д. 13
                                    <br />
                                    (ближайшая станция метро – Чёрная речка)
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="logistics__grid logistics__grid--transfer">
                        <div className="logistics__note">
                            <p>
                                Трансфер до места проведения мероприятия отправляется в 09:00.
                                Просим подойти к месту посадки заранее — за 10–15 минут.
                            </p>
                            <p>
                                Если по каким-либо причинам вы задерживаетесь, пожалуйста,
                                незамедлительно сообщите об этом вашему менеджеру.
                            </p>
                        </div>

                        <div className="logistics__media logistics__media--map">
                            <iframe
                                className="logistics__map"
                                title="Карта: точка сбора трансфера (ул. Савушкина, 13)"
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=30.292%2C59.983%2C30.312%2C59.993&layer=mapnik&marker=59.988%2C30.302"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Logistics;

