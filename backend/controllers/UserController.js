import User from "../models/UserModel.js";
import argon2, { hash } from "argon2";

export const getUsers = async(req, res)=>{
    try {
        const response = await User.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}
export const getUserById = async(req, res)=>{
    try {
        const response = await User.findOne({
            where: {
                uuid : req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message})
    }
}
export const createUser = async(req, res)=>{
    const {name,email,password,confirmPassword,role} = req.body;
    if(password !== confirmPassword)return res.status(400).json({msg: "confrim password tidak sama"})
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            name:name,
            email:email,
            password: hashPassword,
            role:role
        });
        res.status(201).json({msg: "Register Berhasil"});
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}

export const register = async(req, res)=>{
    const {name,email,password,confirmPassword} = req.body;
    if(password !== confirmPassword)return res.status(400).json({msg: "konfirmasi password tidak sama"})
    const hashPassword = await argon2.hash(password);
    try {
        await User.create({
            name:name,
            email:email,
            password: hashPassword,
            role: req.params.role
        });
        res.status(201).json({msg: "Register Berhasil"});
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}
export const updateUser = async(req, res)=>{
    const user = await User.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak ditemukan"});
    const {name,email,password,confirmPassword,role} = req.body;
    let hashPassword;
    if (password === "" || password ===null){
        hashPassword = user.password
    }else{
        hashPassword = await argon2.hash(password);
    }
    if (password !== confirmPassword) return res.status(400).json({msg:"konfirmasi password tidak sama"});
    try {
        await User.update({
            name:name,
            email:email,
            password: hashPassword,
            role: role
        },
        {
            where:{
                id:user.id
            }
        }
        );
        res.status(200).json({msg: "Data Berhasil Di Update"});
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}
export const deleteUser = async(req, res)=>{
    const user = await User.findOne({
        where:{
            uuid: req.params.id
        }
    });
    if(!user) return res.status(404).json({msg: "User Tidak ditemukan"});
    try {
        await User.destroy(
        {
            where:{
                id:user.id
            }
        }
        );
        res.status(200).json({msg: "User Berhasil Dihapus"});
    } catch (error) {
        res.status(400).json({msg:error.message})
    }
}
