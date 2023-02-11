
const db = wx.cloud.database()
const stuCollection = db.collection('Stu')

const _ = db.command
// pages/getInfo/getInfo.js
Page({

  data: {
    clas:""
  },
  // 获取info的通知信息
  onLoad: function(options){
    var app = getApp();
    this.data.clas = app.clas;
  

    var time= require("../../utils/util.js");
    var timestamp = Date.parse(new Date());  
    timestamp = timestamp / 1000; 
    var timenow = time.formatTimeTwo(timestamp,'Y-M-D h:m:s');
    console.log(this.data.clas);
 
    



    stuCollection.where({
      class:this.data.clas
    }).get().then(res => {
      this.setData({ 
        Stu:res.data
      })
    })
  },


})