const express = require("express");
const router = express.Router();
const { check } = require("express-validator");
const tareaController = require("../controllers/tareaController");
const auth = require("../middlewares/auth");

// api/tareas
router.post(
  "/",
  auth,
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("proyectoId", "El id del proyecto es obligatorio").not().isEmpty(),
  ],
  tareaController.crearTarea
);

module.exports = router;
