(function(){
    var width = 1180,
        height = 280;
//2150
    var svg = d3.select("#chart")
      .append("svg")
      .attr("height", height)
      .attr("width", width)
      .append("g")
      .attr("transform", "translate(620,-80)")

      //let yScale = d3.scaleLinear().domain([1990,2020]).range([0,15000]);
      //yaxis = d3.axisLeft().scale(yScale).ticks(30).tickFormat(d3.format("1"));
      //gAxis = svg.append("g").attr("transform", "translate(1450,-4800)").call(yaxis),
      

    d3.queue()
      .defer(d3.csv, "conference.csv")
      .await(ready)
//  

    var forceCollide = d3.forceCollide(function(d){
      return radiusScale(d.authornum_77)
    })
    var forceY = d3.forceY(function(d){
      if(d.Year == "1990") {return -580 }
      if(d.Year == "1991") {return -540 }
      if(d.Year == "1992") {return -500 }
      if(d.Year == "1993") {return -460 }
      if(d.Year == "1994") {return -420 }
      if(d.Year == "1995") {return -380 }
      if(d.Year == "1996") {return -340 }
      if(d.Year == "1997") {return -300 }
      if(d.Year == "1998") {return -260 }
      if(d.Year == "1999") {return -220 }
      if(d.Year == "2000") {return -180 }
      if(d.Year == "2001") {return -140 }
      if(d.Year == "2002") {return -100 }
      if(d.Year == "2003") {return -60 }
      if(d.Year == "2004") {return -20 }
      if(d.Year == "2005") {return 20 }
      if(d.Year == "2006") {return 60 }
      if(d.Year == "2007") {return 100 }
      if(d.Year == "2008") {return 140 }
      if(d.Year == "2009") {return 180 }
      if(d.Year == "2010") {return 220 }
      if(d.Year == "2011") {return 260 }
      if(d.Year == "2012") {return 300 }
      if(d.Year == "2013") {return 340 }
      if(d.Year == "2014") {return 380 }
      if(d.Year == "2015") {return 420 }
      if(d.Year == "2016") {return 460 }
      if(d.Year == "2017") {return 500 }
      if(d.Year == "2018") {return 540 }
      if(d.Year == "2019") {return 580 }
      if(d.Year == "2020") {return 620 }

      
    })
     var simulation = d3.forceSimulation()
      .force("x",d3.forceX(function(d){
        return width/5;
      }).strength(0.08))
      .force("y",forceY)      
      .force("collied",forceCollide)

    var radiusScale = d3.scaleSqrt().domain([0.77,6.16]).range([0,7])

    function colorFill(t){
      if (t=="Vis") {
        return "#f8b62b";
      }
      if (t=="VAST"){
        return "#23ac38";
      }if (t=="SciVis"){
        return "#28a7e1";
      }if (t=="InfoVis"){
        return "#e83428";
      }else{
        return "purple"
      }
    }

    
    function coloropacity(t){
      
      // [0,2859] standardized
      if (0 < t < 2) {
        return t;
      }
      if (2 < t) {
        return 1;
      }else{
        return 0
      }
    }


    function ready (error, datapoints) {

        var circles = svg.selectAll(".artist")
          .data(datapoints)
          .enter().append("circle")
          .attr("class", "artist")

          .attr("r", function(d){
            return radiusScale(d.authornum_77)
          })
          .attr("fill",  function(d){
            return colorFill(d.Conference)
          })
          .attr("opacity", function(d){
            return coloropacity(d.cite_log_one)
          })

          .on("mouseover",function(d,i){

            d3.select(this)
                .attr("opacity",1);
           })
          .on("mouseout",function(d,i){
            
            d3.select(this)
                .transition()
                .duration(100)
                .attr("opacity", function(d){
                  return coloropacity(d.cite_log_one)
                });

          })

          .on("click", function(d,i) {
            window.open(d.Link) 
            //d3.select(this)
            //.style("fill", "purple");
          });
          
          
          
         simulation.nodes(datapoints)
          .on('tick',ticked)

        function ticked() {
            circles
                .attr("cx", function(d){
                    return d.y
                })
                .attr("cy", function(d){
                    return d.x
                })
        }
    }

})();