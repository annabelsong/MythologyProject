import React, { useState } from 'react';

function TaleForm() {
  const [taleName, setTaleName] = useState('');
  const [moralLesson, setMoralLesson] = useState('inconclusive');
  const [culture, setCulture] = useState('');

  const handleTaleNameChange = (event) => {
    setTaleName(event.target.value);
  };

  const handleMoralLessonChange = (event) => {
    setMoralLesson(event.target.value);
  };

  const handleCultureChange = (event) => {
    setCulture(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Tale Name:', taleName);
    console.log('Moral Lesson:', moralLesson);
    console.log('Culture:', culture);
    // Reset the form after submission if needed
    setTaleName('');
    setMoralLesson('inconclusive');
    setCulture('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-start">
      <div className='flex'>
        <div className="mr-20">
          <label htmlFor="taleName" className="text-left block">Tale Name:</label>
          <br />
          <label htmlFor="moralLesson" className="text-left block">Moral Lesson:</label>
          <br />
          <label htmlFor="culture" className="text-left block">Culture:</label>
        </div>
        <div>
          <input
            type="text"
            id="taleName"
            value={taleName}
            onChange={handleTaleNameChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="moralLesson"
            value={moralLesson}
            onChange={handleMoralLessonChange}
            className="mb-5 border-gray-400 border-2"
          />
          <br />
          <input
            type="text"
            id="culture"
            value={culture}
            onChange={handleCultureChange}
            className="mb-5 border-gray-400 border-2"
          />
        </div>
      </div>
      <button type="submit" className="mr-4 bg-white text-blue-500 rounded-full border-2 border-black px-4 py-2 font-bold">Submit</button>
    </form>
  );
}

export default TaleForm;
