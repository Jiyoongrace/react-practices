const path = require('path');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

module.exports = function(env) {
    return {
        mode: "none",
        entry: path.resolve(`src/index.js`),
        output: {
            path: path.resolve('../backend/src/main/resources'),
            filename: 'assets/js/main.js',
            assetModuleFilename: 'assets/images/[hash][ext]'
        },
        module: {
            rules:[{
                test: /\.js/i,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    configFile: path.resolve('config/babel.config.json')
                }
            }, {
                test: /\.(c|sa|sc)ss$/i,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }, 
                    'sass-loader'
                ]
            }, {
                test: /\.(png|gif|jp?eg|svg|ico|tif?f|bmp)/i,
                type: 'asset/resource'
            }]
        },
        plugins: [
            // 대소문자를 다르게 처리하는 파일 시스템에서도 모두 동일하게 동작시키게 하기 위해
            // 웹팩 실행 시 file path의 대소문자가 정확히 일치하는지 체크한다.
            new CaseSensitivePathsPlugin()
        ],
        devtool: "eval-source-map",        
        devServer: {
            host: '0.0.0.0',
            port: 9090,
            liveReload: true,
            compress: true,
            hot: false,
            proxy: [{
                context: ['/api', '/assets/gallery'], // /assets/gallery 에 접근 가능하도록
                target: 'http://localhost:8080',
            }],            
            static: {
                directory: path.resolve('./public')
            },
            historyApiFallback: true
        }    
    };
}