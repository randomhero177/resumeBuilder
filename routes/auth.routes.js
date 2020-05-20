const {Router} = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const router = Router()


router.post('/register', async (request, responce) => {
 try {
    const { email, password } = request.body;
    const candidate = await User.findOne({ email });

    if(candidate) {
      return responce.status(400).json({message: 'Такой пользователь уже существует'})
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({email, password: hashedPassword});

    await user.save();

    responce.status(400).json({ message: 'Пользователь создан' });
 } catch (e) {
    responce.status(500).json({ message: 'Что-то пошло не так' })
 }
})


router.post('/login', async (request, responce) => {
  try {

  } catch (e) {

  }
})

module.exports = router