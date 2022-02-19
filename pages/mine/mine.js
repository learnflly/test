const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  showok:function() {  
    wx.showModal({
      content: '是否确定退出？',
      confirmColor: '#FF5959',
      success: function(res) {
        if(res.confirm) {
          wx.showToast({  
            title: '已退出',  
            icon: 'success',  
            duration: 2000,
            mask:true
        })  
          console.log('用户点击了确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
} ,
  handleShowModal() {
    wx.showModal({
      title: '社区规范', //提示的标题
      content: 'SHU树洞成立运营团队，承担树洞管理具体职责，依据本规范对树洞进行管理。本社区面向用户为与上海大学相关的个人，例如学生、校友等。本社区适用法律为中华人民共和国大陆地区的现行法律法规。',
      showCancel:false,
      confirmText:"我知道了",
      confirmColor: '#3FA796',
      success: function(res) {
        if(res.confirm) {
          console.log('用户点击了确定')
        } 
      }
    })
  },
  //跳转到我的树洞页面
  discussbutton:function(){
    wx.navigateTo({
      url: '../mine_myhole/mine_myhole',
    })
  },
  //跳转到我的关注页面
  upbutton:function(){
    wx.navigateTo({
      url: '../mine_like/mine_like',
    })
  },
  //跳转到我的屏蔽设置
  toMinemypost:function(){
    wx.navigateTo({
      url: '../pingbi/pingbi',
    })
  },
  //跳转到我的反馈
  fan:function(){
    wx.navigateTo({
      url: '../fankui/fankui',
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