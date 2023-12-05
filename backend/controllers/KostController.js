import { Op } from 'sequelize';
import Kost from '../models/kostModel.js';
import User from '../models/UserModel.js';

export const getKost = async (req, res) => {
   try {
      let response = await Kost.findAll();
      res.status(200).json(response);
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};
export const detailKost = async (req, res) => {
    try {
        const kost = await Kost.findOne({
            where: {
                uuid: req.params.id
            }
        });

        if(!kost) return res.status(404).json({msg : "Data Kost Tidak Ditemukan"});
       let response = await Kost.findOne({
          attributes:['name', 'price','type_kost', 'land_size', 'address', 'facility', 'nearest_place', 'description'],
          where: {
            uuid: req.params.id
         },
          include: [
             {
                model: User,
                attributes: ['name', 'email'],
             },
          ],
       });
       res.status(200).json(response);
    } catch (error) {
       res.status(500).json({ msg: error.message });
    }
 };
export const kostMe = async (req, res) => {
    try {
       let response = await Kost.findAll({
          attributes:['uuid','name', 'price'],
          where: {
            userId: req.UserId 
         },
          include: [
             {
                model: User,
                attributes: ['name', 'email'],
             },
          ],
       });
       res.status(200).json(response);
    } catch (error) {
       res.status(500).json({ msg: error.message });
    }
 };
export const kostById = async (req, res) => {
    try {
        const kost = await Kost.findOne({
            where: {
                uuid: req.params.id
            }
        });

        if(!kost) return res.status(404).json({msg : "Data Kost Tidak Ditemukan"});
       let response = await Kost.findOne({
          attributes:['name', 'price'],
          where: {
            [Op.and]: [{ id: kost.id }, { userId: req.UserId }]
         },
          include: [
             {
                model: User,
                attributes: ['name', 'email'],
             },
          ],
       });
       res.status(200).json(response);
    } catch (error) {
       res.status(500).json({ msg: error.message });
    }
 };
export const createKost = async (req, res) => {
   const { name, price, type_kost, land_size, address, facility, nearest_place, description } = req.body;
   try {
      await Kost.create({
         name: name,
         price: price,
         type_kost: type_kost,
         land_size: land_size,
         address: address,
         facility: facility,
         nearest_place: nearest_place,
         description: description,
         userId: req.UserId,
      });
      res.status(201).json({ msg: 'Kost Berhasil Dibuat' });
   } catch (error) {
      res.status(400).json({ msg: error.message });
   }
};
export const updateKost = async (req, res) => {
   try {
      const kost = await Kost.findOne({
         where: {
            uuid: req.params.id,
         },
      });
      if (!kost) return res.status(404).json({ msg: 'Kost Tidak Ditemukan' });
      const { name, price, type_kost, land_size, address, facility, nearest_place, description } = req.body;
      if (req.UserId !== kost.userId) return res.status(403).json({ msg: 'Anda Tidak Dapat mengedit bukan kost anda' });
        await Kost.update({
            name: name,
            price: price,
            type_kost: type_kost,
            land_size: land_size,
            address: address,
            facility: facility,
            nearest_place: nearest_place,
            description: description,
         },
         {
            where: {
               [Op.and]: [{ id: kost.id }, { userId: req.UserId }],
            },
        });
        res.status(200).json({ msg: "kost Berhasil Di ubah"});
   } catch (error) {
      res.status(500).json({ msg: error.message });
   }
};
export const deleteKost = async (req, res) => {
    try {
       const kost = await Kost.findOne({
          where: {
             uuid: req.params.id,
          },
       });
       if (!kost) return res.status(404).json({ msg: 'Kost Tidak Ditemukan' });
       if (req.UserId !== kost.userId) return res.status(403).json({ msg: 'Anda Tidak Dapat mengedit bukan kost anda' });
         await Kost.destroy(
          {
             where: {
                [Op.and]: [{ id: kost.id }, { userId: req.UserId }],
             },
         });
         res.status(200).json({ msg: "kost Berhasil Di Hapus"});
    } catch (error) {
       res.status(500).json({ msg: error.message });
    }
 };



