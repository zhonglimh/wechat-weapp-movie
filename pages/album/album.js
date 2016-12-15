Page({
  data: {
    moviePhotos: [],
    loading: false,
    photoIndex: 0
  },
  // 页面初始化
  onLoad: function (options) {
    // options为页面跳转所带来的参数
    var that = this
    wx.request({
      url: 'http://m.maoyan.com/movie/' + options.id + '.json',
      success: function(res) {
        that.setData({
          movies: res.data.data,
          photoIndex: options.pid,
          loading: true
        })
        var photos = that.data.movies.MovieDetailModel.photos;
        for(var i=0; i<that.data.movies.MovieDetailModel.photos.length; i++){
          photos[i] = photos[i].replace('/w.h/movie/','/movie/').replace('/w.h/mmdb/','/mmdb/').replace(/.jpg(.*)/,'.jpg')
        }
        that.setData({
          moviePhotos: photos
        })
      }
    })
  }
})