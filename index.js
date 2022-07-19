console.log('okk')

const express = require('express');
const app =express();

app.get('/a/:frnd1/:frnd2/:frnd3',(req,res)=>{
    console.log(req.params)
    res.json({
        "frnd1":req.params.frnd1,
        "frnd2":req.params.frnd2,
        "frnd3":req.params.frnd3
    })
})
app.listen(9000)