const UsuariosGet = (req,res)=> {
    const {nombre = "",edad=0}=req.query;
    res.json({
        msg:`API-Get`,
        nombre,
        edad
    })
}
const UsuariosPost = (req,res)=> {
    res.json({
        msg:`API-Post`,
    })
}
const UsuariosPut = (req,res)=> {
    const {id}=res.params;
    res.json({
        msg:`API-Put`,
        id
})
}
const UsuariosDelete = (req,res)=> {
    res.json({
        msg:`API-Delete`,
       
})
}
const UsuariosPatch = (req,res)=> {
    res.json({
        msg:`API-Patch`,
       
})
}
module.exports = {UsuariosPut,UsuariosGet,UsuariosPost,UsuariosDelete,UsuariosPatch};
