module.exports={
	entry:'./src/js/app.js',   //入口文件
	output:{       //出口文件
		path:__dirname + "/dist",
		filename:'bundle.js'
	},
	//需要依赖的插件或者是装载器
	module:{
		loaders:[
			{test:/\.css$/,loader:'style-loader!css-loader'},
			{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:/node_modules/,
				query:{
					presets:['es2015']
				}
			}
		]
	}
}