import React, { useState, useEffect } from 'react';

 

function TranslationForm() {

  const [translations, setTranslations] = useState([]);

  const [userTranslations, setUserTranslations] = useState([]);

  const [results, setResults] = useState([]);

 

  // Load data from the JSON file when the component mounts

  useEffect(() => {

    fetch('/translations.json')

      .then((response) => response.json())

      .then((data) => {

        setTranslations(data);

        setUserTranslations(data.map(() => ''));

        setResults(data.map(() => ''));

      })

      .catch((error) => console.error('Error loading translations:', error));

  }, []);

 

  const handleInputChange = (index, event) => {

    const values = [...userTranslations];

    values[index] = event.target.value;

    setUserTranslations(values);

  };

 

  const handleCheckAnswer = (index) => {

    const correctTranslation = translations[index].latin;

    const userTranslation = userTranslations[index];

    const result = userTranslation === correctTranslation ? 'Correct' : correctTranslation;

    const newResults = [...results];

    newResults[index] = result;

    setResults(newResults);

  };

 

  return (

    <div>

      <h1>Translation Form</h1>

      <div className="translation-table">

        {translations.length > 0 ? (

          translations.map((translation, index) => (

            <div key={index} className="translation-row">

              <div className="translation-cell">

                <input

                  type="text"

                  value={translation.english}

                  readOnly

                  style={{ width: '100%' }}

                />

              </div>

              <div className="translation-cell">

                <input

                  type="text"

                  value={userTranslations[index]}

                  onChange={(event) => handleInputChange(index, event)}

                  placeholder="Your translation"

                  style={{ width: '100%' }}

                />

              </div>

              <div className="translation-cell">

                <button onClick={() => handleCheckAnswer(index)}>Check</button>

              </div>

              <div className="translation-cell">

                <input

                  type="text"

                  value={results[index]}

                  readOnly

                  style={{ width: '100%' }}

                />

              </div>

            </div>

          ))

        ) : (

          <p>No translations available.</p>

        )}

      </div>

    </div>

  );
  
}

 

export default TranslationForm;