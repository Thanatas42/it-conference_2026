import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section className='hero' id='home'>
            <div className='hero_container'>
                <ul className='hero-header'>
                    <a href='#about' className='hero-header-button'>О КОНФЕРЕНЦИИ</a>
                    <span>/</span>
                    <a href='#speakers' className='hero-header-button'>СПИКЕРЫ</a>
                    <span>/</span>
                    <a href='#schedule' className='hero-header-button'>ПРОГРАММА</a>
                    <span>/</span>
                    <a href='#partners' className='hero-header-button'>УЧАСТНИКИ</a>
                    <span>/</span>
                    <a href='#logistics' className='hero-header-button'>МЕСТО ПРОВЕДЕНИЯ</a>
                </ul>
                <div className='hero-content'>
                    <div
                        className='hero-title'
                        draggable={false}
                        onDragStart={(e) => e.preventDefault()}
                        onContextMenuCapture={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onCopy={(e) => e.preventDefault()}
                    ></div>

                    <div className='hero-desc'>
                        <p className='hero-description'>
                            ЕЖЕГОДНАЯ КОНФЕРЕНЦИЯ ПО
                            ИНФОРМАЦИОННЫМ ТЕХНОЛОГИЯМ
                            ДЛЯ ПРЕДПРИЯТИЙ ТЭК
                        </p>
                    </div>

                    <a href='#schedule' className='hero-date-button'>
                        <span className='hero-date-arrow'>→</span>
                        <span className='hero-date-text'>31.07-01.08</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Hero);
