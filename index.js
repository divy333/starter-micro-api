var http = require('http');
var dt   = require('./DateModule.js');
var fs = require('fs');
var url = require('url');
const v8 = require('v8');
const qs = require('querystring');
//var data1;

http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    
    //res.write('Hi there, Yash!');
    //res.write("Date-Time is: " + dt.myDateTime());
    //res.writeHead(200, {'Content-Type': 'text/html'});
    if(req.url ==='/'){
        fs.readFile('./index.html','utf8',function(err,data){
            res.writeHead(200, {'Content-Type': 'text/html'});
            console.log("reading data");
        
            res.write(data);
        //data1 = data;
            //console.log(data);
            console.log(req);
            console.log("error: " + err);
            return res.end();
        });
    }
        if(req.url ==='/worker.js'){
        fs.readFile('./worker.js','utf8',function(err,data){
            //console.log("reading data");
        res.writeHead(200, {'Content-Type': 'text/js'});
            res.write(data);
        //data1 = data;
            //console.log(data);
            //console.log(req);
            console.log("error: " + err);
            return res.end();
        });
    }
            if(req.url ==='/style.css'){
        fs.readFile('./style.css','utf8',function(err,data){
            //console.log("reading data");
        res.writeHead(200, {'Content-Type': 'text/css'});
            res.write(data);
        //data1 = data;
            //console.log(data);
            //console.log(req);
            console.log("error: " + err);
            return res.end();
        });
    }
    else if (req.url === '/ask')
    {
        //Response.Write(test)
        console.log("Inside ask");
        //console.log(JSON.parse(req));
        console.log("ask part 2");
        //console.log(qs.parse(req));
        //res.write("Hello");
        //res.answer = 'Hello';
        //res.write
        var answer = $('#messageText').val;
        res.write(JSON.stringify(answer));
        return res.end();
    }
    else if (req.url === '/token')
    {
        console.log("Inside token");
        //res.write("Hello");
        //res.answer = 'Hello';
        //res.write
        //var answer = "Hello There!";
        var token = Math.floor(Math.random() *100)* Math.floor(Math.random() *100) *100000019;
        res.write(token.toString());
        return res.end();
    }
    //res.write("<html> <head>server Response</head><body><h1> This page was render direcly from the server <p>Hello there welcome to my website</p></h1></body></html>");
    //res.end();
}).listen(process.env.PORT || 3010);
