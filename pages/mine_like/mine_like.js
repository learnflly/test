//index.js
//获取应用实例
const app = getApp()
Page({
  // number为单号
  data: {
    // 发帖对象信息
    array: [{
        "CreateTime": "2021年03月19日12:21:33",
        "CreateTime1": "2min前",
        "Lsh": "1",
        "number": "#12",
        "content": "文本",
        "thumb":"2",
        "tag":"学习",
        // 评论内容信息，是发帖信息的一个附属属性
        "ping": [{
            "CreateTime": "2021年03月19日12:21:33",
            "CreateTime1": "2min前",
            "number": "#111",
            "content": "文本"
          },
          {
            "CreateTime": "2021年03月19日12:21:33",
            "CreateTime1": "2min前",
            "Lsh": "3",
            "number": "#122",
            "content": "。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。"
          },
          {
            "CreateTime": "2021年03月19日12:21:33",
            "CreateTime1": "2min前",
            "Lsh": "3",
            "number": "#122",
            "content": "文本文本文"
          }
        ]
      }, {
        "CreateTime": "2021年03月19日12:21:23",
        "CreateTime1": "10min前",
        "Lsh": "3",
        "number": "#11",
        "thumb":"3",
        "tag":"",
        "content": "文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
        "ping": [{
          "CreateTime": "2021年03月19日12:21:33",
          "CreateTime1": "2min前",
          "number": "#222",
          "content": "文本"
        }, ]
      }, {
        "CreateTime": "2021年03月19日12:21:23",
        "CreateTime1": "10min前",
        "Lsh": "3",
        "number": "#10",
        "thumb":"0",
        "tag":"交友",
        "content": "文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
        "ping": []
      },
      {
        "CreateTime": "2021年03月19日12:21:23",
        "CreateTime1": "10min前",
        "Lsh": "3",
        "number": "#10",
        "thumb":"0",
        "tag":"",
        "content": "文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
        "ping": []
      }
    ],
  },
  onPullDownRefresh(){
    var self = this;
    // wx.showToast({
    //      icon:'loading'
    // });
    setTimeout(() => {
      // 模拟请求数据，并渲染
      var arr = self.data.array, max = Math.max(...arr);
      for (var i = max + 1; i <= max + 3; ++i) {
        arr.unshift(i);
      }
      self.setData({ array: arr });
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom(){
    var arr = this.data.array, max = Math.max(...arr);
    if (this.data.count < 3) {
      for (var i = max + 1; i <= max + 5; ++i) {
        arr.push(i);
      }
      this.setData({
        dataList: arr,
        count: ++this.data.count
      });
    } else {
      // wx.showToast({
      //   title: '没有更多帖子了',
      // })
    }
  },
  
  onLoad: function () {
    app.editTabbar();
  }
})