import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import AppContext from '../FormContext';
import SelectableBox from '../calendar/box';

function Availability() {
  const { data, updateData } = useContext(AppContext);
  const [inputText, setInputText] = useState('');

  const rows = 14;
  const columns = 7;
  const [selectedBoxes, setSelectedBoxes] = useState(
    Array.from({ length: rows }, () => Array(columns).fill(false))
  );

  const handleBoxClick = (row, col) => {
    const newSelectedBoxes = selectedBoxes.map((rowArr, rowIndex) => {
      if (rowIndex === row) {
        return rowArr.map((selected, colIndex) => {
          if (colIndex === col) {
            return !selected;
          }
          return selected;
        });
      }
      return rowArr;
    });
    setSelectedBoxes(newSelectedBoxes);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleButtonClick = () => {
    updateData({ ...data, availability: inputText });
  };

  return (
    <>
      <div>
        <p>Availability</p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          }}
        >
          {selectedBoxes.map((row, rowIndex) => {
            return row.map((selected, colIndex) => {
              return (
                <SelectableBox
                  key={`${rowIndex}-${colIndex}`}
                  selected={selected}
                  onClick={() => handleBoxClick(rowIndex, colIndex)}
                />
              );
            });
          })}
        </div>
        <input
          type="text"
          name="availability"
          value={inputText}
          onChange={handleInputChange}
        />
        <br />
        <button>
          <Link to='/interests'>Previous</Link>
        </button>
        <button onClick={handleButtonClick}>
          <Link to='/coursework'>Next</Link>
        </button>
      </div>
    </>
  );
}

export default Availability;
