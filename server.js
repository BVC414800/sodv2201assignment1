
/*
    SODV 2201 Web Programming Term Project
      BVC Schedule Planner App with React JS and Node JS
      This program is designed and coded by SODV 2201 Section 1 Group 3.
      Design and coding by :  Candace Arriola and Paul Kho
      Instructor           :   Tigis Beshe
      Due                  :    December 15 2022  
*/

const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors');


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.listen(port, () => console.log(`Listening on http://localhost:${port}`));
app.set('query parser', 'simple')

//get api
app.get('/', (req,res)=>{
    res.send({express:"Your server is connected to your react app"})
})

app.get('/users', (req,res)=>{
    res.send({express:"Users detail data will be displayed here"})
})

// Show posting from frontend to console 
app.post('/post_login', (request, response) => {
   
    let { logIn }= request.body;
    console.log(logIn);
});

app.get("/aboutUs", (req,res)=> {
    res.send("This is an example of messages being sent from the server" +
    " to the client. We are SODV 2201 Section 1 Group 3. We are designing"
    + " and programming an app. It is designed to help BVC students to organize"
    + " their time. We will need both client and server port active for " 
    + " messages to transfer from server to client and display on screen."
       
    );
})

