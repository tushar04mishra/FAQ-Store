import { useState, useEffect } from "react";
import Accordian from "./components/accordian";

import "./App.css";

function App() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/faqs");
        const data = await response.json();
        console.log("Fetched FAQs:", data); // Debugging
        if (data.success) {
          setFaqs(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch FAQs:", error);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <>
      <h2>FAQ's</h2>
      {faqs.length > 0 ? (
        faqs.map((faq) => (
          <Accordian key={faq.id} question={faq.question} answer={faq.answer} />
        ))
      ) : (
        <p>Loading FAQs...</p>
      )}
    </>
  );
}

export default App;

// import { useState } from "react";
// import Accordian from "./components/accordian";

// import "./App.css";

// function App() {
//   return (
//     <>
//       <h2>FAQ's</h2>
//       <Accordian />
//       <Accordian />
//       <Accordian />
//       <Accordian />
//       <Accordian />
//       <Accordian />
//     </>
//   );
// }

// export default App;
