import { User } from '../models/userModels.js';
import bcrypt from 'bcrypt';


// 

async function createUser(req, res) {
    try {
        const emailIsUnique = await User.findUserByEmail(req.body.email);
        if(emailIsUnique) {
            return res.json('email alray in use');
        } 
        const saltRounds = 10;
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const { firstName, lastName, email } = req.body;

        await User.createUser(firstName, lastName, email, hashedPass);

        return res.status(200).json('your account has been successfully created')
           
        } catch (err){ 
            console.log(err);
            res.status(500).json('erreur 500 user controller' + err.message);
        }
}




export { createUser };