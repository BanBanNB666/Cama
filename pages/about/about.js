//index.js
//获取应用实例

Page({
  data: {
    header: {},
    verifycode: '',
    img: ''
  },

  onLoad: function() {
    var _this = this;
    var str = 'http://jxfw.gdut.edu.cn/yzm?d=' + new Date().getTime();
    wx.downloadFile({
      url: str,
      success: function(res) {
        console.log(res);
        _this.setData({
          header: {
            'cookie': res.header['Set-Cookie'],
            'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
          }
        });
        _this.setData({
          img: res.tempFilePath
        })
      }
    })
    
    /*错误
    wx.request({
      url: str,
      success:function(e){
        console.log(e.data)
        var str2 = e.header['Set-Cookie']+'';
        str2=str2.substring(0,str2.indexOf(';'));
        _this.setData({
          header: {
            'cookie': str2,
        'content-type':'application/x-www-form-urlencoded;charset=UTF-8'}
        })
        console.log(str2) 
      }
    });*/


  },
  bind: function(res) {
    console.log(this.data.header);
    console.log(res.detail.value.verifycode);
    var _this = this;
    wx.request({
      url: 'http://jxfw.gdut.edu.cn/new/login',
      data: {
        "account": "xxxxx",
        "pwd": "xxxxx",
        "verifycode": res.detail.value.verifycode
      },
      method: "post",
      header: this.data.header,
      success: function(e) {
        console.log(e)
        wx.request({
          url: 'http://jxfw.gdut.edu.cn/xsgrkbcx!getKbRq.action?xnxqdm=201802&zc=9',
          header: _this.data.header,
          success: function(e) {
            console.log(e)
          }
        })
      }
    })
  },
  bindd: function() {
    var _this = this;
    console.log(_this.data.header)
    wx.request({
      url: 'http://jxfw.gdut.edu.cn/xsgrkbcx!getKbRq.action?xnxqdm=201802&zc=9',
      header: _this.data.header,
      success: function(e) {
        console.log(e)
      }
    })
  }
})
