

module.exports = {

  //FRIENDS
  getFriends: ( req, res ) => {
        const { params } = req;
        const dbInstance = req.app.get('db');
        dbInstance.getFriends(params.id)
            .then(friends => res.status(200).send(friends))

    },

//STILL NEED TO WORK OUT
    addFriends: (req, res) => {
          const { picture, b_year, b_month, b_day, eye_color, hair_color, hobby, gender, first, last } = req.body;
          const dbInstance = req.app.get('db');
          dbInstance.addFriends(picture, b_year, b_month, b_day, eye_color, hair_color, hobby, gender, first, last)
          .then((friends) => res.status(200).send(friends))
          .catch(err => {
              console.log(err)
              res.status(500).send()
          })
      },

      deleteFriends: (req,res) => {
          const { params } = req;
          const dbInstance = req.app.get('db');
          dbInstance.deleteFriends(params.id)
              .then(friends => res.status(200).send(friends))
              .catch(err => res.status(500).send(err))
      }
  }

     userUpdate: (req, res) => {


     }

     app.put('/api/user/patch/:id', (req, res)=>{
 let updateUser = user.find((friend)=>friend.id === req.params.id * 1);
 if (!updateUser){
 }
