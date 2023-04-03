# 云言运动助手

VUE运动刷步助手WEB版，后端nodejs基于小米运动接口协议刷步，步数可秒同步至微信、支付宝等平台

## 更新说明

2023年3月28日—-新增伪造IP地址，防止频繁请求被拦截
2022年9月20日—-新增支持Zeep Life邮箱账号，优化代码判断逻辑

## 如何使用
1.克隆本项目到本地
```sh
git clone https://gitee.com/xunmeng233/yunyan-sports.git
```
2.进入项目目录安装依赖文件
```sh
npm install
```
3.本地运行
```sh
npm run dev
```
4.项目打包
```sh
npm run build
```

项目打包完毕步数到静态服务器即可（支持云服务器，虚拟主机）