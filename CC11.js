//U4888-2664
function main() {
    var bardata = [100, 420, 230, 850, 560, 925];
    var width = 500;
    var scaleFactor = .3;
    var barHeight = 20;
    var margin = 1; // 1-pixel margin between bars
  
    // Calculate total height based on number of data points and bar height
    var totalHeight = (barHeight + margin) * bardata.length;
  
    // Create SVG container using D3.js
    var graph = d3.select("body")
      .append("svg")
      .attr("width", width)
      .attr("height", totalHeight);
  
    // Create groups for each bar
    var bar = graph.selectAll("g")
      .data(bardata)
      .enter()
      .append("g")
      .attr("transform", function(d, i) {
        return "translate(0," + i * (barHeight + margin) + ")";
      });
  
    // Append rectangles (bars) to each group
    bar.append("rect")
      .attr("width", function(d) {
        return d * scaleFactor;
      })
      .attr("height", barHeight - 1)
      .attr("fill", "steelblue");
  
    // Append text labels to each bar
    bar.append("text")
      .attr("x", function(d) {
        return d * scaleFactor;
      })
      .attr("y", barHeight / 2)
      .attr("dy", ".35em")
      .text(function(d) {
        return d;
      });
  }
  
  // Call the main function when the document is loaded
  document.addEventListener("DOMContentLoaded", main);