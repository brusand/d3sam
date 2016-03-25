  "use strict";
//const Counter_PANEL_TPL = require('./login-panel.component.tpl.html');
//import {RestService} from '../../live-objects/rest.service';
import * as d3 from 'd3';

export class D3PieController  {

    public options
    public value;
    
    /* @ngInject */
    static $inject = ['$scope'];

    constructor($scope)
    {
        $scope.d3pie = this

         $scope.options = {
            chart: {
                type: 'pieChart',
                    // title options
                height: 450,
                donut: true,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                showLabels: true,

                pie: {
                    startAngle: function(d) { return d.startAngle/2 -Math.PI/2 },
                    endAngle: function(d) { return d.endAngle/2 -Math.PI/2 }
                },
                duration: 500,
                legend: {
                    margin: {
                        top: 5,
                        right: 70,
                        bottom: 5,
                        left: 0
                    }
                }
            },
            title: {
                enable: true,
                text: $scope.d3pie.title
            }
        };
        $scope.value = [
            {
                key: "Tenant D3Pie 1",
                y: 5
            },
            {
                key: "Tenant D3Pie 2",
                y: 10
            }
        ];
        
    };
    
    
 
//   restOfTheData(){

//        addText(function(){
//            return this.numberWithCommas(total);
//        },0,'30px');


//        addText(function(){
//            return model.label;
//        },25,'10px');

//    };

//    restOfTheData();


}


export class D3PieDirective {
    public link: () => void;
    scope = { 
        id: '@id',
        title: '@title',
        value: '=',
        options:'='        
    };
    bindToController = {
        options: '=',
        value: '='    
    };
    template = "<nvd3 options='options' data='value'></nvd3>";
    //templateUrl = "./nvd3.pie.tpl.html";

    controllerAs ='d3pie';
    controller = D3PieController;
    constructor()
    {
         D3PieDirective.prototype.link = () =>
        {
  
        };
    }

    public static Factory()
    {
        var directive = () =>
        {
            return new D3PieDirective();
        };

        directive['$inject'] = [];

        return directive;
    }

}

