require('dotenv').config()
const
    express = require('express'),
    app = express(),
    pg = require('pg'),
    DATABASE = process.env.DATABASE_PUBLIC_URL,
    PORT = process.env.PORT || 3000,
    client = new pg.Client(DATABASE);

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(PORT , () => { console.log(`=> Started listening on Port: ${PORT}`)})


client.connect().then((req , res) => {
    console.log('=> Connected successfully to : xxxxxxxxxxxxxxxxxxxxxx'+ DATABASE.slice(-14,))
}).catch((err) => {
    console.log(err);
    console.log("FAILED to Connect to DATABASE :(")
});


// Home html file
app.get('/' , (req , res) => {
    res.sendFile(__dirname+'/front-end/index.html')
    console.log("=> Visited "+ req.path);
})


// Phones html file
app.get('/phones' , (req ,res ) => {
    res.sendFile(__dirname+'/front-end/phones.html');
    console.log("=> Entered "+ req.path);
})

// Laptops html file
app.get('/laptops' , (req , res) => {
    res.sendFile(__dirname+'/front-end/laptops.html')
    console.log('=> Entered '+ req.path);
})

// PC html file
app.get('/pc' , (req , res) => {
    res.sendFile(__dirname+'/front-end/pc.html')
    console.log("=> Entered "+req.path);
})


// PS html file
app.get('/ps' , (req , res) => {
    res.sendFile(__dirname+'/front-end/ps.html')
    console.log("=> Entered "+ req.path);
})

// Tablets html file
app.get('/tablets' , (req , res) => {
    res.sendFile(__dirname+'/front-end/tablets.html');
    console.log("=> Entered "+ req.path);
})

app.use(express.static(__dirname+'/front-end/'))
