const NeteaseMusic = require('..')

const nm = new NeteaseMusic()

nm.search('一人饮酒醉').then(data => {
  console.log('歌曲搜索', data)
})

nm.playlist('751387161').then(data => {
  console.log('歌单', data)
})

nm.picture('19124905253588326', 400).then(data => {
  console.log('图片地址', data)
})

nm.artist('4130').then(data => {
  console.log('艺术家', data)
})

nm.album('35327877').then(data => {
  console.log('歌单', data)
})

nm.lyric('479403027').then(data => {
  console.log('歌词', data)
})

nm.url('479403027').then(data => {
  console.log('歌曲地址', data)
})

nm.song('479403027').then(data => {
  console.log('歌曲详情', data)
})