# Java项目

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

## 流程

### 代码上传

两种方法，推荐第一种

- 微信小程序自带git同步(直接搜索)
- git bash操作：

```
1.git init 创建
2.git remote set-url origin  https://令牌号@github.com//Tree-hollow-for-SHU/treehollow.git 远程连接
3.git push -u origin master 上传
```

令牌号申请方式见：[(32条消息) 【突发】解决remote: Support for password authentication was removed on August 13, 2021. Please use a perso_日积月累，天道酬勤-CSDN博客](https://blog.csdn.net/yjw123456/article/details/119696726)

### 页面
分为四个板块加上一个发帖功能

此外，登录页面缺少，后续完善

#### 首页

问题：刷新时搜索栏不固定在顶部

**缺少：**

- 点赞时，后台拉取前端的操作，将新的点赞个数累加到数据库中同步，评论同理
- 目前前端数据是自拟的，需要将数据库接入进去，显示数据库中的信息
- 搜索，通过贴号定位到具体帖子

#### 分类

空白

#### 发帖

新发帖信息同步到数据库中

#### 我的

空白

#### 消息

空白

