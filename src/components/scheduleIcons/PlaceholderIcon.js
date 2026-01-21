import React from 'react';

/**
 * Временная заглушка для иконок расписания.
 * Удобно менять: достаточно заменить компонент в `src/components/scheduleIcons/index.js`
 * или добавить новые ключи.
 */
const PlaceholderIcon = ({ label = 'ICON' }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="1" y="1" width="18" height="18" rx="5" fill="none" stroke="currentColor" />
      <text
        x="10"
        y="12"
        textAnchor="middle"
        fontSize="7"
        fontFamily="system-ui, -apple-system, Segoe UI, Roboto, sans-serif"
        fill="currentColor"
      >
        {String(label).slice(0, 2).toUpperCase()}
      </text>
    </svg>
  );
};

export default PlaceholderIcon;

