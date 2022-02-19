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
        "UserId":"10001",
        "PostId": "#12",
        "content": "文本",
        "thumb": "2",
        "tagName":"学习",
        "is_like": false,
        "discussShow": false,
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
            "PostId": "#122",
            "content": "文本文本文"
          }
        ]
      }, {
        "CreateTime": "2021年03月19日12:21:23",
        "CreateTime1": "10min前",
        "Lsh": "3",
        "PostId": "#11",
        "thumb": "3",
        "tagName":"",
        "content": "文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
        "is_like": false,
        "discussShow": false,
        "ping": [{
          "CreateTime": "2021年03月19日12:21:33",
          "CreateTime1": "2min前",
          "PostId": "#222",
          "content": "文本"
        }, ]
      }, {
        "CreateTime": "2021年03月19日12:21:23",
        "CreateTime1": "10min前",
        "Lsh": "3",
        "PostId": "#10",
        "thumb": "0",
        "tagName":"交友",
        "content": "文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
        "is_like": false,
        "discussShow": false,
        "ping": []
      },
      {
        "CreateTime": "2021年03月19日12:21:23",
        "CreateTime1": "10min前",
        "Lsh": "3",
        "PostId": "#10",
        "thumb": "0",
        "tagName":"",
        "content": "文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文本文",
        "is_like": false,
        "discussShow": false,
        "ping": [],
      }
    ],
  },

  // 发帖功能测试
  // 数据：内容，用户的id，帖子的id
  testPost:function(){
    var that = this;
    wx.request({
      url: 'http://localhost:8080/treeHollow/post',
      method:'POST',
      data:{
        content:"这是发帖测试内容",
        UserId:"10001",
        PostId:"111",
        tagName:"学习",
      },
      success(res){
        console.log(res.data)
        that.setData({
          [`array[0].content`]:res.data.success
        })
      }
    })
  },





  likeClick: function (e) {
    //获取点击的索引
    let index = e.currentTarget.dataset.index;
    // console.log(index);
    var that = this.data.array[index];
    // console.log(that);
    var isLike = that.is_like;
    // console.log(isLike)
  
    let itemId = that.thumb;
    //console.log(itemDetail)
    if (isLike) {
      // wx.showToast({
      //   title: "点赞取消",
      //   icon: 'success',
      //   duration: 1000
      // });
      itemId--;
      this.setData({
        [`array[${index}].thumb`]: itemId
      });
      this.setData({
        [`array[${index}].is_like`]: false,
      });
    } else {
      // wx.showToast({
      //   title: '点赞成功',
      //   icon: 'success',
      //   duration: 1000
      // });
      //console.log(index)
      this.setData({
        [`array[${index}].is_like`]: true,
      });
      //console.log(this.data.array[index].is_like)
      itemId++;
      this.setData({
        [`array[${index}].thumb`]: itemId
      });
      //console.log(this.data.array[index].thumb)
    }
  },

  discussAction: function (e) {
    let index = e.currentTarget.dataset.index;
    let that = this.data.array[index]
    let disscussLength = that.ping.length
    if(that.discussShow){
      wx.showToast({
        title: '取消评论',
        icon: 'success'
      })
      disscussLength--;
      this.setData({
        [`array[${index}].discussShow`]: false,
        // [`array[${index}].ping.length`]: disscussLength
      })
    }
    else if(!that.discussShow){
    wx.showToast({
      title: '评论成功',
      icon: 'success'
    })
    disscussLength++;
    this.setData({
      [`array[${index}].discussShow`]: true,
      // [`array[${index}].ping.length`]: disscussLength
    })
  }
  },


  onPullDownRefresh() {
    var self = this;
    // wx.showToast({
    //      icon:'loading'
    // });
    setTimeout(() => {
      // 模拟请求数据，并渲染
      var arr = self.data.array,
        max = Math.max(...arr);
      for (var i = max + 1; i <= max + 3; ++i) {
        arr.unshift(i);
      }
      self.setData({
        array: arr
      });
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
    }, 1000);
  },
  onReachBottom() {
    var arr = this.data.array,
      max = Math.max(...arr);
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