const fs = require("fs");

module.exports = function () {
  process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();
    let input = cmd.split(" ");
    if (input[0] === "cat") {
      fs.readFile(`./${input[1]}`, (err, data) => {
        if (err) throw err;
        process.stdout.write(data);
      });
      process.stdout.write("\nprompt > ");
    }
  });
};
