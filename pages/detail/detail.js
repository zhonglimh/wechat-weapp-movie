Page({
  data: {
    movieDetail: [],
    movieComment:[],
    movieThumbs:[],
    movieDesc:'',
    loading: false,
    desc: false
  },
  // 页面初始化
  onLoad: function (options) {
    // options为页面跳转所带来的参数
    var that = this
    wx.request({
      url: 'http://m.maoyan.com/movie/' + options.id + '.json',
      success: function(res) {
        that.setData({
          movieDetail: res.data.data.MovieDetailModel,
          movieComment:res.data.data.CommentResponseModel,
          loading: true
        })
        var photos = that.data.movieDetail.photos;
        for(var i=0; i<that.data.movieDetail.photos.length; i++){
          photos[i] = photos[i].replace('/w.h/movie/','/movie/').replace('/w.h/mmdb/','/mmdb/').replace(/.jpg(.*)/,'.jpg@1sc%7C180w_140h_1e_1c.webp')
        }
        that.setData({
          movieDesc: that.data.movieDetail.dra.replace(/<[^>]+>/g,''),
          movieThumbs: photos
        })
      }
    })
  },
  // 页面初次渲染完成（每次打开页面都会调用一次）
  onReady: function(){
    wx.setNavigationBarTitle({
      title: this.data.movieDetail.nm
    })
  },
  // 展开介绍
  showDesc: function() {
    this.setData({
      desc: true
    })
  },
  // 关闭介绍
  hideDesc: function() {
    this.setData({
      desc: false
    })
  },
  // 打开相册
  showAlbum(e){
    wx.navigateTo({
      url: '../album/album?title=navigate&id='+this.data.movieDetail.id+'&pid='+e.target.dataset.index+''
    })
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