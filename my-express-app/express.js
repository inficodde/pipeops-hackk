const express = require('express');
const app = express();
const port = 4000;
const bodyParser = require('body-parser');
const { name } = require('ejs');
// const data = {
//     name: 'Alice',
//     age: 25,
//     address: {
//         street: '123 Main St',
//         city: 'Wonderland'
//     },
//     hobbies: ['reading', 'chess'],
//     circularRef: {}
// };
// data.circularRef.self = data; // Circular reference

// Middleware to serve static files
app.use(express.static(__dirname + "/public"));


// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse URL-encoded bodies (for form submissions)
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as the view engine
app.set('view engine', 'ejs');

// HTTP GET routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + "/public/contact.html");
});

app.get('/appointment', (req, res) => {
    res.sendFile(__dirname + "/public/appointment.html");
});

app.get('/admin', (req, res) => {
    res.sendFile(__dirname + "/public/login.html");
});

// HTTP POST route
app.post('/success', (req, res) => {
    // Logging the request body for debugging
    console.log(req.body);
    res.sendFile(__dirname + "/public/success.html");
});

// HTTP GET route to render EJS template with data
app.get('/data', (req, res) => {
    // Assuming data comes from query parameters for GET requests
    // const { name, email, mobile, date, time, problem } = req.query;
    // const requestData = { name, email, mobile, date, time, problem };
    const requestData={
        name:req.query.name,
        email:req.query.email,
        mobile:req.query.mobile,
        date:req.query.date,
        time:req.query.time,
        problem:req.query.problem
    }
    console.log(requestData);
    res.render('data', { requestData:{requestData} });
});

// Listener
app.listen(port, () => {
    console.log('Server is running on Port 4000');
});
