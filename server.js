//Install express server
const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const {
    Client
} = require('pg');


const client = new Client({
    connectionString: 'postgres://joptsaxdnvznmp:92c831658ed4954d1f057a4a8c9a9bd90e67455c3fb6cda64b19d49d27227502@ec2-174-129-214-42.compute-1.amazonaws.com:5432/d4otb92bh2n7hg',
    ssl: true
});

client.connect(()=> {
    console.log('Db connected');
});

// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-blog'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname,'/dist/angular-blog/index.html'));
});


// INSERT INTO articles (
//     title,
//     content,
//     excerpt,
//     date
// ) VALUES ('title2', 'title2', 'title2', '1999-01-09');

app.post('/api/test', function(req, res) {
    console.log('------', req.body);

    client.query(
        `SELECT * from articles`, (err,response) => {
            if (err) {
                console.log('err')
            } else {
                console.log('++++', response.rows)
            }
            res.send(JSON.stringify(response.rows));
        }
    );

    // res.send(JSON.stringify(
    //     [
    //         {
    //             userId: 1,
    //             id: 1,
    //             title: "sadfsdfsdf"
    //         },
    //         {
    //             userId: 1,
    //             id: 2,
    //             title: "s3343434adfsdfsdf"
    //         }
    //     ]
    // ))
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);