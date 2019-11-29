const mongoose = require('mongoose');



var mongoDB ='mongodb+srv://admin:<admin>@cluster0-k3py1.mongodb.net/test?retryWrites=true&w=majoritymongodb://test:password1@ds337718.mlab.com:37718/mean';
mongoose.connect(mongoDB, {useNewUrlParser:true});

var Schema = mongoose.Schema;
var recipeSchema = new Schema({
title: String,
image: String,
ingredients: [],
steps: []
});

var recipeModel = mongoose.model('recipe', recipeSchema);

app.post('/api/recipes', (req, res) => {
    console.log(req.body)
    console.log(req.body.title);
    console.log(req.body.image);
    console.log(req.body.ingredients);
    console.log(req.body.steps);
    recipeModel.create({
    title: req.body.title,
    image: req.body.image,
    ingredients: req.body.ingredients,
    steps: req.body.steps
    });
    res.send('Recipe added');
});

app.get('/api/recipes', (req, res, next) => {
    recipeModel.find(function (err, data) {
    console.log(data);
    res.json(data);
    });
});

app.get('/api/recipes/:id', (req, res, next) => {
    console.log(req.params.id);
    recipeModel.findById(req.params.id,
    function (err, data) {
    res.json(data);
    });
});

app.delete('/api/recipoes/:id', function (req, res) {
    console.log(req.params.title);
    recipeModel.deleteOne({ title: req.params.id },
        function (err, data) {
        if (err)
        res.send(err);
        res.send(data);
        })
}); 
    
