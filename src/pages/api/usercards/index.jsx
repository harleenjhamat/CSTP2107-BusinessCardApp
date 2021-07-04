// Using Node.js `require()`
import connectDB from '../../../../middleware/mongodb.jsx'
import Usercard from '../../../../models/usercard'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { create_new_card } = req.body
    const { addcard } = req.body
    const { get_personal_card } = req.body
    const { byname } = req.body

    if (get_personal_card) {
      try {
        var usercards = await Usercard.find({
          email: get_personal_card
        }).exec()
        res.send(usercards)
      } catch (e) {
        res.status(400).send(e)
      }
    }
    if (addcard) {
      try {
        var usercards = await Usercard.updateOne(
          {email: addcard},
          { $push: { other_cards: [addcard] } }
          ).exec()
        res.send(usercards)
      } catch (e) {
        res.status(400).send(e)
      }
    }
    if (create_new_card) {
      const usercard = new Usercard(req.body)
      try {
        await usercard.save()
        res.send(usercard)
      } catch (e) {
        res.status(400)
        res.send(e)
      }
    }
  }
  if (req.method === 'GET') {
    try {
      var usercards = await Usercard.find({})
      res.send(usercards)
    } catch (e) {
      res.status(400).send(e)
    }
  }
}

export default connectDB(handler)
