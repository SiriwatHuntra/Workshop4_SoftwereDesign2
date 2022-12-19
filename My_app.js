const express = require('express')
const app = express()
const worker = require('./worker')

//app.get = page browser
app.get('/', (req, res) => {
    res.send('Hell world by express frame work , silly programing')

}
) 

app.get('/about', (req, res) => {
    res.send('silly programing')
}
) 

app.get('/a', (req, res) => {
    res.send(worker.Hello())
    
})

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/404.html')
})




//port check
app.listen(3000, () => {
    console.log('start at port [3000]')
}
)

//static file , keep in public fold, html css icon ect
