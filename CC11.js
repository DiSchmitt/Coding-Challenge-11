//U4888-2664
function main() {
  var bardata = [100, 420, 230, 850, 560, 925];
  //Task 1: Define the dimensions for the SVG container, ensuring adequate space for each bar. Set the width to 500 pixels
  var width = 500;
  var barHeight = 20;
  var margin = 1; // 1-pixel margin between bars

  // Calculate total height based on number of data points and bar height
  var totalHeight = (barHeight + margin) * bardata.length;

  // Task 2: Create linear scale for x-axis
  var xScale = d3
    .scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([50, 500]); // Range from 50 pixels to 500 pixels

  var graph = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", totalHeight);

  var bar = graph
    .selectAll("g")
    .data(bardata)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0," + i * (barHeight + margin) + ")";
    });

  bar
    .append("rect")
    .attr("width", function (d) {
      return xScale(d);
    })
    .attr("height", barHeight - 1)
    .attr("fill", "steelblue");
}

document.addEventListener("DOMContentLoaded", main);
