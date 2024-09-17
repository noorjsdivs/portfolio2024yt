import React from "react";
import Container from "./Container";
import { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { motion } from "framer-motion";

const Contact = () => {
  const [status, setStatus] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Phone: "",
    Address: "",
    Message: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const scriptURL = "";
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    const currentDateTime = new Date().toLocaleString();
    form.append("Name", formData.Name);
    form.append("Email", formData.Email);
    form.append("Phone", formData.Phone);
    form.append("Address", formData.Address);
    form.append("Message", formData.Message);
    form.append("DateTime", currentDateTime);

    try {
      setLoading(true);
      const response = await fetch(scriptURL, { method: "POST", body: form });
      if (response.ok) {
        setStatus("Success! Your message has been sent.");
        setFormData({
          Name: "",
          Email: "",
          Phone: "",
          Address: "",
          Message: "",
        });
      } else {
        setStatus("Error! Unable to send your message.");
      }
    } catch (error) {
      console.error("Error!", error.message);
      setStatus("Error! Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className=" bg-darkBg py-24">
      <Container className="bg-lightDarkBg text-white/80 p-20 rounded-lg">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-10">
            <ColorRing
              visible={true}
              height="150"
              width="150"
              ariaLabel="color-ring-loading"
              wrapperStyle={{}}
              wrapperClass="color-ring-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
            <p className="text-lg font-semibold">
              Submission on process. Thank you for holding...{" "}
            </p>
          </div>
        ) : status ? (
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="py-10 flex flex-col gap-2 items-center justify-center"
          >
            <p className="text-xl font-semibold text-green-500">{status}</p>
            <p className="text-base text-slate-300">
              Thank you for your time and will make sure to reach you out on
              your email:{" "}
              <span className="text-lg font-semibold text-green-500">
                {formData?.Email}
              </span>{" "}
              as soon as possible
            </p>
          </motion.div>
        ) : (
          <>
            <div className="text-center text-white">
              <h3 className="text-4xl font-semibold">Get In Touch</h3>
              <p className="text-base font-normal text-white/80 mt-5">
                Contact us for a great photography session & beautiful captured
                moments
              </p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="max-w-4xl mx-auto flex flex-col gap-8 mt-5"
            >
              <div className="flex items-center justify-between gap-7">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  className="inputStyle"
                  required
                />
                <input
                  type="email"
                  name="Email"
                  placeholder="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  className="inputStyle"
                  required
                />
              </div>
              <div className="flex items-center justify-between gap-7">
                <input
                  type="text"
                  name="Phone"
                  placeholder="Phone"
                  value={formData.Phone}
                  onChange={handleChange}
                  className="inputStyle"
                />
                <input
                  type="text"
                  name="Address"
                  placeholder="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  className="inputStyle"
                />
              </div>
              <textarea
                name="Message"
                placeholder="Text here"
                value={formData.Message}
                onChange={handleChange}
                className="inputStyle py-6 resize-none"
                cols={6}
                required
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-x-1 bg-white/15 hover:bg-white/10 w-48 h-14 text-base font-semibold relative group overflow-hidden self-center mt-4"
              >
                Send mail
                <span className="w-full h-[1px] bg-white absolute top-0 left-0 -translate-x-[90%] group-hover:-translate-x-[55%] transitionDuration" />
                <span className="w-full h-[1px] bg-white absolute top-0 left-0 translate-x-[90%] group-hover:translate-x-[55%] transitionDuration" />
                <span className="w-full h-[1px] bg-white absolute bottom-0 left-0 -translate-x-[90%] group-hover:-translate-x-[55%] transitionDuration" />
                <span className="w-full h-[1px] bg-white absolute bottom-0 left-0 translate-x-[90%] group-hover:translate-x-[55%] transitionDuration" />
                <span className="h-full w-[1px] absolute left-0 top-0 bg-white translate-y-[70%] group-hover:translate-y-[60%] transitionDuration" />
                <span className="h-full w-[1px] absolute left-0 top-0 bg-white -translate-y-[70%] group-hover:-translate-y-[60%] transitionDuration" />
                <span className="h-full w-[1px] absolute right-0 top-0 bg-white translate-y-[70%] group-hover:translate-y-[60%] transitionDuration" />
                <span className="h-full w-[1px] absolute right-0 top-0 bg-white -translate-y-[70%] group-hover:-translate-y-[60%] transitionDuration" />
              </button>
            </form>
          </>
        )}
      </Container>
    </section>
  );
};

export default Contact;
