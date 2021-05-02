module.exports = {
    // 仮js entry
    entry: `./src/js/index.js`,

    output: {
        // OSS->/distに出す
        path: `${__dirname}/dist`,
        filename: "main.js"
    },
    // {development,production,none} のちに変える
    mode: "development"
};
