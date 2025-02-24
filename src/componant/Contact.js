import { FaEnvelope } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await emailjs.send(
        "service_ozpms79",
        "template_cuqes0n",
        {
          user_name: name, // Match keys from your EmailJS template
          user_email: email,
          user_message: message,
        },
        "laEo5x78PZOgnZFnm"
      );
      console.log("SUCCESS:", response);
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Check the console for details.");
    }
  };

  return (
    <div className="bg-black text-white py-20" id="Contact">
      <h1 className="text-4xl font-bold text-center mb-12">Contact Me</h1>
      <div className=" mx-auto px-8 md :px-16 lg:px-24 flex flex-col md:flex-row md:1/2">
        <div className="flex-1 py-5 px-5 container md:1/2">
          <h4 className="text-pink-400 text-4xl">Lets Talks</h4>
          <p className="text-white font-bold py-3 ">
            {" "}
            i am a MERN stack Developer you can talk about any Frontend &
            Backend technologies{" "}
          </p>
          <div className="mb-4 mt-8">
            <FaEnvelope className="inline-block text-green-400 mr-2" />
            <a
              href="mailto:vijaykumarpatil960@gmail.com"
              className="hover:underline text-blue-300"
            >
              vijaykumarpatil960@gmail.com
            </a>
          </div>
          <div className=" text-gray-400 flex items-center gap-2 py-4">
            <FaPhoneVolume className="text-green-300" />
            <span className="text-blue-300">+91 7219066757</span>
          </div>
          <div className=" text-gray-400 flex items-center gap-2 py-4">
            <FaHome className="text-green-400" />
            <span className="text-blue-300">At. Borgaon BK</span>
          </div>
        </div>
        <div className=" flex-1 container py-5 px-5 md:1/2">
          <form onSubmit={handleSubmit}>
            <h4 className="font-bold">Your Name</h4>
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              style={{ height: "30px", width: "100%" }}
              className="rounded-lg bg-slate-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <h4 className="mt-3 font-bold">Email</h4>
            <input
              type="text"
              name="email"
              placeholder="Enter Your Email"
              style={{ height: "30px", width: "100%" }}
              className="rounded-lg bg-slate-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <h4 className="mt-4 font-bold">Message</h4>
            <textarea
              name="message"
              placeholder="Enter Your Message"
              className="h-40   rounded-lg bg-slate-500"
              style={{ width: "100%" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              type="submit"
              className=" bg-gradient-to-r from-yellow-600 to-blue-500 rounded-full h-10 w-20 font-bold "
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
//service_ID:service_ozpms79
//public_ID:laEo5x78PZOgnZFnm
//template_ID:template_fskymsk
