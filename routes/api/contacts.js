const express = require("express");
const router = express.Router();
const { auth, validation } = require("../../middlewars");
const { joiSchema, joiFavoriteSchema } = require("../../models/contact");
const { contacts: controllers } = require("../../controllers");

router.get("/", auth, controllers.getAll);

router.get("/:id", controllers.getById);

router.post("/", auth, validation(joiSchema), controllers.addContact);

router.delete("/:id", controllers.removeContact);

router.put("/:id", validation(joiSchema), controllers.updateById);

router.patch(
  "/:id/favorite",
  validation(joiFavoriteSchema),
  controllers.updateFavoriteContact
);

module.exports = router;
