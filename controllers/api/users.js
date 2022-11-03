// Functions that hold the logic of creating users in DB

const User = require('../../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')


async function create(req, res) {
    try {
        // console.log(req.body);
        // adds user to database
        const user = await User.create(req.body)
        // token will be a string
        const token = createJWT(user);
        // can use res.json to send back just a string
        // Client code needs this info
        res.json(token)
        } catch (error) {
            // CLient will check for non-2xx status code
            // 400 = Bad Request
            res.status(400).json(error)
    }
}

function createJWT(user) {
    return jwt.sign (
        // data payload
        {user},
        process.env.SECRET,
        {expiresIn: '24h'}
    );
}

module.exports = {
    create,
    login
};

async function login(req, res) {
    try {
        const uder = await User.findOne({email: req.body.email})
        if(!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if(!match) throw new Error();
        res.json(createJWT(user));
    } catch {
        res.status(400).json('Bad credentials');
    }
}