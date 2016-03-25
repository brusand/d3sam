import 'angular';
import 'angular-animate';
import 'angular-cookies';
import 'angular-messages';
import 'angular-sanitize';
import 'node_modules/angular-smart-table/dist/smart-table.js';
import 'angular-translate';
import 'node_modules/angular-translate-storage-cookie/angular-translate-storage-cookie.js';
import 'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.js';
import 'node_modules/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js';
// Fix
import 'imports?MessageFormat=node_modules/messageformat/messageformat.js!node_modules/messageformat/locale/fr.js';
import 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js';
import 'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js';
import 'angular-ui-router';
import 'node_modules/angular-ui-select/select.js';
import 'jquery';
import 'lodash';
import 'moment';
import  'node_modules/d3/d3.js';
import  'node_modules/nvd3/build/nv.d3.min.js';
import  'node_modules/angular-nvd3/dist/angular-nvd3.js';



import {APP_MODULE} from './app/app.module';

angular.element(document).ready(function() {
    angular.bootstrap(document, [APP_MODULE.name], {strictDi: true});
});
   