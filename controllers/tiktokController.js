// Import de puppeteer
const puppeteer = require("puppeteer");

const https = require('https');
const fs = require('fs');


const getVideoUrl = async (link) => {
  // 1 - Créer une instance de navigateur
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36');


  // 2 - Naviguer jusqu'à l'URL cible
  await page.goto("https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/381e9419cfaa4fab91675be5ee21c942/?a=1988&br=2488&bt=1244&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1631430110&ft=9wMeReqL4kag3&l=202109120101390101890731041C62A1E0&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=3&qs=0&rc=M251bG47ZThsNjMzODczNEApZzw4PGk2OjtkNzM3OjQ1Z2doNmRrcnI0cWFgLS1kMS1zczQuLmMwXjAuL2NgXjBgM186Yw%3D%3D&signature=45ff40b564888c0c80622eabcd38644f&tk=0&vl=&vr=")

  // page.waitFor('body');

  // 4 - Récupéreration de l'url..
  
  const url = await page.evaluate(() => {
    let video_url = document.querySelector("video")
    .getAttribute('src')
  
    return video_url;
  })

  // browser.close()
  return url
}


getVideoByUrl = async (url) => {

    // Création du fichier vidéo
    // Création de nom unique pour le fichier
    const file = fs.createWriteStream("../storage/tiktok/tiktok.mp4");

    const options = {
      
      headers: {
         'User-Agent':"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/68.0.3419.0 Safari/537.36",
         "Content-Disposition": "attachment",
      }
    }
  
    // Réccupération de la vidéo via son url
    const request = https.get(url, {options}, function(response) {
       return response.pipe(file);
    });
}





// Appel de la fonction getData() et affichage des données

getVideoUrl('https://www.tiktok.com/@anas_svet/video/6979223693352275201?is_copy_url=0&is_from_webapp=v1&sender_device=pc&sender_web_id=6912835933268166150').then(url => {
console.log(url);  
// getVideoByUrl(url);
})
getVideoByUrl("https://v16-web.tiktok.com/video/tos/alisg/tos-alisg-pve-0037c001/381e9419cfaa4fab91675be5ee21c942/?a=1988&br=2488&bt=1244&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&expire=1631425618&ft=9wMeReqL4kag3&l=20210911234647010190219078205EB277&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&policy=3&qs=0&rc=M251bG47ZThsNjMzODczNEApZzw4PGk2OjtkNzM3OjQ1Z2doNmRrcnI0cWFgLS1kMS1zczQuLmMwXjAuL2NgXjBgM186Yw%3D%3D&signature=31906dcc8dc572074f9d2d7bf9fed8ce&tk=0&vl=&vr=");