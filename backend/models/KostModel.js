import { Sequelize } from "sequelize";
import db from "../config/Database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;
const Kosts = db.define('kosts', {
    uuid : {
        type: DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    name : {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len:[3,100],
        }
    },
    price : {
        type: DataTypes.BIGINT,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    type_kost : {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    land_size : {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    address : {
        type: DataTypes.TEXT,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    facility : {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len:[3,100],
        }
    },
    nearest_place : {
        type: DataTypes.STRING,
        allowNull:false,
        validate:{
            notEmpty:true,
            len:[3,100],
        }
    },
    description : {
        type: DataTypes.TEXT,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    userId : {
        type: DataTypes.INTEGER,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    }
},
{
    freezeTableName:true
});

Users.hasMany(Kosts);
Kosts.belongsTo(Users,{foreignkey :'user_id'});
export default Kosts;