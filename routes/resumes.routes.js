const { Router } = require('express');
const Resumes = require('../models/Resumes');
const config = require('config');
const shortid = require('shortid');
const auth = require('../middleware/auth.middleware');
const router = Router();



router.post(
  '/generate',
  auth,
  async (request, response) => {
    try {
      const { education } = request.body;
      const { email } = request.body;
      const { name } = request.body;
      const { lastName } = request.body;

      const { avatar } = request.body;
      const { accomplishments } = request.body;
      const { birthday } = request.body;
      const { position } = request.body;
      const { profile } = request.body;
      const existing = await Resumes.findOne({ lastName });

      if(existing) {
        return response.json({ resume: existing })
      }

      const resume = new Resumes({
        education, email, accomplishments, birthday, position, profile,
        name, lastName, avatar, owner: request.user.userId
      })
      await resume.save()

      response.status(201).json({ resume })
    } catch (e) {
      response.status(500).json({ message: "Что-то пошло не так", hui: e })
    }
  }
)


router.get(
  '/',
  auth,
  async (request, response) => {
    try {
      const resumes = await Resumes.find({ owner: request.user.userId })
      response.json(resumes);
    } catch (e) {
      response.status(500).json({ message: "Что-то пошло не так" })
    }
  }
)



module.exports = router