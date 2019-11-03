let express  =require('express');
let app = express();

app.get('/',(req,res)=>{
    return res.send('Hello word');
});

app.get('/bye', (req,res)=>{
    res.send('bye bye !')
})

app.listen(3000,()=>{
    console.log('serve is running in port 3000');
})