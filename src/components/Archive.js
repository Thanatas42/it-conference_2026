import React from 'react';
import './Archive.css';

const ARCHIVE_LINKS = [
    { year: 2025, href: 'https://it-ritm.ru/' },
];

const ArrowIcon = () => (
    <svg
        className="archive__arrow"
        width="30"
        height="30"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
    >
        <path
            d="M7 12H17"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
        />
        <path
            d="M13 8L17 12L13 16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const Archive = () => {
    return (
        <section className="archive" id="archive">
            <div className="container">
                <div className="archive__content">
                    <h2 className="archive__title">
                        Архив
                        <br />
                        прошедших
                        <br />
                        конференций
                    </h2>

                    <nav className="archive__years" aria-label="Архив прошедших конференций по годам">
                        {ARCHIVE_LINKS.map(({ year, href }) => (
                            <a
                                key={year}
                                className="archive__year"
                                href={href}
                                target="_blank"
                                rel="noreferrer noopener"
                                aria-label={`Открыть архив конференции за ${year} год`}
                            >
                                <span className="archive__yearIcon" aria-hidden="true">
                                    <ArrowIcon />
                                </span>
                                <span className="archive__yearText">{year}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Archive;

