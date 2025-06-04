// WITHOUT STYLING PANEL (I recommend starting with this configuration at the beginning of the development process to avoid complications):
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
}
// WITH SYLING PANEL (delete above code and uncomment below if styling panel is implemented):
// const path = require('path');
// module.exports = {
//     entry: ['./src/index.js', './src/aps_index.js'],
//     output: {
//         filename: 'bundle.js',
//         path: path.resolve(__dirname, 'dist'),
//     },
//     module: {
//         rules: [
//             { 
//                 test: /\.js$/, 
//                 exclude: /node_modules/, 
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ['@babel/preset-env'],
//                     },
//                 },
//             },
//         ],
//     },
// }