// Main Madlib component
import { useState } from 'react';
import MadlibsText from './MadlibsText';

const Madlibs = () => {
  // State used to show/hide form
  const [hideForm, setHideForm] = useState(false);

  // State used to double bind the values of the form inputs
  const [nounOne, setNounOne] = useState('');
  const [nounTwo, setNounTwo] = useState('');
  const [adjective, setAdjective] = useState('');
  const [color, setColor] = useState('');

  // Submits the data, hides the form and pulls out the madlib text box
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setHideForm(true);
  };

  // Resets the states back to their default values
  const handleReset = () => {
    setNounOne('');
    setNounTwo('');
    setAdjective('');
    setColor('');
    setHideForm(false);
  };
  return (
    <div className="text-white flex flex-col gap-4">
      {/* and statement used to show/hide the form */}
      {!hideForm && (
        // Main form, has an onSubmit event
        <form className="flex flex-col gap-4 text-black" onSubmit={handleSubmit}>
          <input
            className=" placeholder:text-gray-600 px-5 w-56 rounded-sm h-8"
            type="text"
            placeholder="noun"
            value={nounOne}
            onChange={(e) => setNounOne(e.target.value)}
          />
          <input
            className=" placeholder:text-gray-600 px-5 w-56 rounded-sm h-8"
            type="text"
            placeholder="noun2"
            value={nounTwo}
            onChange={(e) => setNounTwo(e.target.value)}
          />
          <input
            className=" placeholder:text-gray-600 px-5 w-56 rounded-sm h-8"
            type="text"
            placeholder="adjective"
            value={adjective}
            onChange={(e) => setAdjective(e.target.value)}
          />
          <input
            className=" placeholder:text-gray-600 px-5 w-56 rounded-sm h-8"
            type="text"
            placeholder="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
          <button className="text-white bg-gray-600 h-8">Submit</button>
        </form>
      )}

      {hideForm && (
        <>
          {/* final MadlibsText component which takes in 4 strings */}
          <MadlibsText noun1={nounOne} noun2={nounTwo} adjective={adjective} color={color} />
          {/* Reset button, uses the handleReset function */}
          <button className="text-white bg-gray-600 h-8" onClick={handleReset}>
            Reset
          </button>
        </>
      )}
    </div>
  );
};
export default Madlibs;
