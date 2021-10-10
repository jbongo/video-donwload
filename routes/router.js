const facebookController = require('../Controllers/facebookController');
const youtubeController = require('../Controllers/youtubeController');



const router = (app) => {

    // Page d'acceuil => page youtube
    app.get('/', function(req, res) {

        res.render('../views/index');
    });

    // Page de téléchargement facebook
    app.get('/facebook', function(req, res) {

        res.render('../views/facebook');
    });



    app.get('/download/facebook', facebookController.donwloadVideo);
    app.get('/download/youtube', youtubeController.donwloadVideo);

}

module.exports = router;