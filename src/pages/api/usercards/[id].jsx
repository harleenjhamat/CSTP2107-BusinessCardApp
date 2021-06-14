// Using Node.js `require()`
import connectDB from '../../../../middleware/mongodb.jsx'
import Usercard from '../../../../models/usercard'

const handler = async (req, res) => {
  if (req.method === 'GET') {
    const _id = req.query.id
    try {
      var usercard = await Usercard.findById(_id)
      if (!usercard) {
        res.status(404).send()
      }
      res.send(usercard)
    } catch (e) {
      res.status(400).send(e)
    }
  }
  if (req.method === 'PUT') {
    const _id = req.query.id
    try {
      var usercard = await Usercard.findByIdAndUpdate(_id, req.body, {
        new: true,
        runValidators: true
      })
      if (!usercard) {
        return res.status(404).send()
      }
      res.send(usercard)
    } catch (e) {
      res.status(400).send()
    }
  }
  if (req.method === 'DELETE') {
    const _id = req.query.id
    try {
      var usercard = await Usercard.findByIdAndDelete(_id)
      if (!usercard) {
        return res.status(404).send()
      }
      res.send(usercard)
    } catch (e) {
      res.status(500).send()
    }
  }
}

export default connectDB(handler)
