console.log("connected");
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

// Define line properties
var lineWidth = 1; // Width of the line
var lineColor = "0000"; // Color of the line

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
var numHorizontalLines = (ellipseHeight-1); // Adjust as needed
var numVerticalLines = (ellipseHeight-1);   // Adjust as needed
var horizontalSpacing = canvas.height / numHorizontalLines;
var verticalSpacing = canvas.width / numVerticalLines;

  

function draw() {
  layoutGenerator();
 
}

function layoutGenerator() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Calculate grid line spacing
  var horizontalSpacing = canvas.height / numHorizontalLines;
  var verticalSpacing = canvas.width / numVerticalLines;

  ctx.fillStyle = lineColor;
  ctx.strokeStyle = lineColor;
  ctx.lineWidth = 2;

  // Draw grid lines
  var gridLines = '';

  for (var x = verticalSpacing; x < canvas.width; x += verticalSpacing) {
      gridLines += '<path d="M' + x + ' 0 L' + x + ' ' + canvas.height + '" stroke="' + lineColor + '" stroke-width="' + lineWidth + '" />\n';
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, canvas.height);
      ctx.stroke();
  }

  for (var y = horizontalSpacing; y < canvas.height; y += horizontalSpacing) {
      gridLines += '<path d="M0 ' + y + ' L' + canvas.width + ' ' + y + '" stroke="' + lineColor + '" stroke-width="' + lineWidth + '" />\n';
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(canvas.width, y);
      ctx.stroke();
  }

  ctx.beginPath();
  ctx.moveTo(middleX, 0);
  ctx.lineTo(middleX, canvas.height);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(0, middleY);
  ctx.lineTo(canvas.width, middleY);
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(middleX, middleY, majorRadius, minorRadius, 0, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();

  // Generate the full SVG content
  var svgString = '<svg xmlns="http://www.w3.org/2000/svg" width="' + canvas.width + '" height="' + canvas.height + '">\n';
  svgString += '<rect width="100%" height="100%" fill="white" />\n'; // White background
  svgString += gridLines; // Grid lines as paths
  svgString += '<path d="M' + middleX + ' 0 L' + middleX + ' ' + canvas.height + '" stroke="' + lineColor + '" stroke-width="' + lineWidth + '" />\n';
  svgString += '<path d="M0 ' + middleY + ' L' + canvas.width + ' ' + middleY + '" stroke="' + lineColor + '" stroke-width="' + lineWidth + '" />\n';
  svgString += '<ellipse cx="' + middleX + '" cy="' + middleY + '" rx="' + majorRadius + '" ry="' + minorRadius + '" fill="' + lineColor + '" stroke="' + lineColor + '" stroke-width="2" />\n';
  svgString += '</svg';

  return svgString;
}


function exportToSVG() {
      // Create a unique file name with a timestamp
      var timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      var fileName = 'drawing_' + timestamp + '.svg';

      // Create an SVG string representing the drawing
      var svgString = draw();

      // Create a download link for the SVG file
      var blob = new Blob([svgString], { type: 'image/svg+xml' });
      var url = URL.createObjectURL(blob);
      var a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      a.click();
}

canvas.addEventListener("click", function () {
  ellipseWidth += 1; // Increase major radius by 1 pixels
  ellipseHeight += 1; // Increase minor radius by 1 pixels
  draw(); // Redraw the canvas
});

document.getElementById("exportButton").addEventListener("click", exportToSVG);

draw();

console.log("done");
