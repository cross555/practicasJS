const {Router} = require ("express");

const { UsuariosGet, UsuariosPut, UsuariosPost, UsuariosDelete, UsuariosPatch } = require("../controllers/controller.usuarios");


const router = Router();

router.get("/",UsuariosGet);
router.put("/:id",UsuariosPut);
router.post("/",UsuariosPost)
router.delete("/:id",UsuariosDelete);
router.patch("/",UsuariosPatch);
module.exports= router;