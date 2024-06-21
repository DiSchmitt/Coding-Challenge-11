//U4888-2664
function main() {
  // dataset
  var bardata = [100, 420, 230, 850, 560, 925];

  // Task 1: Define the dimensions for the SVG container, ensuring adequate space for each bar.
  //Set the width to 500 pixels
  //allowing for a bar height of 20 pixels with a 1-pixel margin between bars.
  var width = 500;
  var barHeight = 20;
  var margin = 1;

  // Calculate height dynamically based on the number of data points,
  var totalHeight = (barHeight + margin) * bardata.length;

  var svg = d3
    .select("body")
    .append("svg")
    .attr("width", width)
    .attr("height", totalHeight)
    .attr("class", "chart");

  // Task 2: Configure linear scale for bar widths
  var xScale = d3
    .scaleLinear()
    .domain([0, d3.max(bardata)])
    .range([50, 500]);

  // Task 3: For each data point, create a <g> element within the SVG
  // that will house both a <rect> for the bar and a <text> for the label.
  var bars = svg
    .selectAll("g")
    .data(bardata)
    .enter()
    .append("g")
    .attr("transform", function (d, i) {
      return "translate(0," + i * (barHeight + margin) + ")";
    });

  // make the bars
  bars
    .append("rect")
    .attr("width", function (d) {
      return xScale(d);
    })
    .attr("height", barHeight - 1)
    .attr("fill", "steelblue");

  // Task 4: Append text labels inside each bar
  bars
    .append("text")
    .attr("x", function (d) {
      return xScale(d) - 25; // Position text at end of bar
    })
    .attr("y", barHeight / 2)
    .attr("dy", ".35em")
    .text(function (d) {
      return d; 
    });

}
document.addEventListener("DOMContentLoaded", main);
