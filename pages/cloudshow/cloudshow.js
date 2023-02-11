wx.cloud.init()
const db = wx.cloud.database()
const _ = db.command
const usersCollection = db.collection('User')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:0
  },

  /**
   * 生命周期函数--监听页面加载
   * 1-3行不能少，且顺序不变
   * 函数：查的功能：js：19-25
   * 函数：下拉刷新：json配置，js：58-68
   * 函数：触底刷新+数据后接20条：json配置，js：73-88
   * 函数：条件查询：js:30-38
   *
   */
  onLoad: function (options) {
    usersCollection.get().then(res=>{
      this.setData({
        user: res.data
      })
    })
  },


  add:function(event){
    usersCollection.where({
      iid:_.lt(4)
    }).get().then(res=>{
      this.setData({
        user: res.data
      })
    })
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
    usersCollection.get().then(res=>{
      this.setData({
        user: res.data
      },res => {
        console.log("上拉更新完成")
        wx.stopPullDownRefresh()
      })
    })
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let page = this.data.page + 20;

    usersCollection.skip(page).get().then(res=>{
      let new_data = res.data
      let old_data = this.data.user
      
      this.setData({
        user: old_data.concat(new_data),
        page: page
      },res => {
        console.log("触底更新完成");
      })
    })

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})