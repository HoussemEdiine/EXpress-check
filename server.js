const express = require('express')
const mustache = require('mustache-express')
const app = express()
const Port = 5000 

let d = new Date
app.use((req,res ,next)=>{
 if(d.getDay()<=5 && d.getHours()>=9 && d.getHours()<=17){
     console.log('availble')
    next()
 }

 else
 {console.log('no service')
 }
})


app.set('views', `${__dirname}/views`);
app.set('view engine', mustache);
app.engine('mustache', mustache());
app.use(express.static('public'));

console.log(d.getDay())

app.get('/',(req,res)=>{
    res.render('home.mustache',{title : 'ms13' , h1 :'welcome to our online cosulting services ',contact:'contacts',service:'/services'})
})
app.get('/contacts',(req,res)=>{
    res.render('contact.mustache',{title:'contact',h1:'contact us on',lien:'/',service:'/services'})
})
app.get('/services', (req,res)=>{
    res.render('services.mustache',{title:'services',contact:'/contacts',home:'/'})
})

app.listen(Port ,()=>{
console.log(`server running on port ${Port}`)
})

