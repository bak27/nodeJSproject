const http= require('http');
const server=http.Server((req,res)=>{
 res.write('welcome to our page');
 res.end();

});
server.listen(5000)