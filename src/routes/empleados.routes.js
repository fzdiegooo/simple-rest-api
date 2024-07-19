const express = require("express");
const { getEmpleados, postEmpleados, putEmpleados, deleteEmpleados, getEmpleado } = require("../controllers/empleados.controller");
const router = express.Router()

router.get("/empleados", getEmpleados)

router.get("/empleados/:id", getEmpleado)

router.post("/empleados",postEmpleados)

router.patch("/empleados/:id",putEmpleados)

router.delete("/empleados/:id",deleteEmpleados)

module.exports = router