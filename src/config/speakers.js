//import scalar from '../image/speakers/scalar.png';
// import aquarius from '../image/speakers/aquarius.png';
//import fplus from './../image/speakers/fplus.png';
//import kiberprotek from './../image/speakers/kiberprotek.png';
import gisca_logunov from './../image/speakers/gisca_logunov.png';
import next_verisov from './../image/speakers/next_verisov.jpg';
import primo_rpa_vinogradov from './../image/speakers/primo_rpa_vinogradov.jpg';
import gisca_rusinov from './../image/speakers/gisca_rusinov.jpg';

/**
 * Speakers list
 * - id: unique ID
 * - name: full name (shown in UI, used in alt text)
 * - role: position / title
 * - company: organization label (uppercase in UI)
 * - photo: placeholder photo (per design request)
 * - url: url company
 */
export const speakers = [
  {
    id: 'speaker-1',
    name: 'Михаил \nВерисов',
    role: 'Директор',
    company: 'ЦТР НЕКСТ',
    photo: next_verisov,
    url: 'https://rpanext.ru/'
  },
  {
    id: 'speaker-2',
    name: 'Константин Логунов',
    role: 'Начальник отдела',
    company: 'УЦ ГИС',
    photo: gisca_logunov,
    url: 'https://ca.gisca.ru/'
  },
  {
    id: 'speaker-3',
    name: 'Артём \nВиноградов',
    role: 'Коммерческий директор',
    company: 'Primo RPA',
    photo: primo_rpa_vinogradov,
    url: 'https://primo-rpa.ru/'
  },
  {
    id: 'speaker-4',
    name: 'Александр Русинов',
    role: 'Ведущий менеджер проектов',
    company: 'УЦ ГИС',
    photo: gisca_rusinov,
    url: 'https://ca.gisca.ru/'
  }
];

