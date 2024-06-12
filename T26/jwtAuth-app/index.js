const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const PORT = 8000
const jwt = require('jsonwebtoken')

//List of users to simulate a DB
const usersList = [
    { username: 'Tam', password: 'userPassword', admin: false },
    { username: 'admin', password: 'adminPassword', admin: true }
]
// Allows us to parse the body of a request
app.use(bodyParser.json())
// User login
app.post('/login', (req, res) => {
    // Req.body is sent by the client
    const usr = req.body.username
    const pwd = req.body.password
    //Check if user exists in the usersList
    const userExist = usersList.find(u => u.username === usr && u.password === pwd)

    if (userExist) {
        payload = {
            'name': userExist.username,
            'admin': userExist.admin
        }
        const token = jwt.sign(JSON.stringify(payload), 'jwt-secret',
            { algorithm: 'HS256' })
        res.send({ 'token': token })

    } else {
        res.status(403).send({ 'err': 'Incorrect login!' })
    }

})

/**Checks the JWT and decodes if verified */
app.get('/resource', (req, res) => {
    const auth = req.headers['authorization']
    const token = auth.split(' ')[1]
    try {
        const decoded = jwt.verify(token, 'jwt-secret')
        res.send({
            'msg':
                `Hello, ${decoded.name}! Your JSON Web Token has been verified.`
        })
    } catch (err) {
        res.status(401).send({ 'err': 'Bad JWT!' })
    }
})


app.get('/admin_resource', (req, res) => {
    const token = req.headers['authorization'].split(' ')[1]
    try {
        const decoded = jwt.verify(token, 'jwt-secret')
        if (decoded.admin) {
            res.send({ 'msg': `Hello,${decoded.name}! Welcome to the admin resource page` })
        } else {
            res.status(403).send(
                { 'msg': 'Your JWT was verified, but you are not an admin.' })
        }
    } catch (e) {
        res.sendStatus(401)
    }
})

// Start the server
app.listen(PORT, () => console.log(
    `Now listening at http://localhost:${PORT}`))
