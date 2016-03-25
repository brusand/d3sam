  "use strict";
//const Counter_PANEL_TPL = require('./login-panel.component.tpl.html');
//import {RestService} from '../../live-objects/rest.service';
import * as d3 from 'd3';

export class D3CounterController  {

   
    /* @ngInject */
    static $inject = ['$scope'];

    constructor($scope)
    {
       $scope.d3counter = this;
       //this.d3rendering({'label': $scope.label, 'value': $scope.value});
       this.d3rendering({'id': $scope.d3counter.id, 'title': $scope.d3counter.title, 'value': $scope.d3counter.value});

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



    d3rendering(model) {
        var width = 200,
        height = 200;
        var json = {
            "nodes": [
                {"x":80, "r":60, "title": model.title, "value": model.value}
            ]
        };
        var title:string = model.title;

        var p=Math.PI*2;
          
        var svg = d3.select("#"+model.id).html('').append("svg")
		.attr("width", 240)
		.attr("height", 210)            /* Define the data for the circles */
     
        var radius = Math.min(width, height) / 2;
        
        var arc = d3.svg.arc()
            .outerRadius(radius - 10)
            .innerRadius(0);  
            
        var labelArc = d3.svg.arc()
            .outerRadius(65)
            .innerRadius(65)
            .startAngle( 1.5 * Math.PI );
                    
        var arc1 = d3.svg.arc()
            .innerRadius(65)
            .outerRadius(75)
            .startAngle( 0 );
            
    //.endAngle(-p/2)
            var elem = svg.selectAll("g")
                .data(json.nodes)
        
            /*Create and place the "blocks" containing the circle and the text */  
            var elemEnter = elem.enter()
                .append("g")
                .attr("transform", function(d){return "translate("+d.x+",80)"})
            
                .style("fill","navy");
  

    
            //Create an SVG path	
            elemEnter.append("path")
                .attr("id", "wavy") //very important to give the path element a unique ID to reference later
                .datum({endAngle: 2 * Math.PI})
                 .attr("d", arc1) //Notation for an SVG path, from bl.ocks.org/mbostock/2565344
                .style("fill", "navy");
                //.style("stroke", "#AAAAAA");
 
            elemEnter.append("svg:text")
                        .attr("dy", ".35em")
                        //.attr("text-anchor", "middle")
                        //.attr("transform", "translate(" + arc1.centroid + ")")
                        .style("fill", "Black")
                        .style("font", "normal 10px Arial")
                        //.text(model.label);
 
                       .append("textPath") //append a textPath to the text element
                       .attr("xlink:href", "#wavyLabel") //place the ID of the path here
                       //.style("text-anchor","start") //place the text halfway on the arc
                        //.attr("startOffset", "50%")		
                        .text( model.label );
 
                
//            elemEnter.append("path")
//                .attr("id", "wavyLabel") //very important to give the path element a unique ID to reference later
//                .datum({endAngle: 2 * Math.PI})
//                 .attr("d", labelArc) //Notation for an SVG path, from bl.ocks.org/mbostock/2565344
//                .style("fill", "navy");
                
                //.style("stroke", "#AAAAAA");
            //Create an SVG text element and append a textPath element
//            elemEnter.append("text")
                //.attr("x", 5)   //Move the text from the start angle of the arc

//                .attr("dy", +15) //Move the text down
                //.attr("transform", function(d) { return "translate(" + labelArc.centroid(d) + ")"; })
//                .append("textPath") //append a textPath to the text element
//                .attr("xlink:href", "#wavyLabel") //place the ID of the path here
//                .style("text-anchor","start") //place the text halfway on the arc
                //.attr("startOffset", "50%")		
//                .text( label );
          
         elemEnter.append('text')
                .text(model.value)
                .attr({
                    'text-anchor':'middle',
                    y:0
                })
                .style({
                    fill:'#929DAF',
                    'font-size':'60px'
                });
              
         elemEnter.append('text')
                .text(model.title)
                .attr({
                    'text-anchor':'middle',
                    y:25
                })
                .style({
                    fill:'#929DAF',
                    'font-size':'20px'
                });
                          
// okkkk   
//        addText(function(){
//            return this.numberWithCommas(total);
//        },0,'30px');


//        addText(function(){
//            return model.label;
//        },25,'10px');


             
            /*Create the circle for each block */
 //           var circle = elemEnter.append("circle")
 //              .attr("r", 55)
  //              .attr("stroke","white")
    //            .attr("fill", "green")
  
   
            /* Create the text for each block */

  //         var value = elemEnter.append("text")
  //              .style("text-anchor", "middle")
  //              .style("font-size", function(d) { return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 12) + "px"; })
  //              .attr("dy", ".35em")           
  //              .attr("dx", function(d){return 0})
               
  //              .text(function(d){return d.value})  
         
    }
   
}


export class D3CounterDirective {
    public link: () => void;
    scope = { 
        id: '@id',
        title: '@title',
        value: '@value'
        
    };
    bindToController = true;
    controllerAs ='d3counter';
    controller = D3CounterController;
    constructor()
    {
         D3CounterDirective.prototype.link = () =>
        {
  
        };
    }

    public static Factory()
    {
        var directive = () =>
        {
            return new D3CounterDirective();
        };

        directive['$inject'] = [];

        return directive;
    }

}

