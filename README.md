# Programer Chrome Tab

面向程序员的chrome tab页

[![GitHub issues](https://img.shields.io/github/issues/Houserqu/chrome-tab.svg)](https://github.com/Houserqu/chrome-tab/issues) [![GitHub stars](https://img.shields.io/github/stars/Houserqu/chrome-tab.svg)](https://github.com/Houserqu/chrome-tab/stargazers) [![GitHub license](https://img.shields.io/github/license/Houserqu/chrome-tab.svg)](https://github.com/Houserqu/chrome-tab) [![GitHub forks](https://img.shields.io/github/forks/Houserqu/chrome-tab.svg)](https://github.com/Houserqu/chrome-tab/network)

## 项目的诞生

在一次重装系统后，发现之前的用chrome收藏的网址都丢失了，重登谷歌账号依然没有找回来，于是想到自己能不能实现一个地址收藏的网站，类似于个人的网址导航，对于开发者来说，用到的网站的确非常多，也非常重要，于是想到在chrome tab打开这个页面，同时拓展更多面向程序员的功能，例如 加密、todo、github、天气等等，让每天都打交道的chrome更方便，让工具不再分散。

## 功能模块

### 地址收藏

- [x] 输入域名添加
- [ ] 当前浏览页面添加

### 天气

- [ ] 选择城市
- [x] 获取天气

### 壁纸

- [x] 显示壁纸
- [ ] 自定义壁纸
- [ ] 自动切换壁纸

## 技术栈

[react](https://github.com/facebook/react)
[mobx](https://github.com/mobxjs/mobx)
[antd](https://ant.design/)

### 开发说明

build文件夹包含 [create-react-app](https://github.com/facebook/create-react-app) 生成的 tab页 以及 [chrome配置](https://developer.chrome.com/apps/manifest)