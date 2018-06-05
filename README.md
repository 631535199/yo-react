# yo-react
yo 自动化构建react项目
====================

```javascript
node --version && npm --version
```
Yeoman 支持node 6+版本 && npm 3+版本(注意查看版本)

```javascript
npm install -g yo
```
安装所需工具yo 

```javascript
npm install -g generator-fountain-webapp
```
安装generator-fountain-webapp

```javascript
mkdir my-new-project && cd my-new-project
```
run  : 创建一个新目录，并进入：

```javascript
yo fountain-webapp
```
运行yo fountain-webapp并选择所需的技术：


使用NPM脚本
```javascript
npm run build
```
在/ dist中构建应用程序的优化版本

```javascript
npm run serve
```
在源文件上启动浏览器同步服务器

```javascript
npm run serve:dist
```
在优化的应用程序上启动服务器

```javascript
npm run test
``` 
用Karma启动你的单元测试

```javascript
npm run test:auto
```
在手表模式下使用Karma启动您的单元测试

或者Gulp任务

如果您已gulp-cli安装在全局程序包中，则可以使用等效项：
```javascript
gulp 要么 gulp build
gulp serve
gulp serve:dist
gulp test
gulp test:auto
```




