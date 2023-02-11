const db = wx.cloud.database()
const stuCollection = db.collection('Stu')

//登录时用于储存学号
var app = getApp();
app.stuID = ''; 


// s2 = s1.substr(0,5)

//用于获取登录学号
// var app = getApp();
// var num = app.stuID;

var truePassword = "";

Page({
  //用于绑定输入框消息
  data: {
    id: '',
    password:"",
  },

  //绑定界面数据
  onChange(e) {
    this.setData({
      [e.currentTarget.dataset.value]: e.detail
    })
  },

  //跳转到注册界面
  navigateToRegister:function(event){
    wx.navigateTo({
      url: '../register/register',
    })
  },


  //尝试登录
  tryLogin:function(event){ 
    
    stuCollection.where({
      studentID: this.data.id
    })
    .get().then(res => {
      truePassword = res.data[0].password; //获取数据库种的账号对应的密码
      if(this.data.password == truePassword && this.data.password  != ""){
        app.stuID = this.data.id
        //跳转到界面栏
        wx.navigateTo({
          url: '../home/home',
        })
      }
      else{
        wx.showToast({
          title: '登录失败',
          icon: 'loading',
          duration: 1000//持续的时间
        })
      }
    })
  }
  
})