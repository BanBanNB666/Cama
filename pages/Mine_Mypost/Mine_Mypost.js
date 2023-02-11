wx.cloud.init()
const db = wx.cloud.database()
const stuCollection = db.collection('Stu')

var app = getApp()
var ID = app.studentID

Page({
  //添加进数据库的信息，此处可以根据需要添加其他列
  data: {
    id: '',
    password:"",
    class:"",
    info:"",
    name:"",
    pass:"",
    monitor:"",
  },

  //绑定
  onChange(e) {
    this.setData({
      [e.currentTarget.dataset.value]: e.detail
    })
  },


  tryRegister:function(event){
    //添加数据进数据库
    stuCollection.where({
      studentID:ID
    }).update({
      data:{
        studentID:this.data.id,
        password:this.data.password,
        class:this.data.class,
        info:this.data.info,  
        name:this.data.name,
        pass :true,
        monitor :this.data.monitor,

      },
    }).then( res=>{
      console.log(res); 
    })
    //注册成功提示
    wx.showToast({
      title: '注册成功',
      icon: 'success',
      duration: 1000//持续的时间
    })

  }
  
})