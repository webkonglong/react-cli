# react-cli最佳实践

- react
- react-router
- react-redux
- i18n
- scss


# 命令介绍


####安装依赖：`npm install`

####启动项目：`npm run dev`

####项目打包：`npm run build`

####更改语言包:  /tools目录下 `node parse.js`



# 目录介绍

+ config (全局的配置)
+ local_modules (自己写的模块 可以直接和node模块一样引用)
    - ajax( ajax需要返回一个Promise否则redux会报错)
    - prototypeExtend(在原型链扩展了一些方法)
    - storeutil(封装了localStorage的几个方法)
+ public(index.html所在位置)
+ src
    + actions(redux-actions)
    + assets(icon都在这里放)
	+ components(功用组件)
	+ lang(node生成的语言包放这里，这里禁止手动修改)
	+ reducers(redux-reducers)
	+ store(redux-store里面用到ajax需要返回一个Promise)
	+ theme(scss)
		+ app.global.scss(看名字理解 就是最终引入了这个scss在index.js引入了)
		+ var.global.scss(这里声明了一些变量什么的，以后项目改变主题色就会很方便)
		+ _utilites.scss(使用var.global.scss声明的变量)
		+ _icon.scss(所有的icon都在这里定义)
		+ _dialog.scss(这种名称类似于 src/components组件用的scss，比如这个就是dialog组件用到的scss,只是我暂时没有写dialog组件)
	+ Component.jsx(所有.组件+页面都应该继承这个，这个里面定义一些常用的方法，在继承他的页面可以直接 this.xxx去使用 会很方便)
	+ Global.js(全局用到的东西，暂时里面放了一个发布订阅)
	+ Root.js(路由定义在这里)
+ static(静态文件 也是http-server启动的目录)
+ tools(存放`i18n.xlsx`文件目录，也是提取xlsx脚本所在地址)
+ webpack(webpack打包启动之类的文件夹)

# i18n特别注意
做多语言的时候，应该是产品经历给我们`i18n.xlsx`文件 里面类似于 `/tools/i18n.xlsx` 一个语种占用一竖行。拿到`i18n.xlsx`文件后放在`/tools`目录下后 ，在`/tools`目录下运用`node parse.js` 即可

# 联系方式
anmingzhe@me.com
