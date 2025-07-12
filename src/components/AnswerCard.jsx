// components/AnswerCard.jsx
import React from 'react';

const AnswerCard = ({ answer, citations }) => {
  return (
    <div className="bg-white shadow p-4 rounded-md border space-y-4">
      {/* Display AI Answer */}
      <div className="text-gray-800 whitespace-pre-line">
        {answer}
      </div>

      {/* Display Citations */}
      <div className="text-sm text-blue-700 underline cursor-pointer space-y-2">
        {citations.map((cite, index) => (
          <div key={index}>
            <span className="font-semibold">Source:</span>{' '}
            <a href={cite.link} target="_blank" rel="noopener noreferrer">
              {cite.text}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnswerCard;
