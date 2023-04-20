const path = require("path");
const fs = require("fs");
function returnJson() {
  const files = fs.readdirSync(path.resolve(__dirname, "../src/resource"));
  const jsonArr = JSON.stringify(
    {
      data: files.map((file) => {
        return {
          fileName: file.split(".")[0],
          filePath: file,
        };
      }),
    },
    null,
    "\t"
  );
  fs.writeFile(path.resolve(__dirname, "../src/data.json"), jsonArr, (err) => {
    if (err) {
      throw new Error(err);
    }
    console.log("文件创建成功");
  });
}

module.exports = {
  returnJson,
};
