const router = require("express").router();

const PrescriptionsController = require("../controllers/perscription.controller");

module.exports = function(){

    router.route("/")
    .get(perscriptionsController.findAll)
    .post(perscriptionsController.create);


    router.route("/:id")
    .get(perscriptionsController.findById)
    .put(perscriptionsController.update)
    .delete(perscriptionsController.remove);
    return router;
}