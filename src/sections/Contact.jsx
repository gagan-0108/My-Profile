import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      toast.loading("🚀 Launching digital pigeon... Please hold tight!", {
        duration: 2000,
        style: {
          background: '#333',
          color: '#fff',
          fontSize: '1.1rem',
          padding: '16px',
          borderRadius: '8px',
        },
      });

      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      toast.success("🎉 Pigeon successfully delivered! I'll get back to you soon!", {
        duration: 4000,
        style: {
          background: '#4CAF50',
          color: '#fff',
          fontSize: '1.1rem',
          padding: '16px',
          borderRadius: '8px',
        },
      });
      
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("😱 Oops! The pigeon got lost in cyberspace. Please try again!", {
        duration: 4000,
        style: {
          background: '#f44336',
          color: '#fff',
          fontSize: '1.1rem',
          padding: '16px',
          borderRadius: '8px',
        },
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch – Connect – If you wanna touch me"
          sub="💬 Have questions or ideas? Please don't ask. Wanna have a casual chat and hang out? Welcome!"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Codename / Alias</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your FBI codename here..."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Digital Pigeon Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="totally.real.email@notfake.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Thoughts™</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here... or just keyboard smash, I won't judge 🤷‍♂️"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
