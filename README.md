# wechat-weapp-movie
微信小程序：在线电影票网站（入门示例）
> 微信小程序，可以说是近半年来开发和运营者们讨论最多的话题之一。自己也尝试入坑玩了一把，感觉还挺有意思，非常适合生活服务和阅读类项目。

## 对于微信小程序的一些理解 ：

小程序正如其名，小/轻。

是一套独立封闭程序。和以往开的发有2个最大不同：无法使用DOM，不基于window、document。所以`<div>`等HTML标签，都需通过`<view>`、`<text>`等组件来实现，常用的`jQuery`、`Zepto`等JS框架也都无法使用。

好在小程序提供详细开发文档，理解起来并不费劲。并且借鉴了React、VUE的优秀设计，如果你对这他们有一定基础，接触起来会更显方便。

至于小程序和APP之间的好坏博弈，各有各的优缺点。可改编自当年HTML5和FLASH之间交战所讨论出的一句话：“用户才懒得管你什么小程序还是APP，用户关心的是应用、是体验、是便利。”

最后，因为基于微信生态系统，所以究竟走多远、多广，还得看“企鹅”在市场领域的掌控度和用户心理的走向。

## 项目功能
* 近期电影列表
* 底部加载更多
* 查看电影详情
* 查看电影剧照
* 组件的使用

## 项目截图
![](https://github.com/zhonglimh/wechat-weapp-movie/blob/master/screenshots/1.png)  
![](https://github.com/zhonglimh/wechat-weapp-movie/blob/master/screenshots/2.png)  
![](https://github.com/zhonglimh/wechat-weapp-movie/blob/master/screenshots/3.png)

## 扩展资料
* [官方文档](https://mp.weixin.qq.com/debug/wxadoc/dev/?t=1474644083132)
* [开发工具下载](https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html?t=1474644089359)

## 声明
数据来源：猫眼电影（表示感谢）