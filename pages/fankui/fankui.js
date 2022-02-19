// pages/fankui/fankui.js
//const url = require('../../utils/requireurl.js').url;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: false,
    contant: ''
  },
  formSubmit: function (e) {
    let _that = this;
    let content = e.detail.value.opinion;
    let regPhone = /^1[3578]\d{9}$/;
    let regEmail = /^[a-z\d_\-\.]+@[a-z\d_\-]+\.[a-z\d_\-]+$/i;
    if (content == "") {
      wx.showModal({
        title: '提示',
        content: '反馈内容不能为空!',
      })
      return false
    }
      this.setData({
        loading: true
      })
      let model, system, platform;
      wx.getSystemInfo({
        success: function (res) {
          model = res.model;
          system = res.system;
          platform = res.platform;
        }
      })
      wx.request({
        url: url + '/util/feedback',
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        data: {
          'content': content,
          'device_model': model, //手机型号
          'device_system ': system, //操作系统版本
          'app_version': platform  //客户端平台
        },
        method: 'POST',
        success: function (res) {
          let status = res.data.status;
          if (status == 1) {
            _that.setData({
              loading: false,
              contant: ''
            })
            wx.showToast({
              title: '成功',
              icon: 'success',
              duration: 1500
            })
          }
        },
        fail: function () {
          console.log("意见反馈接口调用失败")
        }
      })
      wx.showToast({  
        title: '已提交',  
        icon: 'success',  
        duration: 2000,
        mask:true
    })  
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