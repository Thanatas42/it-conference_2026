import placeholderPhoto from '../image/speakers/placeholder.jpg';
import placeholderPhotov2 from '../image/speakers/placeholder.png';

/**
 * Schedule (Program) config
 *
 * Все расписание редактируется отсюда, включая ключи иконок.
 * Иконки задаются строковыми ключами (например, "coffee", "location")
 *  floor: () => <Level />,
 *  location: () => <Location />,
 *  coffee: () => <Cofe />,
 *  transport: () => <Conference />,
 *  restourant: () => <Restourant />,
 */

export const schedule = {
  title: 'Программа\nконференции',
  date: {
    day: '06',
    month: 'августа',
    year: '2025',
  },
  items: [
    {
      id: 'transfer',
      time: { start: '09:00' },
      title: 'Отправление трансфера от м. Автово',
    },
    {
      id: 'registration',
      time: { start: '10:00', end: '10:30' },
      title: 'Регистрация, приветственный кофе',
    },
    {
      id: 'open',
      time: { start: '10:30', end: '10:40' },
      title: 'Торжественное открытие',
    },
    {
      id: 'expo-zone',
      time: { start: '10:00', end: '17:00' },
      title: 'Работа выставочной зоны',
      meta: [{ icon: 'floor', text: '2 этаж' }],
      description: 'Демонстрация решений вендоров на стендах',
    },
    {
      id: 'session-1',
      time: { start: '10:40', end: '12:20' },
      title: 'Техническая сессия №1',
      meta: [{ icon: 'conference', text: 'Конференц-зал, 2 этаж' }],
      description: 'Инструменты быстрой адаптации вычислительных комплексов, под изменяющиеся условия функционирования',
      speakers: [
        {
          id: 's1-1',
          name: 'Олег\nМарин',
          company: 'АКВАРИУС',
          talk: 'ИТ инфраструктура-\nразвитие и перспективы в\nВашем ритме',
          photo: placeholderPhotov2,
        },
        {
          id: 's1-2',
          name: 'Михаил\nГилязов',
          company: 'СКАЛАР',
          talk: 'Концепция виртуального\nКБ в нефтегазовой отрасли',
          photo: placeholderPhoto,
        },
        {
          id: 's1-3',
          name: 'Александр\nЕфанов',
          company: 'YADRO',
          talk: 'YADRO: готовые решения\nдля цифровой\nтрансформации',
          photo: placeholderPhoto,
        },
      ],
    },
    {
      id: 'coffee-break-1',
      time: { start: '12:20', end: '12:50' },
      title: 'Кофе-брейк, осмотр стендов',
      meta: [{ icon: 'coffee', text: '2 этаж' }],
    },
    {
      id: 'session-2',
      time: { start: '12:50', end: '14:30' },
      title: 'Техническая сессия №2',
      meta: [{ icon: 'floor', text: 'Конференц-зал, 2 этаж' }],
      description:
        'Методы ускорения изменений в ходе развития и эксплуатации информационных систем, создаваемых на основе отечественного специализированного ПО',
      speakers: [
        {
          id: 's2-1',
          name: 'Владимир\nМаракшин',
          company: 'КИБЕРПРОТЕКТ',
          talk:
            'Построение масштабируемых\nинсталляций систем\nрезервного копирования\nна базе Кибер Бэкап и\nКибер Хранилище',
          photo: placeholderPhotov2,
        },
        {
          id: 's2-2',
          type: 'group',
          people: [
            {
              id: 's2-2a',
              name: 'Дмитрий\nШуралеев',
              company: 'АКВАРИУС',
              photo: placeholderPhoto,
            },
            {
              id: 's2-2b',
              name: 'Константин\nТугунов',
              company: 'УЦ ГИС',
              photo: placeholderPhotov2,
            },
          ],
          talk:
            'Переход к строгой аутентификации -\nполный отказ от паролей, на примере\nпродуктовой линейки Аладдин',
        },
      ],
    },
    {
      id: 'business-lunch',
      time: { start: '14:30', end: '15:30' },
      title: 'Деловой обед, обмен мнениями',
    },
    {
      id: 'session-3',
      time: { start: '15:30', end: '17:00' },
      title: 'Техническая сессия №3',
      meta: [{ icon: 'floor', text: 'Конференц-зал, 2 этаж' }],
      description:
        'Гибкая системно-техническая инфраструктура. Способы оперативного приведения в соответствие под динамично обновляющиеся задачи бизнеса',
      speakers: [
        {
          id: 's2-1',
          name: 'Владимир\nМаракшин',
          company: 'КИБЕРПРОТЕКТ',
          talk:
            'Построение масштабируемых\nинсталляций систем\nрезервного копирования\nна базе Кибер Бэкап и\nКибер Хранилище',
          photo: placeholderPhotov2,
        },
        {
          id: 's2-2',
          type: 'group',
          people: [
            {
              id: 's2-2a',
              name: 'Дмитрий\nШуралеев',
              company: 'АКВАРИУС',
              photo: placeholderPhoto,
            },
            {
              id: 's2-2b',
              name: 'Константин\nТугунов',
              company: 'УЦ ГИС',
              photo: placeholderPhotov2,
            },
          ],
          talk:
            'Переход к строгой аутентификации -\nполный отказ от паролей, на примере\nпродуктовой линейки Аладдин',
        }
      ],
    },
    {
      id: 'transfer-hotel',
      time: { start: '17:00', end: '18:00' },
      title: 'Трансфер в отель TSAR PALACE LUXURY HOTEL & SPA, Санкт-Петербург, гор. Пушкин, бульвар Софийский, дом 32',
    },
    {
      id: 'Check-in',
      time: { start: '18:00', end: '19:00' },
      title: 'Заселение в отель, свободное время',
    },
    {
      id: 'gala-dinner',
      time: { start: '19:00', end: '23:00' },
      title: 'Гала-ужин',
    },
  ],
};

