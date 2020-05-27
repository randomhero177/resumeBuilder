const { Router } = require('express');
const Link = require('../models/Link');
const config = require('config');
const shortid = require('shortid');
const auth = require('../middleware/auth.middleware');
const {check, validationResult} = require('express-validator');
const router = Router();



router.post(
  '/generate',
  auth,
  async (request, response) => {
    try {
      const baseUrl = config.get('baseUrl');
      const {from} = request.body;
      const code = shortid.generate()

      const existing = await Link.findOne({ from })

      if(existing) {
        return response.json({ link: existing })
      }

      const to = baseUrl + '/t/' + code;
      const link = new Link({
        code, to, from, owner: request.user.userId
      })
      await link.save()

      response.status(201).json({ link })
    } catch (e) {
      response.status(500).json({ message: "Что-то пошло не так" })
    }
  }
)


router.get(
  '/',
  auth,
  async (request, response) => {
    try {
      const links = await Link.find({ owner: request.user.userId }) ///???
      response.json(links);
    } catch (e) {
      response.status(500).json({ message: "Что-то пошло не так" })
    }
  }
)



module.exports = router