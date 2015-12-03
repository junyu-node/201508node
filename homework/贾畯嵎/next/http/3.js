var http=require('http');
var url=require('url');
var querystring=require('querystring');
var formidable=require('formidable');
var users=[];
var fs=require('fs')


http.createServer(function(req,res){


    var urlObj=url.parse(req.url,true);
    var pathname=urlObj.pathname;
    console.log(pathname);

    if(pathname=='/'){
        console.log(11);
        fs.createReadStream('./h5.html').pipe(res);
    }else if(pathname=='/reg'){

        var form=new formidable.IncomingForm();
        form.parse(req,function(err,fields,files){
            res.setHeader('Content-Type','text/html;charset=utf-8');
            for(var name in files){
                fs.createReadStream(files[name].path).pipe(fs.createWriteStream('./upload'+files[name].name));
                res.end('./upload'+files[name].name);
            }
           // console.log(files)

        })

    }else  if(pathname=='/favicon.ico') {
        res.end();
        return false;
    }else{
        fs.createReadStream('.'+pathname).pipe(res);
    }
}).listen(8080);
