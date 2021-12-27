import "reflect-metadata";
import './database'
import { routers } from "./routers";
const express = require('express')


const app = express()
app.use(express.json())
app.use(routers)

app.listen(3333,()=>{
    console.log('server run')
})