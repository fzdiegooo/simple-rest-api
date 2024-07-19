const { pool } = require("../db");

module.exports.getEmpleados = async (req, res) => {
  try {
    const consult = "select * from empleado";
    const [empleados] = await pool.query(consult);
    res.json(empleados);
  } catch (error) {
    return res.status(500).json({ message: "Parece que algo fallo" });
  }
};

module.exports.getEmpleado = async (req, res) => {
  try {
    const consult = "select * from empleado where id = ?";
    const [empleados] = await pool.query(consult, [req.params.id]);

    if (empleados.length <= 0) {
      res.status(404).json({
        message: "Empleado no encontrado",
      });
    }
    res.json(empleados[0]);
  } catch (error) {
    return res.status(500).json({ message: "Parece que algo fallo" });
  }
};

module.exports.postEmpleados = async (req, res) => {
  try {
    const { nombre, salario } = req.body;
    const consult = "insert into empleado (nombre, salario) values (?,?)";
    const [empleado] = await pool.query(consult, [nombre, salario]);
    res.send({
      id: empleado.insertId,
      nombre,
      salario,
    });
  } catch (error) {
    return res.status(500).json({ message: "Parece que algo fallo" });
  }
};

module.exports.deleteEmpleados = async (req, res) => {
  try {
    const consult = "delete from empleado where id = ?";
    const [result] = await pool.query(consult, [req.params.id]);
    if (result.affectedRows <= 0) {
      res.status(404).json({
        message: "Empleado no encontrado",
      });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    return res.status(500).json({ message: "Parece que algo fallo" });
  }
};

module.exports.putEmpleados = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, salario } = req.body;
    const consult =
      "update empleado set nombre = IFNULL(?,nombre), salario = IFNULL(?, salario) where id = ?";
    const [result] = await pool.query(consult, [nombre, salario, id]);
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Empleado no encontrado" });
    const [empleado] = await pool.query("select * from empleado where id = ?", [
      id,
    ]);
    res.send(empleado[0]);
  } catch (error) {
    return res.status(500).json({ message: "Parece que algo fallo" });
  }
};
