const fs = require("fs");

module.exports = function () {
  fs.readdir("./", "utf8", (err, files) => {
    if (err) {
      throw err;
    } else {
      process.stdin.on("data", (data) => {
        const cmd = data.toString().trim();

        if (cmd === "ls") {
          process.stdout.write(files.join("\n"));
          process.stdout.write("\nprompt > ");
        }
      });
    }
  });
};
