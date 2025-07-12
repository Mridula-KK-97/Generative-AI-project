import React from 'react';

const QueryInput = ({ query, setQuery, handleSubmit, loading }) => {
  return (
    <div className="space-y-2">
      <textarea
        className="w-full border p-2 rounded-md resize-none"
        rows={4}
        placeholder="Ask a legal question..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></textarea>
      <button
        onClick={handleSubmit}
        disabled={loading || !query.trim()}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
};

export default QueryInput;
