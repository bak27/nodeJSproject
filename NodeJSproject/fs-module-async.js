/* in this case unlike async in the fs-module 
we goon use a callback function
*/
const {readFile,writeFile}=require('fs');
readFile('./content/first.txt',(err,result)=>{
    if(err){
        console.log(err)
    }
    console.log(result)
})
