
var api =require("../../utils/util.js");

var app = getApp();
Page({
  data:{
    avatar_url: "",
    loginname: "",
    content: null,
    replies: null,
    reply_count: 0,
    tab: "",
    title: ""
  },
  onReady:function(){
    var that = this;
    var id = app.storeData.itemId;
    wx.request({
        url: api.getId(id),
        data: Object,
        success: function (res) {
          that.eachTime(res.data.data.replies);
          that.setData({avatar_url: res.data.data.author.avatar_url, 
            loginname: res.data.data.author.loginname, 
            content: res.data.data.content,
            replies: res.data.data.replies,
            reply_count: res.data.data.reply_count,
            tab: res.data.data.tab,
            title: res.data.data.title
          })
        }
      })
  },
  eachTime: function (arr) {
    for(var i = 0; i < arr.length; i++){
      arr[i].create_at = arr[i].create_at.slice(0,10);
    }
    return arr;
  },
  userInto: function(event) {
    app.storeData.userName = event.currentTarget.dataset.user;
    wx.navigateTo({
      url: "../user/user"
    })
  }
})