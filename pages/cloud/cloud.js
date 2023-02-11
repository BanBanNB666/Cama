wx.cloud.init()
const db = wx.cloud.database()
const _ = db.command
const usersCollection = db.collection('User')

Page({

  /**
   * 页面的初始数据
   * 函数：数据库增加：js：15-27
   * 函数：数据集库数据修改： js：39-46，要在编译器的启动项修改
   * 函数：数据库批量定向更新：js：40-47，云函数piLiang
   */
  data: {

  },

  add:function(event){

    usersCollection.add({
      data:{
        class:"20201305",
        image:"https://image.baidu.com/search/detail?ct=503316480&z=undefined&tn=baiduimagedetail&ipn=d&word=saber&step_word=&ie=utf-8&in=&cl=2&lm=-1&st=undefined&hd=undefined&latest=undefined&copyright=undefined&cs=2423685710,2607473573&os=882548704,1118805426&simid=4257439838,760742043&pn=3&rn=1&di=7042744173476184065&ln=1789&fr=&fmq=1646296075980_R&fm=&ic=undefined&s=undefined&se=&sme=&tab=0&width=undefined&height=undefined&face=undefined&is=0,0&istype=0&ist=&jit=&bdtype=0&spn=0&pi=0&gsm=0&objurl=https%3A%2F%2Fgimg2.baidu.com%2Fimage_search%2Fsrc%3Dhttp%253A%252F%252Fi0.hdslb.com%252Fbfs%252Farticle%252F1225d583c20f23fb2ef37e1814709eedaed79201.jpg%26refer%3Dhttp%253A%252F%252Fi0.hdslb.com%26app%3D2002%26size%3Df9999%2C10000%26q%3Da80%26n%3D0%26g%3D0n%26fmt%3Djpeg%3Fsec%3D1648888075%26t%3D0fc2544ae7b0f00218ffcc54d45ba565&rpstart=0&rpnum=0&adpicid=0&nojc=undefined&dyTabStr=MCwzLDYsMSw0LDUsOCw3LDIsOQ%3D%3D",
        class:[1,2,3,4,6]
      },
      success:res => {
        console.log(res)
      }
      
    })




    wx.navigateTo({
      url: '../cloudshow/cloudshow',
    })
  },

  piLiangchange:function(event){
    wx.cloud.callFunction({
      name:'piLiang',
      success: res => {
        console.log(res)
      }
    })
  },

  change:function(event){
    console.log(this.options)
    usersCollection.doc(this.options.id).update({
      data:{
        iid:100
      }
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

// const db = wx.cloud.database()
// const infoCollection = db.collection('Info')



// // pages/getInfo/getInfo.js
// Page({

//   data: {

//   },
//   onLoad: function(options){
//     infoCollection.where({
//       endDate:_.gte("2")
//     }).get().then(res => {
//       this.setData({ 
//         Info:res.data
//       })
//     })
//   },



//   // 获取info的通知信息
//   // onLoad: function(options){
//   //   // var time= require("../../utils/util.js");
//   //   // var timestamp = Date.parse(new Date());  
//   //   // timestamp = timestamp / 1000; 
//   //   // infoCollection.where({
//   //   //   endDate: _.lt(2)
//   //   // }).remove({
      
//   //   // })

//   //   //删除数据库中过期信息
//   //   //获取当前时间戳
//   //   //草泥马where为什么会有问题，我真不理解






//   //   infoCollection.where({
//   //     endDate:_.gt(10)
//   //   }).orderBy('endDate', 'asc').get().then(res => {

//   //     // console.log(res.data);
//   //     var time= require("../../utils/util.js");
//   //     res.data.forEach((value, index) => {
//   //       value.endDate = time.formatTimeTwo(value.endDate,'Y/M/D h:m:s');
//   //       console.log(value);
//   //     });
//   //     console.log(res.data);
//   //     this.setData({ 
//   //       Info:res.data,
        
//   //     })
//   // })



//   // },


// })