const app = getApp()
//const db = wx.cloud.database({ env: 'textllinpro-5br77' })
//var util = require("../../utils/util.js")
//const _ = db.command
//const myOpenId = wx.getStorageSync("myOpenId")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    menuTagCurrent: '1',
    res:{},
    //discussList内部包括了：discussTimeDay评论时间  2021-12-14
    //postUserName：评论人姓名  洞主
    //postHeadUrl #43176
    //postContext  评论内容
    discussList://收到的评论信息
      [
   
      ]
  },

  discussMe: function () {
    var that = this
    this.setData({
      discussList: []
    })
    db.collection('My_ReplyData').where({ //别人评论我
      PostUserId: myOpenId
    }).get({
      success: res => {
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          let index = res.data.length - i - 1
          var postOpenid = 'discussList[' + index + '].discussUserId';
          var discussPostId = 'discussList[' + index + '].discussPostId';
          var discussTimeHour = 'discussList[' + index + '].discussTimeHour';
          var discussTimeDay = 'discussList[' + index + '].discussTimeDay';
          var time = util.formatTime(res.data[i].time)//格式化时间
          that.setData({
            [postOpenid]: res.data[index]._openid,
            [discussPostId]: res.data[index].PageId,
            [discussTimeHour]: time.substr(time.indexOf(" ") + 1, 5),
            [discussTimeDay]: time.substr(time.indexOf("-") + 1, 5),
          })
          console.log("-------", res.data[index]._openid)
          db.collection('Assistant_User').where({
            _openid: res.data[index]._openid
          }).get({
            success: res => {
              var postUserName = 'discussList[' + index + '].postUserName';
              var postHeadUrl = 'discussList[' + index + '].postHeadUrl';
              that.setData({
                [postUserName]: res.data[0].Username,
                [postHeadUrl]: res.data[0].User_head_url,
              })

            }
          })
          db.collection('Assistant_DataSheet').where({
            _id: res.data[index].PageId,
          }).get({
            success: res => {
              var postContext = 'discussList[' + index + '].postContext';
              that.setData({
                [postContext]: res.data[0].Context,
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    app.editTabbar();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})