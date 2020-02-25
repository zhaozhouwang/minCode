// pages/demo/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message: "helloWorld",
    flag: false,
    items: [{
        name: "Apple"
      },
      {
        name: "samsung"
      },
      {
        name: "Moto"
      },
      {
        name: "Sony"
      }
    ],
    condition: Math.floor(Math.random() * 3 + 1),
    userInfo: {
      name: "tom",
      age: "12",
      mobile: "13888888888"
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})