#!/usr/bin/env node

const NeteaseMusic = require('..');
const pkg = require('../package');

const nm = new NeteaseMusic();

const help = () => {
  console.log();
  console.log(` ${pkg.name}@${pkg.version}`);
  console.log();
  console.log(' - search');
  console.log(' - playlist');
  console.log(' - song');
  console.log(' - url');
  console.log(' - picture');
  console.log(' - lyric');
  console.log(' - album');
  console.log(' - artist');
  console.log(' - version');
  console.log(' - help');
};

function color(str, c){
  return "\x1b[" + c + "m" + str + "\x1b[0m";
};

const commands = {
  async search(keyword){
    const response = await nm.search(keyword);
    for(const song of response.result.songs){
      console.log(
        color(`#${song.id}\t`, 34), 
        color(song.name, 36), '\t', 
        song.ar.map(a => a.name).join('; ')
      );
    }
  },
  async song(...ids){
    const { songs } = await nm.song(ids);
    for(const song of songs){
      console.log(song.name);
    }
  },
  async url(...ids){
    const { data: songs } = await nm.url(ids);
    for(const song of songs){
      console.log(song.url);
    }
  }
};

const command = process.argv[2];
const parameters = process.argv.slice(3);
(commands[command] || help).apply(nm, parameters);
