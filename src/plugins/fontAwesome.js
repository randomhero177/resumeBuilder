import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faAllergies, faTrashAlt, faPlusSquare, faPlusCircle, faIdBadge, faInfoCircle, faLink, faTools, faBriefcase, faGraduationCap, faCheck, faSolarPanel, faFileAlt, faEye, faDownload, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFontAwesome, faFacebook, faFacebookSquare, faLinkedin, faTwitterSquare, faGithubSquare, faChrome, faSkype } from '@fortawesome/free-brands-svg-icons'

library.add(faUserSecret, faFontAwesome, faAllergies, faFacebook, faFacebookSquare, faLinkedin, faTwitterSquare, faGithubSquare, faChrome, faTrashAlt, faPlusSquare, faPlusCircle, faIdBadge, faInfoCircle, faLink, faTools, faBriefcase, faGraduationCap, faCheck, faSolarPanel, faFileAlt, faEye, faDownload, faBars, faSkype);
Vue.component('font-awesome-icon', FontAwesomeIcon);