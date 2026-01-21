import React from 'react';
import { scheduleIcons } from './scheduleIcons';

const Fallback = () => {
  const Icon = scheduleIcons.location;
  return <Icon />;
};

/**
 * Единая точка отрисовки иконок расписания.
 * В конфиге указываем строковый ключ `icon`, здесь выбираем реальную иконку.
 */
const ScheduleIcon = ({ name, className }) => {
  const Icon = (name && scheduleIcons[name]) || null;
  return (
    <span className={className} aria-hidden="true">
      {Icon ? <Icon /> : <Fallback />}
    </span>
  );
};

export default ScheduleIcon;

