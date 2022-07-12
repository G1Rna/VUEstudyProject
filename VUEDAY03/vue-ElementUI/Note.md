因为使用全局科学上网进行npm安装，未使用过cnpm，所以踩坑了，记录一下：
ElementUI使用需要安装node-sass，sass-loader
使用npm安装指令：
npm install sass-loader node-sass --save-dev
当前时间：2022年7月11日15:55:03
npm下载的node-sass，sass-loader 不适合当前nodejs 12.14.0版本
所以需要降级，降级指令：
npm install sass-loader@7.3.1 --save-dev ①
npm install node-sass@4.14.1 --save-dev ②
①指令npm可以连接直接下载，没问题
②指令出现npm下载报错，对应的github网站好像被删除了所以使用cnpm指令进行下载
由于之前安装过cnpm就不在赘述如何安装cnpm
使用cnpm指令安装node-sass：
cnpm install node-sass@4.14.1 --save-dev
此时发现cnpm无法安装，报错内容：
throw err;^Error: Cannot find module 'fs/promises
查询后得知，cnpm的版本不适应nodejs12.14.0
cnpm的版本高于8.2.0，无法在 12.14.0 的node 版本下使用
所以cnpm的版本也需要降级
降级指令：
npm uninstall -g cnpm // 首先卸载 cnpm
npm install cnpm@7.1.0 -g // 安装指定版本 cnpm
再次安装node-sass则成功。
