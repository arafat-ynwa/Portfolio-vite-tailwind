import { useState } from "react";
import { sendTextAsync } from "./formSlice";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";

const initialState = {
  name: "",
  email: "",
  text: "",
};

function Form() {
  const [text, setText] = useState(initialState);
  const status = useSelector((state) => state.form.status);

  const dispatch = useDispatch();

  function handleChange(e) {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await dispatch(sendTextAsync(text)).unwrap();
      toast.success(res.message);
      setText(initialState);
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="px-6 max-w-250 mx-auto md:my-12" id="contact">
      <div className="grid md:grid-cols-2 place-items-center border border-gray-800 rounded-2xl">
        <p className="text-gray-100 font-bold text-xl mb-2">Let's Connect</p>

        <form
          onSubmit={handleSubmit}
          className=" max-w-6xl p-5 md:p-12"
          id="form"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            value={text.name}
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-gray-100 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Your Email"
            name="email"
            value={text.email}
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-gray-100 focus:outline-none"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Your Message"
            name="text"
            value={text.text}
            className="mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4 bg-gray-100 focus:outline-none"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="w-full py-3 rounded-md text-gray-100 font-semibold text-xl bg-primary-color cursor-pointer"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
