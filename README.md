##整个系列课程所学习到的内容

###如何将js文件进行模块化
	
		#### module.exports  require()
		#### 自定义文件，引入时需要使用./
		#### npm下载的文件，不需要./


###如何使用第三方

		#### 1.在npm服务器中下载第三方
		#### 2.require（）第三方



###如何将静态文件模块化

		#### 1.创建css文件
		#### 2.下载对应的加载器
		#### 3.修饰我们的css文件 !css-loader



#### 如何配置webpack.config.js

		#### 出口稳健 入口文件 模块 加载器



#### 如何使用pcakage.json启动项目

		#### scripts "build" "start"



###如何将es6转换成es5

		#### babel babel-core babel-loader...





#### npm config set registry https://registry.npm.taobao.org   淘宝镜像
####全局安装webpack  sudo npm install -g webpack
####新建文件夹 webpack-my-app
####cd 当前路径 
####npm init
####回车
####回车
####会自动生成package.json

####创建index.html  <script src="bundle.js">

####webpack app.js bundle.js --watch //把app.js打包成bundle.js


####webpack  -运用第三方库
####npm install jquery --save

####打包css
#### npm install css-loader style-loader --save-dev
####加载css require('!style-loader!css-loader!./style.css')
 
####需要进行优化

####新建webpack.config.js
	module.exports={
		entry:'./src/js/app.js',
		output:{
			path:__dirname + '/dist',
			filename:'bundle.js'
		},
		module:{
			loaders:[
				{
					text:/\.css$/,
					loader:'style-loader!css-loader'
				}
			]
		}
	}

	会编辑好几次

####假如webpack.config.js配置好了之后  命令行输入webpack 直接运行打包
####package.json  //进行优化
	在'script':{
		"start":'webpack-dev-server --entry ./src/js/app.js --output-filename ./dist/bundle.js',
		"build":'webpack'
	}

#### npm build
#### npm start

#### sudo npm install -g webpack-dev-server --save-dev	






####babel(es6转换成es5)
#### sudo npm install babel-core babel-loader babel-preset-es2015 --save-dev
#### module.exports={
		entry:'./src/js/app.js',
		output:{
			path:__dirname + '/dist',
			filename:'bundle.js'
		},
		module:{
			loaders:[
				{
					text:/\.css$/,
					loader:'style-loader!css-loader'
				},
				{
					text:/\.js$/,
					loader:'babel-loader',
					exclude:/node_modules/,
					query:{
						presets:['es2015']
					}
				}
			]
		}
	}