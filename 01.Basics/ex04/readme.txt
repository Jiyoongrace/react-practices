ex04: Application Bundling

[참고] webpack-practices ex01 ~ ex06



== [실습] ===============================================

<1>Init Project
$ mkdir ex04
$ cd ex04
$ npm init -y 


<2> Install Packages
$ npm i -D webpack webpack-cli webpack-dev-server css-loader style-loader sass-loader node-sass
* mac은 node-sass 오류 -> sass 로 사용하기


<3> NPM scripting : package.json
"scripts": {
    "start": "npx webpack serve  --progress",
    "build": "npx webpack"
} 


<4> Configuration
webpack.config.js


<5> Landing Page
public/index.html 


<6> Writing Application
1. src/index.js
2. src/App.js


<7> Build(Bundling)
$ npm run build


<8> Test
$ npm start