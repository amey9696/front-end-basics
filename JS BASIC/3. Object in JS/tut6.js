// Object Destructuring
const singer = {
    singerName: 'Arijit singh',
    songName: 'Dariya ji ji re ji',
    year: 2017,
    movie: 'mirzapur'
};

// const singerName = singer.singerName;
// const songName = singer.songName;
// console.log(singerName, songName);

//destructuring
const { singerName: val1, songName, ...restValue } = singer; //singerName value now store in val1
console.log(val1, songName, restValue);