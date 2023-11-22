import Kost from "../models/kostModel.js";

export const getKost = async(req,res)=>{
    try {
        const response = await Kost.findAll();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({msg:error.message});
    }
}