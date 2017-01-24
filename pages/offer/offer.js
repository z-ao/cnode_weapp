//logs.js
var api = require("../../utils/util.js");

//获取应用实例
var app = getApp();
Page({
  data:{
     list: null,
     page: "job"
  },
  onLoad:function(){
    this.fetchData();
    wx.showNavigationBarLoading();
  },
  onReady: function() {
    wx.hideNavigationBarLoading()
  },
  fetchData: function () {
    var that = this;
    var data = {tab :that.data.page};
    wx.request({
      url: api.getUrl(data),
      data: Object,
      success: function (res) {
        that.setData({list:res.data.data});
      }
    });
  },
  detail: function(event) {
    return app.detail(event);
  },
  userInto: function(event) {
    app.storeData.userName = event.currentTarget.dataset.user;
    wx.navigateTo({
      url: "../user/user"
    })
  },
  itemInfo: function(event) {
    app.storeData.itemId = event.currentTarget.dataset.info;
    wx.navigateTo({
      url: "../info/info"
    })
  }
})