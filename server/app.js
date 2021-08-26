<<<<<<< HEAD
const express = require('express')
const path = require('path')
const app = express()
const routerLand = require('./router/land')
const routerLogout = require('./router/logout')
=======
const express = require('express');
const path = require('path');
const app = express();
const routerLand = require('./router/land');
const routerHome = require('./router/home')
>>>>>>> 28e3db60cfd68258d2436a3f5ff281dc172769b9
const routerRegister = require('./router/register/register')
const routerLogin = require('./router/login/login')
const routerAddVideo = require('./router/add-video')
const routerProfile = require('./router/profile')
const routerWatch = require('./router/watch/watch')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', 'public'), { maxAge: '30d' }));

app.use('/', routerLand)
app.use('/register', routerRegister)
app.use('/login', routerLogin)
app.use('/logout', routerLogout)
app.use('/profile', routerProfile)
app.use('/add-video', routerAddVideo)
app.use('/watch', routerWatch)

module.exports = app
