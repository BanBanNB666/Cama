wx.cloud.init()
const db = wx.cloud.database()
const stuCollection = db.collection('Stu');


var app = getApp()

Page({
  data:{
  },

  // 获取Stu的注册申请信息
  onLoad: function(options){
    stuCollection.where({
      pass: false
    })
    .get().then(res => {
      this.setData({ 
        Stu:res.data
      })
    })
  },

  //同意
  addNewStu:function(event){ 
    stuCollection.doc(event.currentTarget.id).update({
      data:{
        pass:true,
      }
    })
  },

  //拒绝
  refuseNewStu:function(event){
    var num = app.stuID
    console.log("--")
    console.log(num)
    stuCollection.doc(event.currentTarget.id).remove({
      
    })
  },


})