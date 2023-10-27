console.log("connected");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Define line properties
var lineWidth = 1; // Width of the line
var lineColor = "0000"; // Color of the line
var ellipseColor = "#fffff";
var ellipseFillColor = "#fffff";
var ellipseStrokeColor = "0000";

//Ellipse properties
var ellipseWidth = 10;
var ellipseHeight = 10;
var ellipseColor = "0000";

ctx.strokeStyle = lineColor;

//reading the redius
var majorRadius = ellipseWidth / 2;
var minorRadius = ellipseHeight / 2;

// Calculate the middle of the canvas
var middleX = canvas.width / 2;
var middleY = canvas.height / 2;
//Grid properties
var numHorizontalLines = majorRadius - 1; // Adjust as needed
var numVerticalLines = majorRadius - 1; // Adjust as needed
var horizontalSpacing = canvas.height / numHorizontalLines;
var verticalSpacing = canvas.width / numVerticalLines;

// var svgElements = "";
// Array to store line data
var lineData = [];


function draw() {
  layoutGenerator();
}

function layoutGenerator() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  lineData = []; // Clear the line data
  //Grid properties
  var numHorizontalLines = majorRadius - 1; // Adjust as needed
  var numVerticalLines = majorRadius - 1; // Adjust as needed
  var horizontalSpacing = canvas.height / numHorizontalLines;
  var verticalSpacing = canvas.width / numVerticalLines;

  // Draw grid lines
  for (var x = verticalSpacing; x < canvas.width; x += verticalSpacing) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
    lineData.push({ x1: x, y1: 0, x2: x, y2: canvas.height });
}

for (var y = horizontalSpacing; y < canvas.height; y += horizontalSpacing) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
    lineData.push({ x1: 0, y1: y, x2: canvas.width, y2: y });
}

  // Set line properties
  ctx.lineWidth = lineWidth;
  ctx.strokeStyle = lineColor;

  ctx.beginPath();
            ctx.moveTo(middleX, 0);
            ctx.lineTo(middleX, canvas.height);
            ctx.stroke();
            lineData.push({ x1: middleX, y1: 0, x2: middleX, y2: canvas.height });

            ctx.beginPath();
            ctx.moveTo(0, middleY);
            ctx.lineTo(canvas.width, middleY);
            ctx.stroke();
            lineData.push({ x1: 0, y1: middleY, x2: canvas.width, y2: middleY });

            ctx.fillStyle = ellipseFillColor;
            ctx.strokeStyle = ellipseStrokeColor;
            ctx.lineWidth = 2;

            ctx.beginPath();
            ctx.ellipse(middleX, middleY, majorRadius, minorRadius, 0, 0, 2 * Math.PI);
            ctx.fill();
            ctx.stroke();
  

  //loging the radius
  console.log("ellipseHeight:", ellipseHeight);
  console.log("ellipseWidth:", ellipseWidth);
}
function exportToSVG() {
  var svgString = buildSVG(); // Get the SVG string with elements

            // Create a unique file name with a timestamp
            var timestamp = new Date().toISOString().replace(/[:.]/g, "-");
            var fileName = 'drawing_' + timestamp + '.svg';

            // Create a download link for the SVG file
            var blob = new Blob([svgString], { type: 'image/svg+xml' });
            var url = URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = fileName;
            a.click();
}
function buildSVG() {  // Create an SVG string representing the elements
  var svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="' + canvas.width + '" height="' + canvas.height + '">\n';

  // Include grid lines as paths
  for (var i = 0; i < lineData.length; i++) {
      svgString += '<path d="M' + lineData[i].x1 + ' ' + lineData[i].y1 + ' L' + lineData[i].x2 + ' ' + lineData[i].y2 + '" stroke="' + lineColor + '" stroke-width="' + lineWidth + '" />\n';
  }

  // Include ellipse as a path
  svgString += '<path d="M' + middleX + ' ' + middleY + ' m-' + majorRadius + ',0 a' + majorRadius + ',' + minorRadius + ' 0 1,0 ' + 2 * majorRadius + ',0 a' + majorRadius + ',' + minorRadius + ' 0 1,0 -' + 2 * majorRadius + ',0" fill="' + ellipseFillColor + '" stroke="' + ellipseStrokeColor + '" stroke-width="2" />\n';

  svgString += '</svg>';

  return svgString;
}

canvas.addEventListener("click", function () {
  majorRadius += 1; // Increase major radius by 1 pixels
  minorRadius += 1; // Increase minor radius by 1 pixels
  draw();
  
});
document.getElementById("exportButton").addEventListener("click", exportToSVG);
draw();

console.log("done");
