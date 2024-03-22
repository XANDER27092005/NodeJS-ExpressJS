const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Welcome to the home page')
    }else if(req.url === '/about'){
    res.write('Here is out short history')
   }else{
    res.write( `
    <h1>Oops!</h1>
    <p>Page cannot be found</p>
    <a href="/">back home</a>
    `)
   }
   

    res.end();
})

server.listen(5000)