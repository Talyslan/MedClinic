// require('dotenv-safe').config();
import jwt from 'jsonwebtoken'
export const SECRET = 'teste';  // Usando a variável de ambiente

export class JsonWebTokenFunc {

    createJWT(PessoaID, res) {  // Passando res como parâmetro
            const token = jwt.sign({ PessoaID }, SECRET, {
                expiresIn: 300  // 5 min
            });
            res.json({ auth: true, token: token });
            return token;
    }

    verifyJWT = (req, res, next) => {
        const token = req.headers['authorization'];
        
        if (!token) {
            return res.status(401).json({ auth: false, message: 'No token provided.' });
        }
    
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).json({ auth: false, message: 'Failed to authenticate token.' });
            }
    
            req.userId = decoded.id; // Optionally, you can pass decoded information to the next middleware
            next();
        });
    };

    logoutJWT(req, res) {
        return res.json({ auth: false, token: null });
    }
}