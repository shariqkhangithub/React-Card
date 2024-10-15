// import React from 'react'
// import "./card.css"

// const Card = () => {
//     const ques = [
//         "What language in react based on ?",
//         'why do not?',
//         'why you learn react',
//         'why learning javasvript',
//         'how can you perfect in react?',
//         'why you are axpert in css'
//     ]
//     return (
//         <>
//         {ques.map((question,index)=>( 
//             <div className='crd' key={index}>
//                 <p>{question}</p>
//             </div>
//         ))}
//     </>
//   )
// }   

// export default Card


import React, { useState } from 'react';
import "./card.css";

const Card = () => {
  const ques = [
    "What language is React based on?",
    "Why do you learn React?",
    "Why are you learning JavaScript?",
    "How can you become proficient in React?",
    "Why are you an expert in CSS?",
    'whats your dreame'
  ];

  const answers = [
    "React is based on JavaScript.",
    "React is essential for building user interfaces in modern web development.",
    "JavaScript is the foundation of React and modern web technologies.",
    "By building projects, practicing, and learning advanced concepts.",
    "Through continuous learning and practice in CSS design principles.",
    'profrssional programmer'
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      {ques.map((question, index) => (
        <div className='crd' key={index} onClick={() => handleClick(index)} >
          {activeIndex === index ? <p>{answers[index]}</p> : <h5>{question}</h5>}
        </div>
      ))}
    </>
  );
};

export default Card;
