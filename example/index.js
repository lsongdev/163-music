const NeteaseMusic = require('..')

const nm = new NeteaseMusic()

nm.search('Love Song').then(({ result }) => {
  const { songs } = result;
  songs.forEach(song => {
    console.log(`search(#${song.id}):`, song.name);
  });
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

nm.url('82360').then(({ data: resources }) => {
  resources.forEach(resource => {
    const { id, url } = resource;
    console.log(`song(#${id}):`, url);
  });
})

nm.song('479403027').then(data => {
  console.log('歌曲详情', data)
})