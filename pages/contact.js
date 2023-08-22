import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic using the API or other methods
  };

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="website"
              placeholder="Website"
              value={formData.website}
              onChange={handleInputChange}
            />
            <textarea placeholder="Message"></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactForm;
