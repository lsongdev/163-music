## 163-music

> Netease Music SDK in Node.js


 [![163-music](https://img.shields.io/npm/v/163-music.svg)](https://npmjs.org/163-music) 
 [![Build Status](https://travis-ci.org/song940/163-music.svg?branch=master)](https://travis-ci.org/song940/163-music)

### Installation

```bash
$ npm install 163-music
```

### Example


```javascript
const NeteaseMusic = require('163-music');

const nm = new NeteaseMusic({
    cookie: '__Your_Cookies__'
})

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
```


### Contributing
- Fork this Repo first
- Clone your Repo
- Install dependencies by `$ npm install`
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Publish your local branch, Open a pull request
- Enjoy hacking <3

### MIT

This work is licensed under the [MIT license](./LICENSE).

---