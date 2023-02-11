// pages/home/home.js
wx.cloud.init()
const db = wx.cloud.database()
const stuCollection = db.collection('Stu');


Page({

  data: {
    clas:""
  },

  onLoad: function(options){
    var app = getApp();
    app.clas = app.stuID.substr(0,5);
    console.log(getApp());
    console.log(app.clas);

    },
    
  //跳转申请注册列表的界面
  navigateToAdd:function(event){
    wx.navigateTo({
      url: '../apply/apply',
    })
  },

   //跳转发通知的界面
  navigateToInfo:function(event){
    wx.navigateTo({
      url: '../info/info',
    })
  },
  //跳转到收通知界面
  navigateToGetInfo:function(event){
    wx.navigateTo({
      url: '../getInfo/getInfo',
    })
  },
  //跳转到树洞
  navigateToShuDong:function(event){
    wx.switchTab({
      url: '../Main_page/Main_page',
    })

  },
    //跳转到收浏览同学信息
    navigateToBrowse:function(event){
      wx.navigateTo({
        url: '../browse/browse',
      })
    },
  //跳转到课表
  navigateToTimeTable:function(event){
    wx.navigateTo({
      url: '../class/class',
    })
  },
  //跳转到课表
  navigateToMine:function(event){
    wx.navigateTo({
      url: '../Mine_page/Mine_page',
    })
  },
})