import Form from "../schema/form.js";
import Joi from "joi";

const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  text: Joi.string().required(),
});

const postForm = async (req, res) => {
  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: error.details[0].message,
    });
  }

  try {
    const message = new Form(req.body);
    const doc = await message.save();
    return res.status(200).json({ message: "Message Sent" });
  } catch (err) {
    return res.status(500).json({
      message: "Server error",
    });
  }
};

export default postForm;
