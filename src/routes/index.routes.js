const express = require("express")
const { pool } = require("../db")
const router = express.Router()

router.get("/ping",async (req,res)=>{
    const [result] = await pool.query("Select 'pong' as result")
    res.json(result[0])
})

module.exports = router