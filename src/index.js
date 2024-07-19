const express = require("express")
const empleadosRouter = require("./routes/empleados.routes")
const indexRouter = require("./routes/index.routes")

const { PORT } = require("./config")

const app = express()

app.use(express.json())
app.use(indexRouter)
app.use("/api",empleadosRouter)

app.use((req,res,next)=>{
    res.status(404).json({
        message: "ruta no encontrada"
    })
})

app.listen(PORT,()=>console.log("Servidor funcionando en en el puerto", PORT))