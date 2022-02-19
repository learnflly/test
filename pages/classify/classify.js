const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  // js
data: {
	listOne: [
      { id: 1, name: '学习', check:0},
      { id: 2, name: '交友', check:0},
      { id: 3, name: '分享', check:0}
    ],
  choose:true
},

// 点击方法
 bindClick:function(e) {
   let id = e.currentTarget.dataset.id
   let listOne = this.data.listOne.map(item => {
     if(item.id == id ){
       item.check = (item.check+1)%2
       // 选中以后需要执行的方法
     }
     return item
   }) 
   this.setData({listOne})
 },

 need:function(e){
  this.setData({choose:true})
 },

 unneed:function(e){
  this.setData({choose:false})
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