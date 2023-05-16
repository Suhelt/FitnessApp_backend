const router = require("express").Router();

const symptomsController = require("../controllers/symptoms.controller");

module.exports = function(){

    router.route("/")
    .get(symptomsController.findAll)
    .post(symptomsController.create);


    router.route("/:id")
    .get(symptomsController.findById)
    .put(symptomsController.update)
    .delete(symptomsController.remove);
    return router;
}