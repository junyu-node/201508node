/**
 * 1.http 超文件传输协议
 * 2. 报文
 * 3. URL是通过统一资源标识 符来标识 的 url(location) uri(identify)
 * 4.http 请求-响应模型
 *
 * @type {exports|module.exports}
 */
var http = require('http');
var url = require('url');
var querystring = require('querystring');
var formidable = require('formidable');
var users = [];
var fs = require('fs');
//创建服务器
var server = http.createServer(function(req,res){
    //req.url;//获取请求的字符串
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname == '/favicon.ico'){
        return res.end('404');
    }
    if(pathname == '/'){
        fs.createReadStream('./h5.html').pipe(res);
    }else if(pathname == '/reg'){
        var form = new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            //console.log(fields)
            //console.log(files);
            res.setHeader('Content-Type','text/html;charset=utf-8');
            fs.createReadStream(files.avatar.path).pipe(fs.createWriteStream('./upload/'+files.avatar.name));
            //res.write(JSON.stringify(fields));
            //res.end('<img src="/upload/'+files.avatar.name+'">');
            res.end("/upload/"+files.avatar.name);
        });
    }else{
        fs.createReadStream('.'+pathname).pipe(res);
    }


});
server.listen(8080);
