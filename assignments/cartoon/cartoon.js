const canvas = document.getElementById("cartoonCanvas");
const ctx = canvas.getContext("2d");

// =====================================
// SKY BACKGROUND
// =====================================
ctx.fillStyle = "#87CEEB";
ctx.fillRect(0, 0, canvas.width, canvas.height);

// =====================================
// SUN
// =====================================
ctx.beginPath();
ctx.arc(760, 90, 50, 0, Math.PI * 2);
ctx.fillStyle = "#FFD54F";
ctx.fill();
ctx.strokeStyle = "#F59E0B";
ctx.lineWidth = 3;
ctx.stroke();

// Sun rays
for (let i = 0; i < 12; i++) {
  ctx.save();
  ctx.translate(760, 90);
  ctx.rotate((i * Math.PI) / 6);

  ctx.beginPath();
  ctx.moveTo(65, 0);
  ctx.lineTo(90, 0);
  ctx.strokeStyle = "#F59E0B";
  ctx.lineWidth = 3;
  ctx.stroke();

  ctx.restore();
}

// =====================================
// CLOUDS
// =====================================
function drawCloud(x, y) {
  ctx.fillStyle = "white";

  ctx.beginPath();
  ctx.arc(x, y, 20, 0, Math.PI * 2);
  ctx.arc(x + 25, y - 10, 25, 0, Math.PI * 2);
  ctx.arc(x + 50, y, 20, 0, Math.PI * 2);
  ctx.arc(x + 25, y + 10, 18, 0, Math.PI * 2);
  ctx.fill();
}

drawCloud(100, 90);
drawCloud(240, 130);

// =====================================
// GROUND
// =====================================
ctx.fillStyle = "#4CAF50";
ctx.fillRect(0, 400, canvas.width, 150);

// =====================================
// HOUSE BODY
// =====================================
ctx.fillStyle = "#E9C46A";
ctx.fillRect(300, 220, 250, 180);
ctx.strokeStyle = "#5B4636";
ctx.lineWidth = 3;
ctx.strokeRect(300, 220, 250, 180);

// =====================================
// ROOF
// =====================================
ctx.beginPath();
ctx.moveTo(270, 220);
ctx.lineTo(425, 120);
ctx.lineTo(580, 220);
ctx.closePath();
ctx.fillStyle = "#B91C1C";
ctx.fill();
ctx.strokeStyle = "#7F1D1D";
ctx.stroke();

// =====================================
// DOOR
// =====================================
ctx.fillStyle = "#7C4A2D";
ctx.fillRect(405, 310, 50, 90);
ctx.strokeStyle = "#4A2C1D";
ctx.strokeRect(405, 310, 50, 90);

// Door knob
ctx.beginPath();
ctx.arc(445, 355, 4, 0, Math.PI * 2);
ctx.fillStyle = "gold";
ctx.fill();

// =====================================
// WINDOWS
// =====================================
ctx.fillStyle = "#CFEFFF";
ctx.fillRect(335, 260, 55, 55);
ctx.fillRect(460, 260, 55, 55);
ctx.strokeStyle = "#374151";
ctx.strokeRect(335, 260, 55, 55);
ctx.strokeRect(460, 260, 55, 55);

// Window dividers
ctx.beginPath();
ctx.moveTo(362.5, 260);
ctx.lineTo(362.5, 315);
ctx.moveTo(335, 287.5);
ctx.lineTo(390, 287.5);

ctx.moveTo(487.5, 260);
ctx.lineTo(487.5, 315);
ctx.moveTo(460, 287.5);
ctx.lineTo(515, 287.5);
ctx.stroke();

// =====================================
// CHIMNEY
// =====================================
ctx.fillStyle = "#8B4513";
ctx.fillRect(500, 150, 30, 60);
ctx.strokeStyle = "#5C3310";
ctx.strokeRect(500, 150, 30, 60);

// =====================================
// TREE
// =====================================
// Trunk
ctx.fillStyle = "#8B5A2B";
ctx.fillRect(150, 290, 30, 110);

// Leaves
ctx.fillStyle = "#228B22";
ctx.beginPath();
ctx.arc(165, 250, 45, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(135, 280, 35, 0, Math.PI * 2);
ctx.fill();

ctx.beginPath();
ctx.arc(195, 280, 35, 0, Math.PI * 2);
ctx.fill();

// =====================================
// FENCE USING FOR LOOP + TRANSLATE
// =====================================
for (let i = 0; i < 8; i++) {
  ctx.save();
  ctx.translate(600 + i * 30, 0);

  ctx.fillStyle = "#F5DEB3";
  ctx.fillRect(0, 320, 15, 80);
  ctx.strokeStyle = "#8B6B3F";
  ctx.strokeRect(0, 320, 15, 80);

  ctx.beginPath();
  ctx.moveTo(0, 320);
  ctx.lineTo(7.5, 300);
  ctx.lineTo(15, 320);
  ctx.closePath();
  ctx.fillStyle = "#F5DEB3";
  ctx.fill();
  ctx.stroke();

  ctx.restore();
}

// Fence rails
ctx.fillStyle = "#DEB887";
ctx.fillRect(595, 340, 235, 10);
ctx.fillRect(595, 370, 235, 10);

// =====================================
// FLOWERS
// =====================================
function drawFlower(x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x, y + 25);
  ctx.strokeStyle = "green";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "pink";
  ctx.beginPath();
  ctx.arc(x, y, 5, 0, Math.PI * 2);
  ctx.arc(x - 8, y, 5, 0, Math.PI * 2);
  ctx.arc(x + 8, y, 5, 0, Math.PI * 2);
  ctx.arc(x, y - 8, 5, 0, Math.PI * 2);
  ctx.arc(x, y + 8, 5, 0, Math.PI * 2);
  ctx.fill();

  ctx.beginPath();
  ctx.arc(x, y, 4, 0, Math.PI * 2);
  ctx.fillStyle = "yellow";
  ctx.fill();
}

drawFlower(90, 430);
drawFlower(130, 450);
drawFlower(210, 435);
drawFlower(260, 455);

// =====================================
// CAPTION TEXT ON CANVAS
// =====================================
ctx.fillStyle = "#111827";
ctx.font = "bold 28px Arial";
ctx.fillText("A Bright Cartoon Home", 290, 40);

ctx.font = "20px Arial";
ctx.fillText("Welcome to Tasnim's Canvas World!", 275, 75);