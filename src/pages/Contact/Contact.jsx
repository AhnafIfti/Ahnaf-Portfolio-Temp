// src/pages/Contact/Contact.jsx
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ContactForm from "../../components/ContactForm/ContactForm";
import Icon from "../../components/Icon/Icon";
import { contact } from "../../data/content";
import "./Contact.css";

export default function Contact() {
  return (
    <section className="page-section">
      <div className="container">
        <SectionHeading title="Contact Details" />
        <div className="contact-layout">
          <div className="contact-layout__form">
            <ContactForm />
          </div>
          <div className="contact-layout__details">
            <ul className="contact-details">
              <li>
                <Icon name="mail" size={18} />
                <div>
                  <span className="contact-details__label">Email</span>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </div>
              </li>
              <li>
                <Icon name="phone" size={18} />
                <div>
                  <span className="contact-details__label">Phone</span>
                  <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                </div>
              </li>
              <li>
                <Icon name="pin" size={18} />
                <div>
                  <span className="contact-details__label">Address</span>
                  <span>
                    {contact.address.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
