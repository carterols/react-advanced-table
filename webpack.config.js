const path = require('path');

module.exports =  {
    mode: 'production',
    entry: {
        ReactAdvancedTable: './src/ReactAdvancedTable.jsx',
        TableCell: './src/TableCell.jsx',
        TableRow: './src/TableRow.jsx',
        TableCellHeader: './src/TableCellHeader.jsx'
    },
    output: {
        path: path.resolve('lib'),
        filename: '[name].js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
};