const express = require("express");
const router = express.Router();  
const session = require('express-session');
const {v4:uuidv4} = require("uuid");


const crediantial = 
{
    email : "mishal@gmail.com",
    password : "112233"
}

router.use(session({
    secret: 'uuidv4()',
    resave: false,
    saveUninitialized: true
}));

//login user
router.post('/login',(req,res) =>
{
    if(req.body.email === crediantial.email && req.body.password === crediantial.password)
    {
        req.session.user = req.body.email;
        res.redirect('/route/dashboard');
    }
    else
    {
        if(req.body.email != crediantial.email)
        {
            res.render('base', { message: "Enter a valid email....." });
        }
        else if(req.body.password != crediantial.password)
        {
          res.render('base', { message: "Enter a valid password....." });  
        }
    }
});

// route for dashboard
router.get('/dashboard',(req,res) =>
{
    if(req.session.user)
    {

        let movies = 
        [
            {
                name:"The Marvels",
                description: "NOV 10 2023",
                src:"https://cdn.marvel.com/content/1x/themarvels_lob_crd_05.jpg"
            },
            {
                name:"Guardians of the Galaxy Vol.3",
                description:"2023",
                src:"https://cdn.marvel.com/content/1x/guardiansofthegalaxyvolume3_lob_crd_03.jpg"
            },
            {
                name:"Ant-man And The Wast Quantumania",
                description:"2023",
                src:"https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg"
            },
            {
                name:"Black Panter : Wakands Forever",
                description:"2022",
                src:"https://cdn.marvel.com/content/1x/blackpantherwakandaforever_lob_crd_06.jpg"
            },
            {
                name:"Thor : Love and Thunder",
                description:"2022",
                src:"https://cdn.marvel.com/content/1x/thorloveandthunder_lob_crd_04.jpg"
            },
            {
                name:"Doctor Strange in the Multiverse of Madness",
                description:"2022",
                src:"https://cdn.marvel.com/content/1x/doctorstrangeinthemultiverseofmadness_lob_crd_02_3.jpg"
            }
        ];

        res.render('dashboard', {user :req.session.user,movies});
    }
    else
    {
        res.render('base');
    }
});

//route for logout
router.get('/logout',(req,res) =>
{
    req.session.destroy(function(err)
    {
        if(err)
        {
            console.log(err);
            res.send("Error");
        }
        else
        {
            res.render('base',{title: "Express", logout:"logout Successfully....!"});
            
        }
    })
});

module.exports = router;