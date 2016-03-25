import {APP_CONFIGURATION} from './app.config';
import {CORE_MODULE} from './core/core.module';
//import {HOME_MODULE} from './home/home.module';
import {COMMON_MODULE} from './common/common.module';
import {ROCKET_MODULE} from './rocket/rocket.module';
//import {DATAVIZ_MODULE} from './dataviz/dataviz.module';
import {D3VIZ_MODULE} from './data/d3/d3viz.module';

export const APP_MODULE: ng.IModule =  angular.module(APP_CONFIGURATION.id, [
  'ngMessages',
  'ngCookies',
  'ngSanitize',
  'ui.bootstrap',
//  'ui.router',
  'pascalprecht.translate',
  'nvd3',
//  'smart-table',
//
  COMMON_MODULE.name,
  CORE_MODULE.name,
  ROCKET_MODULE.name,
  D3VIZ_MODULE.name
//  DATAVIZ_MODULE.name
//  HOME_MODULE.name

]);
