import data from "./data.json";
import "normalize.css";
import "./style/index.css";

const app = document.querySelector("#app");
const dataSource = data.data;
const fileForwards = "https://yhyjx.github.io/assets/resource";
app.innerHTML = `
  <div class="container">
    ${dataSource
      .map(
        (item) =>
          `<a href="${fileForwards}/${item.filePath}" >${item.fileName}</a>`
      )
      .join("")}
  </div>
`;

console.log(data.data);
