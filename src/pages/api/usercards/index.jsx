// Using Node.js `require()`
import connectDB from '../../../../middleware/mongodb.jsx'
import Usercard from '../../../../models/usercard'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    const { create_new_card } = req.body
    const { addcard } = req.body
    const { get_personal_card } = req.body
    const { get_cards_from_users_array } = req.body
    const { render_cards } = req.body
    const { emailofcurrectuser } = req.body
    const { deletecard } = req.body
    const { useremail } = req.body
    const { email } = req.body
    const { img } = req.body
    const { tag } = req.body
    const { json } = req.body
    const { filter_card } = req.body
    const { check_if_exist } = req.body

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
    if (check_if_exist) {
      try {
        var usercards = await Usercard.where({ email: check_if_exist }).count();
        res.send(usercards)
      } catch (e) {
        res.status(400).send(e)
      }
    }
    if (addcard) {
      try {
        var usercards = await Usercard.updateOne(
          { email: emailofcurrectuser },
          { $push: { other_cards: [addcard] } }
        ).exec()
        res.send(usercards)
      } catch (e) {
        res.status(400).send(e)
      }
    }
    if (create_new_card) {
      try {
        var usercards = await Usercard.findOneAndUpdate({email:email}, {img:img, tag:tag, json:json}).exec()
        if(usercards===null){
          try {
            const usercard = new Usercard(req.body)
            await usercard.save()
            res.send(usercard)
          } catch (e) {
            res.status(400)
            res.send(e)
          }
        }else{
          res.send(usercards)
        }
      } catch (e) {
        res.send(e)
        try {
          const usercard = new Usercard(req.body)
          await usercard.save()
          res.send(usercard)
        } catch (e) {
          res.status(400)
          res.send(e)
        }
      }
    }
    if (get_cards_from_users_array) {
      try {
        var usercards = await Usercard.find({
          email: get_cards_from_users_array
        }).exec()
        res.send(usercards)
        // console.log(usercards[0].other_cards)
      } catch (e) {
        res.status(400).send(e)
      }
    }
    if (render_cards) {
      try {
        var usercards = await Usercard.find({
          email: render_cards
        }).exec()
        res.send(usercards)
        console.log(usercards)
      } catch (e) {
        res.status(400).send(e)
      }
    }
    if (deletecard) {
      try {
        var usercards = await Usercard.updateOne(
          { email: useremail },
          { $pull: { other_cards: deletecard } }
        ).exec()
        res.send(usercards)
      } catch (e) {
        res.status(400).send(e)
      }
    }
    if (filter_card) {
      try {
        var usercards = await Usercard.find({
          tag: filter_card
        }).exec()
        res.send(usercards)
      } catch (e) {
        res.status(400).send(e)
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
