import React, { useState } from "react";
import '../Styles/FAQ.css';

const faqData = [
  {
    question: "How does an online consultation work?",
    answer:
      "First Register and login then all you have to do is tell us your symptoms or health problems, choose the speciality, make a payment. Once payment is made, we alert our panel of verified, high-quality doctors and allocate a doctor to your consultation. On allocated time , you can start talking to a doctor. Once your consultation is completed.",
  },
  {
    question: "How do I pay for an online consultation?",
    answer: "     You can pay for an online consultation using internet banking, credit/debit cards, Pay wallets, UPI, or by transferring to the doctor's account. It doesn't cost much. It is pocket-friendly and helps you maintain your budget.",
  },
  {
    question: "How do I know if the doctor is legitimate?",
    answer: "You can check if the doctor is certified and read reviews from previous patients.",
  },
  {
    question: "Will I get a refund if I cancel the online doctor consultation?",
    answer: "Yes. If you cancel the online consultation, the refund for the same will reflect in your account within 5 to 7 working days.",
  },
  {
    question: "What happens if my call gets disconnected during the consultation?",
    answer: "If your audio/video call gets disconnected during the online consultation, you would receive another call within a few minutes provided your internet connection is stable.",
  },
  {
    question: "What is the minimum fee for online doctor consultation?",
    answer: "Online doctor consultation starts at Rs.200. The consultation fee will vary based on the doctor, the specialty, years of experience of the doctor, any discounts or promotion applied, etc.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <hr />
      <br />
      <h2><b style={{ color: "black" }}><u>Frequently Asked Questions</u></b></h2>
      <ul className="accordion">
        {faqData.map((faq, index) => (
          <li key={index} className={activeIndex === index ? "active" : ""}>
            <button
              className="question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={activeIndex === index}
              aria-controls={`faq-${index}`}
            >
              {faq.question}
            </button>
            <div
              id={`faq-${index}`}
              className="content"
              style={{
                display: activeIndex === index ? "block" : "none",
              }}
            >
              <p>{faq.answer}</p>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <small>
        For latest notifications enter your email and subscribe for Doctalk newsletter to receive all the new offers and discounts from Doctalk. Discounts are only valid for our newsletter subscribers.
      </small>
      <form className="email-signup">
        <input
          type="email"
          placeholder="Email address"
          id="email"
          required
          aria-label="Enter your email address"
        />
        {/* <button
          type="submit"
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
          }}
        >
          Subscribe
        </button> */}
        <button
          type="submit"
          style={{
            backgroundColor: "#dc3545",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
          onClick={() => alert("You have successfully subscribed!")}
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default FAQ;
