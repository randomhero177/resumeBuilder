const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path')
const app = express();


app.use(express.json({ extended: true, limit: '50mb' }));
app.use('/api/auth', require('./routes/auth.routes'))
app.use('/api/resume', require('./routes/resumes.routes'));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'frontend', 'dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'))
  })
}

const PORT = config.get('port') || 5000;

async function start() {
  try {
    await mongoose.connect(config.get('mongoUri'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`app started on port ${PORT}`))
  } catch (e) {
    console.log('Server error', e.message)
    process.exit(1);
  }
}

start()

