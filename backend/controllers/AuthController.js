import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async(req,res)=>{
    const user = await User.findOne({
        where:{
            email: req.body.email,
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak ditemukan"});
    const match = await argon2.verify(user.password, req.body.password);
    if(!match) return res.status(400).json({msg:"Password salah"});
    req.session.UserId = user.uuid;
    const uuid = user.uuid;
    const name = user.name;
    const email = user.email;
    const role = user.role;
    res.status(200).json({uuid,email,name,role});
}
export const Me = async(req, res)=>{
    if(!req.session.UserId){
        return res.status(401).json({msg:"Mohon Login Ke Akun Anda"});
    }
    const user = await User.findOne({
        attributes: ['uuid', 'name', 'email', 'role'],
        where:{
            uuid:  req.session.UserId
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak ditemukan"});
    res.status(200).json(user);
}
export const logOut = (req,res) =>{
    req.session.destroy((err)=>{
        if(err) return res.status(400).json({msg:"Tidak Dapat Logout"});
        res.status(200).json({msg: "Anda telah Logout"})
    })
}