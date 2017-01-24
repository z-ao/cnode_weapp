
var api = require("../../utils/util.js");

//获取应用实例
var app = getApp();
Page({
  data:{
     avatar_url: "",
     create_at: "",
     loginname: ""
  },
  onReady: function(event) {
      var that = this;
      var userName = app.storeData.userName;
      wx.request({
        url: api.getUser(userName),
        data: Object,
        success: function (res) {
          that.setData({avatar_url: res.data.data.avatar_url, create_at: res.data.data.create_at.slice(0,10), loginname: res.data.data.loginname})
        }
      })
  }
})
