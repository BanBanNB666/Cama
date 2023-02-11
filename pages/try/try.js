// pages/try/try.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },
  /*
  POST /API/jwc.asmx HTTP/1.1
Host: passport.nchu.edu.cn
Content-Type: application/soap+xml; charset=utf-8
Content-Length: length

<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <JWC_Grkb xmlns="Passport_API_JWC">
      <SiteID>string</SiteID>
      <TimeSpan>string</TimeSpan>
      <UID>string</UID>
      <xnxqID>string</xnxqID>
      <zc>string</zc>
      <SignText>string</SignText>
    </JWC_Grkb>
  </soap12:Body>
</soap12:Envelope>

HTTP/1.1 200 OK
Content-Type: application/soap+xml; charset=utf-8
Content-Length: length

<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">
  <soap12:Body>
    <JWC_GrkbResponse xmlns="Passport_API_JWC">
      <JWC_GrkbResult>string</JWC_GrkbResult>
    </JWC_GrkbResponse>
  </soap12:Body>
</soap12:Envelope>

  */
  getHttpdata: function () {
    var httpBody = '<?xml version="1.0" encoding="utf-8"?>';
    httpBody += '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope">';
    httpBody += '<soap12:Body>';
    httpBody += '<JWC_Grkb xmlns="Passport_API_JWC">';
    httpBody += '<SiteID>' + '123' + '<SiteID>';
    httpBody += '<TimeSpan>' + '123' + '<TimeSpan>';
    httpBody += '<UID>' + '' + '<UID>';
    httpBody += '<xnxqID>' + '2019-2020-2' + '<xnxqID>';
    httpBody += '<zc>' + '3' + '<zc>';
    httpBody += '<SignText>' + '123' + '<SignText>';
    httpBody += '</JWC_Grkb>';
    httpBody += ' </soap12:Body>';
    httpBody += '</soap12:Envelope>';
    console.log(123);
    wx.request({
        url: 'http://schemas.xmlsoap.org/wsdl/',
        data: httpBody,  //请求体
        method: 'POST',  //使用POST请求
        header: { // 设置请求的 header
            'content-type': ' application/soap+xml; charset=utf-8',
            'SOAPAction': 'Passport_API_JWC/JWC_Grkb',    //因为后台给的请求头上有该数据，所以也得加上
        },

        success: function (res) {   
            console.log(res);  //得到有规则的xml数据
        },
        fail: function () {
            // fail
        },
        complete: function () {
            // complete
        },
    })
  }
})
    

