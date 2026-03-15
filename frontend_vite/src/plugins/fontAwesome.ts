import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

// Iconos Solid
import {
    faUserSecret, faUserCircle, faAllergies, faTrashAlt, faPlusSquare,
    faTimesCircle, faPlusCircle, faIdBadge, faInfoCircle, faLink,
    faTools, faBriefcase, faGraduationCap, faCheck, faSolarPanel,
    faFileAlt, faEye, faDownload, faBars
} from '@fortawesome/free-solid-svg-icons';

// Iconos Brands
import {
    faFontAwesome, faFacebook, faFacebookSquare, faLinkedin,
    faTwitterSquare, faGithubSquare, faChrome, faSkype
} from '@fortawesome/free-brands-svg-icons';

// Añadir a la librería
library.add(
    faUserSecret, faUserCircle, faFontAwesome, faAllergies, faFacebook,
    faTimesCircle, faFacebookSquare, faLinkedin, faTwitterSquare,
    faGithubSquare, faChrome, faTrashAlt, faPlusSquare, faPlusCircle,
    faIdBadge, faInfoCircle, faLink, faTools, faBriefcase,
    faGraduationCap, faCheck, faSolarPanel, faFileAlt, faEye,
    faDownload, faBars, faSkype
);

// Exportamos una función para registrarlo en main.js
export default (app) => {
    app.component('font-awesome-icon', FontAwesomeIcon);
};
