
import React, { useState } from 'react';

function App() {
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [units, setUnits] = useState(1);

  const BOARD_AREA = 244 * 120;
  const BOARD_COST = 350;

  const totalArea = length * height * units;
  const sheetsRequired = Math.ceil(totalArea / BOARD_AREA);
  const totalCost = sheetsRequired * BOARD_COST;

  return (
    <div style={{ padding: 20 }}>
      <h1>Sheet Calculator</h1>
      <div>
        <label>Length (cm): </label>
        <input type="number" value={length} onChange={e => setLength(e.target.value)} />
      </div>
      <div>
        <label>Height (cm): </label>
        <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
      </div>
      <div>
        <label>No. of Units: </label>
        <input type="number" value={units} onChange={e => setUnits(e.target.value)} />
      </div>
      <div style={{ marginTop: 20 }}>
        <p><strong>Sheets Required:</strong> {sheetsRequired}</p>
        <p><strong>Total Cost (AED):</strong> {totalCost}</p>
      </div>
    </div>
  );
}

export default App;
