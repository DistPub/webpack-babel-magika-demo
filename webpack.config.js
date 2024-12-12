module.exports = {
    mode: 'development',
    externals: {'node:fs/promises': 'commonjs2 node:fs/promises'},
    resolve: {
        fallback: {fs: false}
    },
    module: {
        rules: [{
            test: /\.m?js$/,
            exclude: {
                and: [/node_modules/],
                not: [/magika/]
            },
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [[
                        '@babel/preset-env', {
                            "targets": "last 1 Chrome versions"
                        }
		    ]]
                }
            }
        }]
    }
}
