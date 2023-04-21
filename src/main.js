import data from "./data.json";
import "normalize.css";
import "./style/index.css";

const app = document.querySelector("#app");
const dataSource = data.data;
const fileForwards = "https://yhyjx.github.io/assets/resource";
app.innerHTML = `
  <canvas id="waterfall"></canvas>
  <div class="container">
    <h1>资源列表</h1>
    <div class="content">
    ${dataSource
      .map(
        (item) =>
          `<a href="${fileForwards}/${item.filePath}" download="${item.fileName}">${item.fileName}</a>`
      )
      .join("")}
    </div>
  </div>
`;

var waterfall = document.getElementById("waterfall");
var ctx = waterfall.getContext("2d");
waterfall.height = window.innerHeight;
waterfall.width = window.innerWidth;
var chinese = "readdirSync throw new Error(err)";
chinese = chinese.split("");
var font_size = 10;
var columns = waterfall.width / font_size;
var drops = [];
for (var x = 0; x < columns; x++) drops[x] = 1;
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, waterfall.width, waterfall.height);
  ctx.fillStyle = "#0F0";
  ctx.font = font_size + "px arial";
  for (var i = 0; i < drops.length; i++) {
    var text = chinese[Math.floor(Math.random() * chinese.length)];
    ctx.fillText(text, i * font_size, drops[i] * font_size);
    if (drops[i] * font_size > waterfall.height && Math.random() > 0.975)
      drops[i] = 0;
    drops[i]++;
  }
}
setInterval(draw, 50);

console.log("创建成功", data.data);
