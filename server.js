var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var article1={
    title:"article1 | sriram",
    heading:"article1",
    date:"sep 3 2017",
    content:` <p>
                    this is the article one .practice article for web development
                </p>
                <p>
                    yes!you can learn web development and programming very well!! be positive!!!
                </p>`
};
function createTemplate(data)
{   var title=data.title;
    var heading=data.heading;  
    var date=data.date;
    var content=data.content;
    var htmlTemplate=
        `<html>
        <head>
            <title>
                article1 | sriram
            </title>
             <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <link href="ui/style.css" rel="stylesheet"/>
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">home</a>
                </div>
                <hr/>
                <h3>
                   ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/article1', function (req, res) {
  res.send(createTemplate(article1));
});

app.get('/article2', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article2.html'));
});

app.get('/article3', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article3.html'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
