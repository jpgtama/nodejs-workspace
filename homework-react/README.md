### install --save-dev:

```bat
npm install webpack  webpack-dev-server  babel-core  babel-loader babel-preset-react babel-preset-es2015 html-webpack-plugin --save-dev
```


### install --save:

```bat
npm install react react-dom react-router-dom --save
```


### Why I don't use `^` in version?
I used this but keep geting a strange error from `webpack-dev-server`, `compile of undefined`. I finally find out this is because the version of `webpack-dev-server` was upgraded to `3.1.0` and the version I wrote in package json is `^3.0.0`.

SoB.


### using sass
I used this [link](https://www.jonathan-petitcolas.com/2015/05/15/howto-setup-webpack-on-es6-react-application-with-sass.html) to learn how to include sass into webpack.

By the way, I put the plugin `HtmlWebpackPlugin` in front of `ExtractTextPlugin` and the generated css was injected into the index html. Magic!!!
