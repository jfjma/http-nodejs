import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";
import User from "../models/User";

export const verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["x-access-token"];

    //console.log(token);

    if (!token) return res.json({ message: "Sesión incorrecta (token)" });
    
    const decoded = jwt.verify(token, config.SECRET);
    req.userId = decoded.id;
    const user = await User.findById(req.userId, { password: 0 });
    if (!user) return res.json({ message: "Usuario no encontrado (token)" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Acceso no autorizado" })
  }
};

export const isProfesor = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i=0; i<roles.length; i++) {
        if(roles[i].name === "profesor" || roles[i].name === "admin"){
            next()
            return;
        }
    }
    return res.json({message: "Permisos insuficientes"})
};

export const isAdmin = async (req, res, next) => {
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})

    for (let i=0; i<roles.length; i++) {
        if(roles[i].name === "admin"){
            next()
            return;
        }
    }
    return res.json({message: "Permisos insuficientes"})
};