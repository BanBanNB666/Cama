wx.cloud.init()
const db = wx.cloud.database()
const infoCollection = db.collection('Info')





Page({
  //添加进数据库的信息，此处可以根据需要添加其他列
  data: {
    title:"",
    info:"",
    endDate:"",
    clas:"",
  },

  //绑定
  onChange(e) {
    this.setData({
      [e.currentTarget.dataset.value]: e.detail
    })
    var app = getApp();
    this.data.clas = app.clas;
  },


  sendInfo:function(event){


    infoCollection.add({
      data:{
        title:this.data.title,
        info:this.data.info,
        endDate:this.data.endDate,
        clas:this.data.clas,
      },
    }).then( res=>{
      console.log(res); 
    })
    //发送提示
    wx.showToast({
      title: '发送成功',
      icon: 'success',
      duration: 1000,//持续的时间
    })


  }
  
})