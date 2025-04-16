const express = require('express')
const app = express()
require('dotenv').config();

// const productRoutes = require("../ProductCrud/routes/productRoutes")
// const categoryRoutes = require('../ProductCrud/routes/categoryRoutes')
const productRoutes = require("../ProductCrud/routes/productRoutes")

const port = process.env.PORT

app.use(express.json());

app.use('/api/product',productRoutes)




app.listen(port,()=> console.log(`Example app listening on port ${port}!`))

// http://localhost:3000/api/products