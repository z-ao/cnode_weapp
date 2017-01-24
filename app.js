//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据

  },
  storeData: {
    userName: "",
    itemId: ""
  },
  detail: function(event){
    var type = event.target.dataset.item;
    if(type === "share"){
      wx.switchTab({
        url: '../share/share'
      })
    } else if(type === "job"){
      wx.switchTab({
        url: '../offer/offer'
      })
    } else if(type === "ask"){
      wx.switchTab({
        url: '../answer/answer'
      })
    } else if(type === "share"){
      wx.switchTab({
        url: '../share/share'
      })
    } else {
      return false;
    }
  }
})