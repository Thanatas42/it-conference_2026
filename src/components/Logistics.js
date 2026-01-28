import React, { useEffect, useRef } from 'react';
import './Logistics.css';
import { ReactComponent as LocationIcon } from '../image/Location.svg';

const Logistics = () => {
    const mapContainer1Ref = useRef(null);
    const mapContainer2Ref = useRef(null);
    const mapInstance1Ref = useRef(null);
    const mapInstance2Ref = useRef(null);

    useEffect(() => {
        const initMap1 = () => {
            if (window.ymaps && mapContainer1Ref.current && !mapInstance1Ref.current) {
                window.ymaps.ready(() => {
                    mapInstance1Ref.current = new window.ymaps.Map(mapContainer1Ref.current, {
                        center: [60.159581, 29.880482],
                        zoom: 16,
                        controls: ['zoomControl']
                    }, {
                        suppressMapOpenBlock: true,
                        yandexMapAutoSwitch: false,
                        autoFitToViewport: 'always'
                    });

                    const placemark = new window.ymaps.Placemark(mapInstance1Ref.current.getCenter(), {
                        balloonContentHeader: '<strong>РЕПИНО ПАРК ОТЕЛЬ</strong>',
                        balloonContentBody:
                            '<div style="margin-bottom: 12px;">' +
                            '<div style="margin-bottom: 8px;"><strong>Адрес:</strong></div>' +
                            '<div style="margin-bottom: 12px;">Репино парк отель<br/>' +
                            'г. Санкт-Петербург, п. Репино, Приморское шоссе, д. 394, литера Б, корпус 1</div>' +
                            '<div style="margin-bottom: 8px;"><strong>Контакты организаторов:</strong></div>' +
                            '<div style="margin-bottom: 4px;">С. Лысикова: <a href="tel:+79811930835" style="color: #0066cc; text-decoration: none;">+7 (981) 193 08 35</a></div>' +
                            '<div style="margin-bottom: 8px;">А. Биушкина: <a href="tel:+79110888211" style="color: #0066cc; text-decoration: none;">+7 (911) 088 82 11</a></div>' +
                            '<div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e0e0e0;">' +
                            '<a href="https://yandex.ru/maps/?pt=' + mapInstance1Ref.current.getCenter()[1] + ',' + mapInstance1Ref.current.getCenter()[0] + '&z=16" target="_blank" style="color: #0066cc; text-decoration: none; font-weight: 500;">📍 Открыть в Яндекс.Картах</a>' +
                            '</div></div>',
                        balloonContentFooter: '<em style="color: #666; font-size: 0.9em;">Место проведения конференции «ИТ-Ритм»</em>',
                        hintContent: 'Репино парк отель'
                    });

                    mapInstance1Ref.current.geoObjects.add(placemark);
                    mapInstance1Ref.current.behaviors.disable('scrollZoom');
                });
            }
        };

        const initMap2 = () => {
            if (window.ymaps && mapContainer2Ref.current && !mapInstance2Ref.current) {
                window.ymaps.ready(() => {
                    const placemarkCoords = [59.986092, 30.293280];

                    mapInstance2Ref.current = new window.ymaps.Map(mapContainer2Ref.current, {
                        center: placemarkCoords,
                        zoom: 15,
                        controls: ['zoomControl']
                    }, {
                        suppressMapOpenBlock: true,
                        yandexMapAutoSwitch: false,
                        autoFitToViewport: 'always'
                    });

                    const placemark = new window.ymaps.Placemark(placemarkCoords, {
                        balloonContentHeader: '<strong>ТОЧКА СБОРА ТРАНСФЕРА</strong>',
                        balloonContentBody:
                            '<div style="margin-bottom: 12px;">' +
                            '<div style="margin-bottom: 8px;"><strong>Адрес:</strong></div>' +
                            '<div style="margin-bottom: 12px;">ул. Савушкина, д. 13<br/>' +
                            '<span style="color: #666; font-size: 0.9em;">(ближайшая станция метро — Чёрная речка)</span></div>' +
                            '<div style="margin-bottom: 8px;"><strong>Время отправления:</strong></div>' +
                            '<div style="margin-bottom: 8px; color: #d32f2f; font-weight: 500;">09:00</div>' +
                            '<div style="margin-bottom: 4px; color: #666; font-size: 0.9em;">Просим подойти за 10–15 минут до отправления</div>' +
                            '<div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid #e0e0e0;">' +
                            '<a href="https://yandex.ru/maps/?pt=30.293280,59.986092&z=15" target="_blank" style="color: #0066cc; text-decoration: none; font-weight: 500;">📍 Открыть в Яндекс.Картах</a>' +
                            '</div></div>',
                        balloonContentFooter: '<em style="color: #666; font-size: 0.9em;">Место посадки на трансфер до места проведения</em>',
                        hintContent: 'Точка сбора трансфера'
                    });
                    mapInstance2Ref.current.geoObjects.add(placemark);
                    placemark.balloon.open();
                    mapInstance2Ref.current.behaviors.disable('scrollZoom');
                });
            }
        };

        if (window.ymaps) {
            initMap1();
            initMap2();
        } else {
            const checkYmaps = setInterval(() => {
                if (window.ymaps) {
                    clearInterval(checkYmaps);
                    initMap1();
                    initMap2();
                }
            }, 100);

            setTimeout(() => clearInterval(checkYmaps), 10000);
        }

        return () => {
            if (mapInstance1Ref.current) {
                mapInstance1Ref.current.destroy();
                mapInstance1Ref.current = null;
            }
            if (mapInstance2Ref.current) {
                mapInstance2Ref.current.destroy();
                mapInstance2Ref.current = null;
            }
        };
    }, []);

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
                                <h5 className="logistics__metaTitle">Репино Парк Отель</h5>
                                <p className="logistics__metaSub">
                                    г. Санкт-Петербург, п. Репино,
                                    <br />
                                    Приморское шоссе, д. 394, литера Б, корпус 1
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="logistics__grid logistics__grid--media">
                        <div className="logistics__media logistics__media--photo" aria-label="Фото места проведения" />
                        <div className="logistics__media logistics__media--map">
                            <div ref={mapContainer1Ref} className="logistics__map" />
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
                                    (ближайшая станция метро — Чёрная речка)
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
                            <div ref={mapContainer2Ref} className="logistics__map" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Logistics;
