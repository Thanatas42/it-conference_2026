import React from 'react';
import { ReactComponent as Cofe } from './Cofe.svg';
import { ReactComponent as Conference } from './Conference.svg';
import { ReactComponent as Level } from './Level.svg';
import { ReactComponent as Location } from './Location.svg';
import { ReactComponent as Restourant } from './Restourant.svg';

/**
 * Реестр иконок расписания.
 * Ключи используются в `src/config/schedule.js`.
 */
export const scheduleIcons = {
  floor: () => <Level />,
  location: () => <Location />,
  coffee: () => <Cofe />,
  conference: () => <Conference />,
  restourant: () => <Restourant />,
};

