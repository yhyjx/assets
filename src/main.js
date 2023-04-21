import data from "./data.json";
import "normalize.css";
import "./style/index.css";

const app = document.querySelector("#app");
const dataSource = data.data;
const fileForwards = "https://yhyjx.github.io/assets/resource";
app.innerHTML = `
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

console.log("创建成功", data.data);
