const {Router} = require('express');
const User = require('../models/User');
const config = require('config');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = Router();
const { check, validationResult } = require('express-validator');


router.post('/register',
  [
    check('email', 'Некорректный email').isEmail(),
    check('password', 'Некорректный пароль').isLength({min: 8})
  ],
  async (request, response) => {
    try {
      const errors = validationResult(request);
      if(!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Ошибки'
        })
      }

      const { email, password } = request.body;
      const candidate = await User.findOne({ email });

      if(candidate) {
        return response.status(400).json({message: 'Такой пользователь уже существует'})
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({email, password: hashedPassword});

      await user.save();

      response.status(400).json({ message: 'Пользователь создан' });
    } catch (e) {
      response.status(500).json({ message: 'Что-то пошло не так' })
    }
  }
)


router.post('/login',[
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists()
  ],
  async (request, response) => {
    try {
      const errors = validationResult(request);
      if(!errors.isEmpty()) {
        return response.status(400).json({
          errors: errors.array(),
          message: 'Некорректные данные при входе в систему'
        })
      }

      const { email, password } = request.body;
      const user = await User.findOne({ email });

      if(!user) {
        return response.status(400).json({ message: 'Пользователь не найден' })
      }

      const isMatched = await bcrypt.compare(password, user.password);

      if(!isMatched) {
        return response.status(400).json({ message: 'Не правильный пароль' })
      }

      const token = jwt.sign(
{ userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h' }
      )
      response.json({
        token,
        userId: user.id
      })
    } catch (e) {
      response.status(500).json({ message: 'Что-то пошло не так' })
    }
  }
)

module.exports = router