const assert = require('assert');
const NeteaseMusic = require('..');
const { describe, it } = require('./test');

const nm = new NeteaseMusic()

describe('测试网易云接口', () => {

  it('测试搜索接口', function () {
    return nm.search('一人饮酒独醉')
      .then(data => {
        assert.ok(data);
        assert.equal(data.result.songs[0].name, '一人饮酒醉');
      })
  })

  it('测试歌单', function() {
    return nm.playlist('751387161')
      .then(data => {
        assert.ok(data);
        assert.equal(data.playlist.trackIds.length, 22);
      });
  })

  it('测试获取图片', function() {
    return nm.picture('3388694837506899', 300)
      .then(data => {
        assert.ok(data);
        assert.equal(data.url.slice(11, data.url.length), 'music.126.net/br3IrdCvT7-GjCyUVNONiA==/3388694837506899.jpg?param=300y300');
      });
  })

  it('测试获取歌词', function() {
    return nm.lyric('418603133')
      .then(data => {
        assert.ok(data);
        assert.ok(data.lrc.lyric);
      });
  })

  it('测试歌曲详情', function() {
    return nm.song('418603133')
      .then(data => {
        assert.ok(data);
        assert.equal(data.songs[0].name, 'Hello (W&W & Kenneth G Bootleg)');
      });
  })

  it('测试获取唱片', function() {
    return nm.album('35327877')
      .then(data => {
        assert.ok(data);
        assert.equal(data.album.blurPicUrl.slice(10, data.album.blurPicUrl.length), `music.126.net/4mUKGD6wyIW0XpTWXiFcdQ==/19124905253588326.jpg`);
      });
  })

  it('测试获取播放地址', function() {
    return nm.url('33894312')
      .then(data => {
        assert.ok(data);
        assert.equal(data.data[0].id, 33894312);
      });
  })

  it('测试获取歌手信息', function() {
    return nm.artist('4130')
      .then(data => {
        assert.ok(data);
        assert.equal(data.code, 200);
        assert.equal(data.artist.name, '李玉刚');
      });
  })
})
