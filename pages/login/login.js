// pages/login/login.js
var CODE = ''
const APP_ID = 'xxxxxxxxxxxxx';//输入小程序appid  
const APP_SECRET = 'xxxxxxxxxxxxx';//输入小程序app_secret  
var OPEN_ID = ''//储存获取到openid  
var SESSION_KEY = ''//储存获取到session_key

//code即为微信号
Page({
  data: {
    userName: '',
    password: ''
  },
  getCodeTap:function(){
    var that = this;
    wx.login({
      success: function (res) {
        CODE = res.code;//code  
        console.log(CODE)
        that.setData({
          code: CODE
        })
        wx.reLaunch({
          url: '../index/index',
        })
      }
    })
  },

  // 获取输入账号 
  userNameInput: function (e) {
    this.setData({
      userName: e.detail.value
    })
  },

  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },

  // 登录 
  login: function () {
    if (this.data.userName.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '信息不能为空',
        icon: 'loading',
        duration: 2000
      })
    } else {
      wx.login({
        success: function (res) {
          CODE = res.code;//code  
          console.log(CODE)
        }
      })
      wx.request({
        url: 'https://api.zc.com/wechat/bindUser',
        data: {
          code:CODE,
          userName: this.data.userName,
          password: this.data.password
        },
        success: function (res) {
          if (res.data.status == 1) {
            wx.showToast({
              title: '登录成功',
              icon: 'success',
              duration: 2000
            })
          } else {
            wx.showModal({
              title: '错误',
              content: ''
            })
          }
        }
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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