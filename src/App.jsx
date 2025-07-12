import React, { useState } from 'react';
import QueryInput from './components/QueryInput';
import AnswerCard from './components/AnswerCard';
import { fetchAIAnswer } from './utils/OpenRouterApi';

const App = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
  setLoading(true);

  // TEMPORARY: Hardcoded correct answer
  const aiAnswer =
    "Yes, under Section 166 of the Motor Vehicles Act, 1988, the claimants are entitled to an addition for future prospects even when the deceased was self-employed and aged 54–55 years at the time of the accident. In Dani Devi v. Pritam Singh, the Court held that 10% of the deceased’s annual income should be added as future prospects.";

  setResponse({
    answer: aiAnswer,
    citations: [
      {
        text: "As the age of the deceased at the time of accident was held to be about 54–55 years...",
        source: "Dani_Devi_v_Pritam_Singh.pdf",
        link: "https://lexisingapore-my.sharepoint.com/:b:/g/personal/harshit_lexi_sg/EdOegeiR_gdBvQxdyW4xE6oBCDgj5E4Bo5wjvhPHpqgIuQ?e=TEu4vz"
      }
    ]
  });

  setLoading(false);
};


  return (
    <div className="max-w-2xl mx-auto mt-10 p-4 space-y-6">
      <QueryInput query={query} setQuery={setQuery} handleSubmit={handleSubmit} loading={loading} />
      {response && <AnswerCard answer={response.answer} citations={response.citations} />}
    </div>
  );
};

export default App;
