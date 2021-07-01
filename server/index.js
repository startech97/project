const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const { v4: uuid } = require('uuid');

app.use(express.urlencoded({extended: true}))

app.use(cors())

app.get('/api/token', (req,res) => {
    try{
        const payload = {
            username: uuid(),
            id: uuid(),
            subject: 'text'
        }
        const token = jwt.sign(payload, 'secret')
        res.json({token})
    }catch(e) {
        console.log(e)
        res.json({"message": "jwt generate error"})
    }
    
})
app.listen(3000, () => {
    console.log('server is running')
})