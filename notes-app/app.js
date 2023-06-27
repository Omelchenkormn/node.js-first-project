const fs = require("fs");
const path = require("path");
const os = require("os");

// fs.mkdirSync(path.resolve(__dirname, "dir"));

// fs.writeFileSync(path.resolve(__dirname, "notes.txt"), "new text", () => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file save");
// });

// fs.appendFile(path.resolve(__dirname, "notes.txt"), " in the end 3", (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("file save");
// });

// try {
//   fs.appendFileSync("notes.txt", "data to append");
//   console.log('The "data to append" was appended to file!');
// } catch (err) {
//   console.error(err);
// }

// const text = process.env.TEXT || "";

// fs.writeFileAsync(path.resolve(__dirname, "notes.txt"), text)
//   .then(() => readFileAsync(path.resolve(__dirname, "notes.txt")))
//   .then((data) => data.split(" ").length)
//   .then((count) =>
//     writeFileAsync(path.resolve(__dirname, "count.txt"), `count words ${count}`)
//   );

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);
