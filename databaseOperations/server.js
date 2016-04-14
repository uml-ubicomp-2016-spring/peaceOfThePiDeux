var express = require('express'),
    soundLocations = require('./routes/soundLocations');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

/*
app.get('/soundLocation', function(req, res) {
    res.send([{Location:'1, 2', Amplitude: '5', Time: '10:12' }, {Location:'1, 2', Amplitude: '5', Time: '10:12'}]);
});
*/
app.get('/soundLocation', soundLocations.findAll);
app.get('/soundLocation/:id', soundLocations.findById);
app.post('/soundLocation', soundLocations.addSoundLocation);
//app.put('/soundLocation/:id', soundLocations.updateSoundLocation);
app.delete('/soundLocation/:id', soundLocations.deleteSoundLocation);
app.delete('/soundLocation', soundLocations.deleteAll);

/*
app.get('/soundLocation/:id', function(req, res) {
    res.send({id:req.params.id, name: "The Name", description: "description"});
});*/

app.listen(3000);
console.log('Listening on port 3000...');
