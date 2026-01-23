import gisca from '../image/partners/ucgis.png';
import udv from '../image/partners/udv.svg';
import vk_tech from '../image/partners/vk_tech.png';
import aquarius from '../image/partners/aquarius.png';
import yadro from '../image/partners/yadro.png';
import gis from '../image/partners/gis.png';
import scala from '../image/partners/scala.png';
//import fplus from '../image/partners/fplus.png';
import rudesktop from '../image/partners/rudesktop.png';
import primo from '../image/partners/primo.png';
import inform from '../image/partners/infor.png';
import itd from '../image/partners/itd.png';
import aladin from '../image/partners/aladin.png';
import cyber from '../image/partners/cyber.png';

import visio from '../image/partners/visio.png';
import grafteh from '../image/partners/grafteh.png';
import orion from '../image/partners/orion.png';
import next from '../image/partners/next.png';
import baseAlt from '../image/partners/basealt.png';
import setere from '../image/partners/setere.png';

/**
 * Partners list
 * - name: partner name (used in alt text)
 * - logo: import of local logo file (svg/png/webp/etc)
 * - url: optional website URL (if provided, card becomes clickable link)
 *
 * To add your own logos:
 * 1) Put files into `src/image/partners/`
 * 2) Import them here and replace `placeholderLogo`
 * 3) Optionally add url field to make cards clickable
 */
export const partners = [
    { name: 'GIS CA', logo: gisca, url: 'https://ca.gisca.ru/' },
    { name: 'Aquarius', logo: aquarius, url: 'https://www.aq.ru/' },
    { name: 'Yadro', logo: yadro, url: 'https://yadro.com/' },
    { name: 'Газинформсервис', logo: gis, url: 'https://www.gaz-is.ru/' },
    { name: 'Скала^р', logo: scala, url: 'https://www.skala-r.ru/' },
    { name: 'UDV Group', logo: udv, url: 'https://udv.group/' },
    { name: 'VK Tech', logo: vk_tech, url: 'https://tech.vk.com/' },
  //  { name: 'Fplus', logo: fplus, url: 'https://example.com' },
    { name: 'Rudesktop', logo: rudesktop, url: 'https://rudesktop.ru/' },
    { name: 'Primo RPA', logo: primo, url: 'https://primo-rpa.ru/' },
    { name: 'Информатика', logo: inform, url: 'https://informatika37.ru/' },
    { name: 'ITD Group', logo: itd, url: 'https://www.iitdgroup.ru/' },
    { name: 'Аладдин', logo: aladin, url: 'https://www.aladdin-rd.ru/' },
    { name: 'Киберпротект', logo: cyber, url: 'https://cyberprotect.ru/' },

    { name: 'Visiology', logo: visio, url: 'https://ru.visiology.su/' },
    { name: 'Графтех', logo: grafteh, url: 'https://graf-tech.ru/' },
    { name: 'Орион софт', logo: orion, url: 'https://www.orionsoft.ru/' },
    { name: 'next', logo: next, url: 'https://rpanext.ru/' },
    { name: 'Base Alt', logo: baseAlt, url: 'https://www.basealt.ru/' },
    { name: 'Setere', logo: setere, url: 'https://www.seteregroup.ru/' },
];

