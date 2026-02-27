import { useState } from "react";
import { sendTextAsync } from "./formSlice";
import { useSelector, useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { IoIosSend } from "react-icons/io";
import ShinyEffect from "../common/ShinyEffect";

const initialState = {
  name: "",
  email: "",
  text: "",
};

function Form() {
  const [formData, setFormData] = useState(initialState);
  const status = useSelector((state) => state.form.status);
  const dispatch = useDispatch();

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await dispatch(sendTextAsync(formData)).unwrap();
      toast.success(res.message);
      setFormData(initialState);
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <section
      className="relative overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-center px-6 py-20 "
      id="contact"
    > {/* Heading */}
      <ShinyEffect left={10} size={600} maxWidth={600} />


        <div className="text-center mb-8 px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Let's Work Together
          </h2>
          <p className="text-gray-400 mt-2">
            Have a project in mind? Send me a message.
          </p>
        </div>
      <div className="p-8 rounded-2xl border border-white/10 
                         bg-white/5 backdrop-blur-sm
                         hover:border-white/20 hover:bg-white/10
                         transition-all duration-300 w-full max-w-100 md:w-120">
        
       

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          
          <div>
            <label className="text-sm text-gray-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="email@example.com"
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Message</label>
            <textarea
              name="text"
              value={formData.text}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
              className="w-full mt-2 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none h-32"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition duration-300
              ${
                status === "loading"
                  ? "bg-gray-700 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-500 shadow-lg"
              }`}
          >
            {status === "loading" ? (
              "Sending..."
            ) : (
              <div className="text-white flex flex-row cursor-pointer">
                <IoIosSend size={20} />
                Send Message
              </div>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Form;