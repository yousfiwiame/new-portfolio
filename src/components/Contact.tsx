import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from '@emailjs/browser';
import { useLanguage } from "../context/LanguageContext"; // Adjust the import path as needed

// Replace these with your actual EmailJS credentials
const SERVICE_ID = "service_5qbdqrq";
const TEMPLATE_ID = "template_ven9o5y";
const PUBLIC_KEY = "wStumSyiEZsdsD6W3";

const Contact = () => {
  const { t, language } = useLanguage();
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      // Using EmailJS service
      const templateParams = {
        from_name: formState.name,
        from_email: formState.email,
        message: formState.message,
        to_name: "Wiame",
        reply_to: formState.email,
      };
      
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );
      
      if (response.status !== 200) {
        throw new Error(t("contact.error"));
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      setError(err instanceof Error ? err.message : t("contact.error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-lavender" size={24} />,
      title: t("contact.email"),
      content: "wiame.yousfi22@gmail.com",
      href: "mailto:wiame.yousfi22@gmail.com",
    },
    {
      icon: <Phone className="text-lavender" size={24} />,
      title: language === "fr" ? "Téléphone" : "Phone",
      content: "+212 6 74 98 44 99",
      href: "tel:+212674984499",
    },
    {
      icon: <MapPin className="text-lavender" size={24} />,
      title: language === "fr" ? "Localisation" : "Location",
      content: language === "fr" ? "Rabat, Maroc" : "Rabat, Morocco",
    },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-heading text-center">{t("contact.title")}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12">
          {/* Formulaire de contact */}
          <div className="lg:col-span-7 animate-fade-in">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">
                {language === "fr" ? "Envoyer un message" : "Send a message"}
              </h3>

              {isSubmitted ? (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-lg p-4 flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {t("contact.success")}
                </div>
              ) : null}

              {error ? (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-200 rounded-lg p-4 flex items-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  {error}
                </div>
              ) : null}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-lavender focus:ring-1 focus:ring-lavender outline-none transition-colors duration-300"
                    placeholder={language === "fr" ? "Votre nom" : "Your name"}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-lavender focus:ring-1 focus:ring-lavender outline-none transition-colors duration-300"
                    placeholder="123@example.com"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    {t("contact.message")}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:border-lavender focus:ring-1 focus:ring-lavender outline-none transition-colors duration-300"
                    placeholder={language === "fr" ? "Comment puis-je vous aider ?" : "How can I help you?"}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`glass-button flex items-center justify-center w-full ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {language === "fr" ? "Envoi en cours..." : "Sending..."}
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send size={18} className="mr-2" />
                      {t("contact.send")}
                    </span>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Informations de contact */}
          <div className="lg:col-span-5 animate-slide-in">
            <div className="glass-card p-8 h-full">
              <h3 className="text-2xl font-bold mb-8">
                {language === "fr" ? "Informations de contact" : "Contact Information"}
              </h3>

              <div className="space-y-8">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 rounded-full bg-lavender/20 mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-bold">{info.title}</h4>
                      {info.href ? (
                        <a href={info.href} className="text-muted-foreground hover:text-lavender transition-colors duration-300">
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Réseaux sociaux */}
              <div className="mt-12">
                <h4 className="font-bold mb-4">
                  {language === "fr" ? "Me retrouver sur" : "Find me on"}
                </h4>
                <div className="flex gap-4">
                  <a
                    href="https://github.com/yousfiwiame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-lavender/10 hover:bg-lavender/20 transition-colors duration-300"
                    aria-label="Connect on GitHub"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
                      alt="GitHub"
                      className="w-5 h-5 dark:invert"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/wiame-yousfi-2a989a243/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-lavender/10 hover:bg-lavender/20 transition-colors duration-300"
                    aria-label="Connect on LinkedIn"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
                      alt="LinkedIn"
                      className="w-5 h-5 dark:invert"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;