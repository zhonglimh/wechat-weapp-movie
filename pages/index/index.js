Page({
  //数据源
  data: {
    movies: [],
    loading: false,
    limit: 6,
    windowHeight: 0,
    scrollTop: 100
  },
  requestData: function (a) {
    var that = this
    wx.request({
      url: 'http://m.maoyan.com/movie/list.json', //仅为示例，并非真实的接口地址
      data: {
        limit: that.data.limit
      },
      success: function(res) {
        // 数据从逻辑层发送到视图层，同时改变对应的 this.data 的值
        that.setData({
          movies: res.data.data.movies,
          loading: true
        })
      }
    })
   // 获取系统信息
    wx.getSystemInfo({
      success: (res) => {
        that.setData({
          windowHeight: res.windowHeight
        })
      }
    })
  },
  // 页面初始化
  onLoad: function () {
    this.requestData();
  },  
  // 页面显示（一个页面只会调用一次）
  onShow:function(){
    
  },
  // 页面初次渲染完成（每次打开页面都会调用一次）
  onReady:function(){
    
  },
  // 页面隐藏（当navigateTo或底部tab切换时调用）
  onHide:function(){
    
  },
  // 页面关闭（当redirectTo或navigateBack的时候调用）
  onUnload:function(){
    
  },
  // 下拉加载
  onPullDownRefresh: function(e) {
    var limit = this.data.limit + 6
    this.setData({
      limit: limit
    })
    this.requestData();
  },
  // 购票
  buyTickets: function() {
    wx.showModal({
      title: '购票提示：',
      content: '目前不支持购买',
      showCancel: false,
      confirmColor: '#ff4d64'
    })
  }
})