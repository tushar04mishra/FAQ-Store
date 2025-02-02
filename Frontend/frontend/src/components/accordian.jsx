import React, { useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

const Accordian = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
    console.log("Accordion toggled:", !isOpen); // Debugging
    console.log("Question:", question); // Debugging
    console.log("Answer:", answer); // Debugging
  };

  return (
    <div className="accordian">
      <div className="question" onClick={toggleAccordion}>
        <div className="icon">{isOpen ? <FaCaretUp /> : <FaCaretDown />}</div>
        <h4>{question}</h4>
      </div>
      <div className={`answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Accordian;

// import React from "react";
// import { useState } from "react";
// import { FaCaretDown, FaCaretUp } from "react-icons/fa";

// const Accordian = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div>
//       <div className="accordian" onClick={() => setIsOpen(!isOpen)}>
//         <div className="question">
//           <div className="icon">{isOpen ? <FaCaretUp /> : <FaCaretDown />}</div>
//           <h4>Lorem ipsum dolor, sit amet consectetur.</h4>
//         </div>
//         <div className={`answer ${isOpen ? "open" : ""}`}>
//           <p>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nulla
//             nostrum voluptas deserunt porro, earum vero magnam atque
//             necessitatibus impedit, labore perferendis officia obcaecati
//             repellendus, provident quae ex soluta asperiores?
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Accordian;
