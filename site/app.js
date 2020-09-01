const express = require('express');
const app = express();
const productRoutes = require('./routes/product/product');
const mainRoutes = require('./routes/statics/main');
const usersRoutes = require('./routes/users/users');
const adminRoutes = require('./routes/admin/admin');
const methodOverride = require('method-override');
const session = require("express-session");
const bcrypt = require('bcryptjs');
const adminMiddleware = require('./middlewares/adminMiddleware');

app.set( 'view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({secret: "Clave Secreta"}));

app.use(express.static('public'));
app.use('/product', productRoutes);
app.use('/', mainRoutes);
app.use('/users', usersRoutes);
app.use('/admin', adminMiddleware , adminRoutes);

app.listen(3000, ()=>{
    console.log('Servidor escuchando en el puerto 3000');
})
