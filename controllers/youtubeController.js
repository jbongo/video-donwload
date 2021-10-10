const fs = require('fs');

const ytdl = require('ytdl-core');





  
  
const donwloadVideo = async (req, res) => {
  url = req.query.url;

 
    // Création du fichier vidéo
    // Création de nom unique pour le fichier
    const filename = "Youtube_"+(Math.random() +1 ).toString(36).substring(2)+".mp4";
    const file = await fs.createWriteStream("../video-donwload/public/storage/youtube/"+filename);

    // Réccupération de la vidéo via son url

    
    ytdl(url)
    .pipe(file)
    .on('finish', () => {

      return res.send({
          "url":url,
          "video_name":filename,
      });
    });

   

}


// Export des fonctions

module.exports = {
  donwloadVideo,
}
