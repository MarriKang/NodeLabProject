const request = require('request');

module.exports = function() {
    process.stdin.on("data", (data) => {
        const cmd = data.toString().trim();
        let input = cmd.split(" ");

        if (input[0] === 'curl') {
            request(`${input[1]}`, function (error, response, body) {
                if (error) {
                    throw error;
                } else {
                    process.stdout.write(body);
                }
});
        }
    })
}