import { User } from '../models/userModels.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


async function login(req, res) {
    try {
        const { email, password} = req.body;

        if(!(email && password)) {
            res.status(400).json('erreur 400 login')
        }

        const user = await User.findUserByEmail(email);
        if(!user) {
            res.status(400).json('erreur ');
        }
        const verifiedPass = await bcrypt.compare(password, user.password);

        if (user && verifiedPass) {
            const token = jwt.sign(
                {userId: user.user_id
                }, process.env.TOKEN_KEY, { expiresIn: "6h"}
            )
            return res.status(200).json({Message: 'successfully logged in ',token: token})
        } else {
            return res.status(401).json('erreur credentials')
        }
       

    } catch (err) {
        console.log(err);
        res.status(400).json('erreur login' + err.message);

    }
}

export { login };