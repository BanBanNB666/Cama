// pages/enroll/enroll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    stunumber:'',
    xueyuan:'',
    classnumber:''

  },
//this.onload()是调用当前自定义的函数方式，调用api需要先var that = this
//然后调用api，this。data可以调用data数据

// this.setData({      这是页面内数据更新的方法
//   变量名:新的值
//   变量名:新的值
// })

//数据如何相互传参？一：页面跳转可以携带参数
//二：全局变量
//使用getApp().globalData().userInfo,前面就可以访问了，也是可以修改的

  usernameinput:function(e){
    this.data.username = e.detail.value
  },

  classnumberinput:function(e){
    this.data.classnumber = e.detail.value
  },

  stunumberinput:function(e){
    this.data.birthday = e.detail.value;
  },

  xueyuaninput:function(e){
    this.data.xueyuan = e.detail.value;
  },

  //点击“确定”进行跳转函数
  ok:function(e){
    console.log(this.data.xueyuan)
    wx.reLaunch({
      
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