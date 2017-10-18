# React零基础入门

## 前言
此文档主要面向出生在前端（es6+,react,webpack,babel等）新手村的童鞋，主要目的是尽快让童鞋们从lv0尽快升级到lv10，走出新手村，探索更广阔的前端世界。内容较（te）为（bie）基础，请针对自身情况决定是否阅读。
***
## 目录
1. NodeJS安装;
2. 简单介绍npm与cnpm;
3. yarn简单介绍;
4. package.json文件的说明;
5. 总结
***
### 1.NodeJS安装
NodeJS的安装没有技术可言，这里就不说了，而为什么要用Node，你就把Node想成一个使JS能够运行的一个解析器就好。

> https://nodejs.org/en/download/ (Node.js官方安装包及源码下载地址)

> http://www.cnblogs.com/yzadd/p/6547668.html (node详细安装过程及环境变量配置)

***
### 2.简单介绍npm与cnpm
#### 2.1 npm介绍
> http://registry.npmjs.org (npm地址)

> http://npm.taobao.org (cnpm镜像地址)

1.npm（node package manager）是nodejs的包管理器，用于node插件管理（包括安装、卸载、管理依赖等）;

2.使用npm安装插件：命令提示符执行```npm install <name> [-g] [--save-dev]```

```<name>```：node插件名称。

例：```npm install gulp-less --save-dev```

 -g：全局安装。将会安装在C:\Users\Administrator\AppData\Roaming\npm，并且写入系统环境变量;

  不加-g :非全局安装：将会安装在当前定位目录；

 > 当你全局安装后可以通过命令行在任何地方调用它，本地安装将安装在定位目录的node_modules文件夹(存放第三方包)下。

 -save：将保存配置信息至package.json（package.json是nodejs项目配置文件）;

-dev：保存至package.json的devDependencies节点，不指定-dev将保存至dependencies节点;

> 为什么要将配置保存至package.json？因为node插件包相对来说非常庞大，所以不加入版本管理，将配置信息写入package.json并将其加入版本管理，我们直接用命令提示符执行npm install(cnpm install||yarn install)，则会根据package.json下载所有需要的包）。

3.使用npm卸载插件：```npm uninstall <name> [-g] [--save-dev] ```。

4.使用npm更新插件：```npm update <name> [-g] [--save-dev] ```。

5.更新全部插件：```npm update [--save-dev] ```。

6.查看npm帮助：```npm help ```。

7.查看当前目录已安装插件：```npm list```。

#### 2.2 cnpm介绍

1.因为npm安装插件是从国外服务器  http://registry.npmjs.org  下载，受网络影响大，可能出现异常，淘宝团弄了个完整 npmjs.org 镜像（地址： http://npm.taobao.org ），来代替官方版本。

2.安装：命令提示符执行```npm install cnpm -g --registry=https://registry.npm.taobao.org```;

> 注：cnpm跟npm用法完全一致，只是在执行命令时将npm改为cnpm。

***
### 3.yarn简单介绍
> Yarn是Facebook发布了新的 node.js包管理器用以替代npm。使用yarn前需要保证git在全局可以找到，配置好git环境变量。（本人用的是webstorm,是使用中间配置的,需要重启软件）

1.其实 yarn 可以直接像装模块那样用 npm 装：```npm install -g yarn```;

2.yarn的安装依赖的方式不同于yarn,你需要执行以下命令来安装依赖:```yarn add react```(npm 为 npm install react);

3.更新一个依赖

```
yarn upgrade [package]

yarn upgrade [package]@[version]

yarn upgrade [package]@[tag]
```

4.移除一个依赖

```yarn remove [package]```

5安装package.json中所有的依赖项

```yarn   /   yarn install```

6.yarn 更新所有的依赖包

```yarn upgrade-interactive```

***
### 4.package.json文件的说明
 每个项目一般都有一个package.json文件，定义了这个项目所需要的各种模块，以及项目的配置信息。npm install命令根据这个配置文件(不光局限在npm和yarn。nodejs应用都生效)，自动下载所需的模块，也就是配置项目所需的运行和开发环境。

#### 1.概述
package.json文件就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置。比如name就是项目名称，version是版本···。

package.json文件可以手工编写，也可以使用npm init命令自动生成。```$ npm init```在当前目录生成一个基本的package.json文件。有了package.json文件，直接使用```npm install```命令，就会在当前目录中安装所需要的模块。

#### 2.scripts
scripts指定了运行脚本命令的npm命令行缩写，比如start指定了运行npm run start(或yarn run start)时，所要执行的命令。

#### 3.dependencies字段，devDependencies字段
dependencies：指定了项目运行所依赖的模块，

devDependencies：指定项目开发所需要的模块。

> 它们都指向一个对象。该对象的各个成员，分别由模块名和对应的版本要求组成，表示依赖的模块及其版本范围。

#### 4.bin字段
bin项用来指定各个内部命令对应的可执行文件的位置。

>所有node_modules/.bin/目录下的命令，都可以用npm run [命令]的格式运行。在命令行下，键入npm run，然后按tab键，就会显示所有可以使用的命令。

#### 5.main字段
main字段指定了加载的入口文件，require('moduleName')就会加载这个文件。这个字段的默认值是模块根目录下面的index.js。

#### 6.config 字段
config字段用于添加命令行的环境变量。

#### 7.browser字段
browser指定该模板供浏览器使用的版本。Browserify这样的浏览器打包工具，通过它就知道该打包那个文件。

#### 8.engines 字段
engines字段指明了该模块运行的平台，比如 Node 的某个版本或者浏览器,该字段也可以指定适用的npm版本。

#### 9.man字段
man用来指定当前模块的man文档的位置。

#### 10.preferGlobal字段
preferGlobal的值是布尔值，表示当用户不将该模块安装为全局模块时（即不用–global参数），要不要显示警告，表示该模块的本意就是安装为全局模块。

#### 11.style字段
style指定供浏览器使用时，样式文件所在的位置。样式文件打包工具parcelify，通过它知道样式文件的打包位置。

***
### 5.总结
学习React首先要知道它是什么东西，做什么用的，需要的工具和相关配置是做什么的，理解了这些离你自己可以写一个简单的React项目就不远了。