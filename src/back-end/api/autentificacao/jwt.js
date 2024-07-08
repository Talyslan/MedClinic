// require('dotenv-safe').config();
import jwt from "jsonwebtoken";
export const SECRET = "teste"; // Usando a variável de ambiente

export class JsonWebTokenFunc {
  createJWT(PessoaID, res) {
    // Passando res como parâmetro
    const token = jwt.sign({ PessoaID }, SECRET, { expiresIn: 10 }); // 300s = 5 minutos

    // res.json({ auth: true, token: token });
    return token;
  }

  verifyJWT = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({ auth: false, message: "Acesso negado" });
    }

    try {
    //   jwt.verify(token, SECRET, (err, decoded) => {
    //     if (err) {
    //       return res.status(403).json({ auth: false, message: "Failed to authenticate token." });
    //     }

    //     req.userId = decoded.id; 
    //     next();
    //   });

    jwt.verify(token, SECRET);

    next()
    } 
    catch (err) {
      res.status(400).send({ msg: "Token inválido!" });
    }
  };

  logoutJWT(req, res) {
    return res.json({ auth: false, token: null });
  }
}
