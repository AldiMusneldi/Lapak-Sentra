
async function me(req, res){
    return res.json({login : true,  message: "You Login", name: req.name})
}

module.exports = {
    me
}