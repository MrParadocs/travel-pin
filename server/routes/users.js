import express from 'express'
import User from '../models/User.js'
import bcrypt from 'bcrypt'

const router = express.Router();

//register 
router.post("/reg", async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!(email && password && username)) {
            res.status(400).send("All input is required");
        }

        const foundUser = await User.findOne({username});

        if (foundUser) {
            res.status(409).json({ error: 'User already exist' })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        //create user
        const newUser = await User.create({
            username,
            email: email.toLowerCase(),
            password: hashedPassword,
        })

        res.status(200).json(newUser);
    } catch (err) {
        res.status(500).json(err);
    }
})
//login
router.post("/login", async (req, res) => {
    try {
        //find user
        const foundUser = await User.findOne({ username: req.body.username });
        //console.log({ foundUser })

        if (foundUser) {
            //if foundUser: compare entered password to stored/foundUser password.
            const validPassword = await bcrypt.compare(
                req.body.password,
                foundUser.password
            );

            if (validPassword) {
                //if both passwords match:
                res.status(200).json({ username: foundUser.username });
            } else {
                //if both passwords dont match:
                res.status(400).json({ error: "Incorrect username or password" });
            }
        } else {
            //if !foundUser:
            res.status(400).json({ error: "Incorrect username or password" });
        }

    } catch (err) {
        res.status(500).json({error : 'Error in loggin in'});
    }
});

export default router;