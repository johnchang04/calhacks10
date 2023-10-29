import { Link } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import AppContext from '../FormContext';
import SelectableBox from '../calendar/box';

function Availability() {
  const { data, updateData } = useContext(AppContext);
  const [inputText, setInputText] = useState('');

  const rows = 24;
  const columns = 7;
  const times = Array.from({ length: rows }, (_, index) => {
    let hour = Math.floor(index / 2); // starts at 0:00
    const minute = index % 2 === 0 ? '00' : '30';
    const ampm = hour >= 12 ? 'PM' : 'AM';
    
    hour = hour % 12;
    hour = hour ? hour : 12; // the hour '0' should be '12'
  
    return `${hour}:${minute} ${ampm}`;
  });

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
      <p style={{ marginTop: '20px' }}></p>

        <p>Availability</p>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              marginRight: '10px',
            }}
          >
            {times.map((time) => (
              <div
                key={time}
                style={{ height: '30px', display: 'flex', alignItems: 'center' }}
              >
                {time}
              </div>
            ))}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
              gridTemplateRows: `repeat(${rows}, 1fr)`,
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
        </div>
        
        <input
          type="text"
          name="availability"
          value={inputText}
          onChange={handleInputChange}
        />
        <br />
        <button>
          <Link to="/interests">Previous</Link>
        </button>
        <button onClick={handleButtonClick}>
          <Link to="/coursework">Next</Link>
        </button>
      </div>
    </>
  );
}

export default Availability;
