import User from '../models/UserModel.js';

export const verifyUser = async (req, res, next) => {
   if (!req.session.UserId) {
      return res.status(401).json({ msg: 'Mohon Login Ke Akun Anda' });
   }
   const user = await User.findOne({
      where: {
         uuid: req.session.UserId,
      },
   });
   if (!user) return res.status(404).json({ msg: 'User Tidak ditemukan' });
   req.UserId = user.id;
   req.role = user.role;
   next();
};

export const ownerKost = async (req, res, next) => {
   const user = await User.findOne({
      where: {
         uuid: req.session.UserId,
      },
   });
   if (!user) return res.status(404).json({ msg: 'User Tidak ditemukan' });
   if(user.role !== "ownerkost") return res.status(403).json({msg: "Anda Tidak Memiliki Hak Akses"});
   next();
};
