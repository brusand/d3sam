import moduleName from '../../common/utils/module-name';
import {APP_CONFIGURATION} from '../../app.config';
import {CORE_MODULE} from '../../core/core.module';

import {D3CounterDirective} from './counter/d3counter.component';
import {D3PieDirective, D3PieController} from './pie/d3pie.component';

const D3VIZ_MODULE_NAME: string = moduleName(APP_CONFIGURATION.id, 'd3viz');

export const D3VIZ_MODULE: ng.IModule = angular.module(D3VIZ_MODULE_NAME, [
  CORE_MODULE.name
]);
D3VIZ_MODULE.controller('D3PieController', D3PieController);
D3VIZ_MODULE.directive('d3counter', D3CounterDirective.Factory());
D3VIZ_MODULE.directive('d3pie', D3PieDirective.Factory());

