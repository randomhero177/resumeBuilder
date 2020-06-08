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
      const { avatar } = request.body;
      const { accomplishments } = request.body;
      const { birthday } = request.body;
      const { education } = request.body;
      const { email } = request.body;
      const { experience } = request.body;
      const { lastName } = request.body;
      const { languages } = request.body;
      const { name } = request.body;

      const { position } = request.body;
      const { phone } = request.body;
      const { profile } = request.body;
      const existing = await Resumes.findOne({ lastName });

      if(existing) {
        return response.json({ resume: existing })
      }

      const resume = new Resumes({
        accomplishments, avatar, birthday, education, email, experience, lastName, languages, name, position, profile,
        phone, owner: request.user.userId
      })
      await resume.save()

      response.status(201).json({ resume, status: 'Ok' })
    } catch (e) {
      response.status(500).json({ message: "Что-то пошло не так", errorMes: e})
    }
  }
)

router.put(
  '/edit/:id',
  auth,
  async (request, response) => {
    try {
      const resume = await Resumes.findOne({ owner: request.user.userId });

      if (resume) {
        resume.avatar = request.body.avatar;
        resume.accomplishments = request.body.accomplishments;
        resume.birthday = request.body.birthday;
        resume.education= request.body.education;
        resume.email = request.body.email;
        resume.experience = request.body.experience;
        resume.lastName = request.body.lastName;
        resume.languages = request.body.languages;
        resume.name = request.body.name;

        resume.position = request.body.position;
        resume.phone = request.phone;
        resume.profile = request.profile;
        await resume.save()
        response.status(200).json('Ok')
      }

      responce.status(404).json('Ссылка не найдена')
    } catch (e) {
      response.status(500).json({ message: "Что-то пошло не так", errorMes: e})
    }
  }
)


router.get(
  '/',
  auth,
  async (request, response) => {
    try {
      const resumes = await Resumes.find({ owner: request.user.userId })
      response.status(200).json(resumes);
    } catch (e) {
      response.status(500).json({ message: "Что-то пошло не так" })
    }
  }
)



module.exports = router