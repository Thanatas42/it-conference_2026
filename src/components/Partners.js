import React, { useMemo, useState, useEffect } from 'react';
import './Partners.css';
import { partners } from '../config/partners';

// Responsive page sizes
const getPageSize = () => {
  if (typeof window === 'undefined') return 12;
  if (window.innerWidth <= 480) return 4;
  if (window.innerWidth <= 968) return 6;
  return 12;
};

const ArrowIcon = ({ direction = 'right' }) => (
  <svg
    className="partners__arrow"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    {direction === 'left' ? (
      <>
        <path
          d="M17 12H7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M11 8L7 12L11 16"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ) : (
      <>
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
      </>
    )}
  </svg>
);

const Partners = () => {
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(getPageSize());

  useEffect(() => {
    const handleResize = () => {
      const newPageSize = getPageSize();
      setPageSize(newPageSize);
      // Reset to first page if current page would be empty
      const maxPage = Math.ceil(partners.length / newPageSize) - 1;
      setPage((p) => Math.min(p, maxPage));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pageCount = Math.max(1, Math.ceil(partners.length / pageSize));
  const currentPage = Math.min(page, pageCount - 1);

  const pageItems = useMemo(() => {
    const start = currentPage * pageSize;
    return partners.slice(start, start + pageSize);
  }, [currentPage, pageSize]);

  const canPrev = currentPage > 0;
  const canNext = currentPage < pageCount - 1;

  return (
    <section className="partners" id="partners">
      <div className="container">
        <h2 className="partners__title">Участники</h2>

        <div className="partners__grid" role="list">
          {pageItems.map((partner) => {
            const cardContent = (
              <img
                className="partners__logo"
                src={partner.logo}
                alt={partner.name}
                loading="lazy"
              />
            );

            return partner.url ? (
              <a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="partners__card partners__card--link"
                role="listitem"
              >
                {cardContent}
              </a>
            ) : (
              <div key={partner.name} className="partners__card" role="listitem">
                {cardContent}
              </div>
            );
          })}
        </div>

        <div className="partners__pager" aria-label="Навигация по участникам">
          <button
            className="partners__pagerBtn"
            type="button"
            onClick={() => canPrev && setPage((p) => Math.max(0, p - 1))}
            disabled={!canPrev}
            aria-label="Предыдущая страница"
          >
            <ArrowIcon direction="left" />
          </button>

          <div className="partners__pagerCount" aria-live="polite">
            {currentPage + 1}/{pageCount}
          </div>

          <button
            className="partners__pagerBtn"
            type="button"
            onClick={() => canNext && setPage((p) => Math.min(pageCount - 1, p + 1))}
            disabled={!canNext}
            aria-label="Следующая страница"
          >
            <ArrowIcon direction="right" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;

