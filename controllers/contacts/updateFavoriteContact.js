const createError = require("http-errors");
// const contactsOperations = require("../../contactsOperations");
const { Contact } = require("../../models");
const updateFavoriteContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;
    const result = await Contact.findByIdAndUpdate(id, favorite, { new: true });
    console.log(result);
    if (!result) {
      throw createError(404, `Contact with id=${id} not found`);
    }
    res.json({
      message: "contact updated",
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};
module.exports = updateFavoriteContact;
