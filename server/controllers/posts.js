module.exports = (app) => {
  app.get('/v1/posts', async (req, res) => {
    try {
      return res.status(200).json({date: new Date()})
    } catch (error) {
      return res.status(error).json(error)
    }
  })

  app.get('/v2/posts', async (req, res) => {
    try {
      return res.status(200).json({date: new Date()})
    } catch (error) {
      return res.status(error).json(error)
    }
  })
}

