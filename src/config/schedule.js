//import placeholderPhoto from '../image/speakers/placeholder.jpg';
//import placeholderPhotov2 from '../image/speakers/placeholder.png';
//import aquarius_speaker from '../image/speakers/aquarius_speaker.png';

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
  title: 'Программа\n конференции',
  days: [
    {
      date: {
        day: '06',
        month: 'августа',
        year: '2026',
      },
      items: [
        {
          id: 'transfer',
          time: { start: '09:00' },
          title: 'Отправление трансфера от м. Чёрная речка',
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
          time: { start: '10:00', end: '18:00' },
          title: 'Работа выставочной зоны',
          meta: [{ icon: 'floor', text: '2 этаж' }],
          description: 'Демонстрация решений вендоров на стендах',
        },
        {
          id: 'session-1',
          time: { start: '10:40', end: '12:20' },
          title: 'Техническая сессия №1',
          meta: [{ icon: 'conference', text: 'Конференц-зал, 2 этаж' }],
          description: 'Инструменты быстрой адаптации вычислительных комплексов под изменяющиеся условия функционирования \n \n Приглашенные спикеры от компаний:\n \n — «Аквариус» \n — «Скала^Р»\n — Yadro \n — VK Tech',
          /*speakers: [
            {
              id: 's1-1',
              name: '',
              company: 'АКВАРИУС',
              talk: '',
              photo: aquarius_speaker,
            },
            {
              id: 's1-2',
              name: 'Михаил\nГилязов',
              company: 'СКАЛА^Р',
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
            {
              id: 's1-4',
              name: '',
              company: 'VK Tech',
              talk: '',
              photo: placeholderPhoto,
            },
          ],*/
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
            'Методы ускорения изменений при развитии и эксплуатации информационных систем, создаваемых на основе отечественного специализированного ПО \n \n Приглашенные спикеры от компаний:\n \n — «Аладдин Р.Д.» \n — Primo RPA \n — UDV Group \n	— «Информатика» \n — ITD Group \n — «Киберпротект»',
         /* speakers: [
            {
              id: 's2-1',
              name: '',
              company: 'Аладдин Р.Д.',
              talk:
                '',
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
            {
              id: 's2-2',
              name: '',
              company: 'Primo RPA',
              talk:
                '',
              photo: placeholderPhotov2,
            },
            {
              id: 's2-3',
              name: '',
              company: 'UDV Group',
              talk:
                '',
              photo: placeholderPhotov2,
            },
            {
              id: 's2-4',
              name: '',
              company: 'Информатика',
              talk:
                '',
              photo: placeholderPhotov2,
            },
            {
              id: 's2-5',
              name: '',
              company: 'ITD Group',
              talk:
                '',
              photo: placeholderPhotov2,
            },
            {
              id: 's2-6',
              name: '',
              company: 'Киберпротект',
              talk:
                '',
              photo: placeholderPhotov2,
            },
          ],*/
        },
        {
          id: 'business-lunch',
          time: { start: '14:30', end: '16:00' },
          title: 'Деловой обед, обмен мнениями',
        },
        {
          id: 'session-3',
          time: { start: '16:00', end: '18:00' },
          title: 'Техническая сессия №3',
          meta: [{ icon: 'floor', text: 'Конференц-зал, 2 этаж' }],
          description:
            'Гибкая системно-техническая инфраструктура. Способы оперативного приведения в соответствие под динамично обновляющиеся задачи бизнеса \n \n Приглашенные спикеры от компаний:\n \n — Orion soft \n — «Базальт СПО»\n — RuDesktop \n — «Графтех»\n — SETERE Group\n — Visiology',
         /* speakers: [
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
          ],*/
        },
        /*{
          id: 'transfer-hotel',
          time: { start: '18:00', end: '19:00' },
          title: 'Трансфер в отель TSAR PALACE LUXURY HOTEL & SPA, Санкт-Петербург, гор. Пушкин, бульвар Софийский, дом 32',
        },*/
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
    },
    {
      date: {
        day: '07',
        month: 'августа',
        year: '2026',
      },
      items: [
        {
          id: 'breakfest-2',
          time: { start: '08:00', end: '11:00' },
          title: 'Завтрак',
        },
        {
          id: 'The round table - 2',
          time: { start: '11:00', end: '12:00' },
          title: 'Круглый стол',
          description: 'Электронная подпись. Задачи трансформации ИТ-систем и сервисов в условиях эволюционирующих регуляторных требований',
        },
        {
          id: 'transfer-2',
          time: { start: '12:00' },
          title: 'Трансфер до м. Чёрная речка',
        },
      ],
    },
  ],
};

