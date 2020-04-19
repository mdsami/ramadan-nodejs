module.exports = function(app,db){

    app.post('/adddate',(req,res)=>{

       console.log(req.ifter);
       
        res.send('Date Added')
    })

}