const fb = require('fb-video-downloader');

const https = require('https');
const fs = require('fs');
const path = require("path");





const getVideoUrl = async (url) => {

  
    data = await fb.getInfo(url)

            .then( function (data) {
                console.log(data);

                return data;
               
            } )
            
            .catch(error => {
               
                throw new Error(`Erreur : ${error}`);

            });

    return  {
        "title":data.title,
        "url": data.download.hd,
    }

}


const getVideoByUrl = async (url, title, res) => {

  
    // Création du fichier vidéo
    // Création de nom unique pour le fichier
    const filename = "Facebook_"+(Math.random() +1 ).toString(36).substring(2)+".mp4";
    const file = await fs.createWriteStream("../video-donwload/storage/facebook/"+filename);

    // Réccupération de la vidéo via son url
    https.get(url, function(response) {
                response.pipe(file)
                .on('finish', () => {

                    return res.send({
                        "url":url,
                        "title": title,
                        "video_name":filename,
                    });
                 });
    });

}


const donwloadVideo = async (req, res) => {
    url = req.query.url;
    

    const result = await getVideoUrl(url);
    getVideoByUrl(result.url,result.title, res);

    // res.json(test);
}




// Export des fonctions

module.exports = {
    donwloadVideo,
}



 