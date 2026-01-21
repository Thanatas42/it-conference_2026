import scalar from '../image/speakers/scalar.png';
import aquarius from '../image/speakers/aquarius.png';
import fplus from './../image/speakers/fplus.png';
import kiberprotek from './../image/speakers/kiberprotek.png';

/**
 * Speakers list
 * - name: full name (shown in UI, used in alt text)
 * - role: position / title
 * - company: organization label (uppercase in UI)
 * - photo: placeholder photo (per design request)
 */
export const speakers = [
  {
    id: 'speaker-1',
    name: 'Михаил\nГилязов',
    role: 'Директор по работе с заказчиками',
    company: 'Скала^р',
    photo: scalar,
    url: 'https://www.skala-r.ru/'
  },
  {
    id: 'speaker-2',
    name: 'Олег\nМарин',
    role: 'Заместитель директора по\nпродуктовому развитию',
    company: 'АКВАРИУС',
    photo: aquarius,
    url: 'https://www.aq.ru/'
  },
  {
    id: 'speaker-3',
    name: 'Владислав\nКудрявцев',
    role: 'Руководитель отдела технических\nрешений',
    company: 'FPLUS',
    photo: fplus,
    url: 'https://fplustech.ru/'
  },
  {
    id: 'speaker-4',
    name: 'Владимир\nМаракшин',
    role: 'Директор департамента\nстратегического развития',
    company: 'КИБЕРПРОТЕКТ',
    photo: kiberprotek,
    url: 'https://cyberprotect.ru/'
  }
];

