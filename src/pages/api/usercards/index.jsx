// Using Node.js `require()`
import connectDB from '../../../../middleware/mongodb.jsx'
import Usercard from '../../../../models/usercard'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { addcard } = req.body
    if(addcard){
      try {
        var usercards = await Usercard.find({
          sharedcode: addcard
        }).exec();
        res.send(usercards)
      } catch (e) {
        res.status(400).send(e)
      }
    }
    const usercard = new Usercard(req.body)
    try {
      await usercard.save()
      res.send(usercard)
    } catch (e) {
      res.status(400)
      res.send(e)
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
