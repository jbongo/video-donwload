const fbvid = require('./lib/fbvid.js');

const video = 'https://www.facebook.com/LyricsEngsongs/videos/321854395918041/';

fbvid.low(video).then(vid => {
  console.log(vid)
});

fbvid.high(video).then(vid => {
  console.log(vid);
});

fbvid.title(video).then(vid => {
    console.log(vid);
});

fbvid.slug(video).then(vid => {
    console.log(vid);
});