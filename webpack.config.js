const path = require("path");

module.exports = {
    entry: "./src/App.js", 
    output: {
        path: path.join(__dirname, "/build"), 
        filename: "bundle.js" // Tên file được build ra
    },
    module: {
        rules: []
    },
    // Chứa các plugins sẽ cài đặt trong tương lai
    plugins: [
    ]
};