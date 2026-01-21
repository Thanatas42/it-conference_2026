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
    day: '31',
    month: 'июля',
    year: '2025',
  },
  items: [
    {
      id: 'transfer',
      time: { start: '09:00' },
      title: 'Отправление трансфера от\nм. Черная речка',
    },
    {
      id: 'registration',
      time: { start: '10:00', end: '10:30' },
      title: 'Регистрация, приветственный\nкофе',
    },
    {
      id: 'expo-zone',
      time: { start: '10:00', end: '18:00' },
      title: 'Работа выставочной зоны',
      meta: [{ icon: 'floor', text: '2 этаж' }],
      description: 'Демонстрация решений вендоров на стендах',
    },
    {
      id: 'session-1',
      time: { start: '10:30', end: '12:20' },
      title: 'Техническая сессия №1',
      meta: [{ icon: 'conference', text: 'Конференц-зал, 2 этаж' }],
      description:
        'Методы эффективного обслуживания и модернизации вычислительных комплексов, выполненных на базе отечественных компонентов',
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
      time: { start: '12:50', end: '14:55' },
      title: 'Техническая сессия №2',
      meta: [{ icon: 'location', text: 'Конференц-зал, 2 этаж' }],
      description:
        'Подходы к эксплуатации отечественного специализированного ПО и развитию информационных систем, реализованных на его основе',
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
  ],
};

