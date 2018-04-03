const Pet = require("mongoose").model("Pet");

module.exports = {
  index(req, res) {
    // console.log('grabbing pets from server ')
    Pet.find({})
      .then(pets => res.json(pets))
      .catch(console.log);
  },
  create(req, res) {
    // console.log('req.body ', req.body)
    Pet.create(req.body)
      .then(pet => res.json(pet))
      .catch(error => {
        res
          .status(422)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
          );
      });
  },
  update(req, res) {
    // console.log('req.param.id ', req.params.id)
    console.log("req.body ", req.body);
    Pet.findByIdAndUpdate(req.params.id, req.body)
      .then(pet => res.json(pet))
      .catch(error => {
        res
          .status(422)
          .json(
            Object.keys(error.errors).map(key => error.errors[key].message)
          );
      });
  },
  show(req, res) {
    // console.log('req.body ', req.params.id)
    Pet.findById(req.params.id)
      .then(pet => res.json(pet))
      .catch(console.log);
  },
  destroy(req, res) {
    Pet.findByIdAndRemove(req.params.id)
      .then(pet => {
        // console.log('updated ', pet)
        res.json(pet);
      })
      .catch(console.log);
  }
};
