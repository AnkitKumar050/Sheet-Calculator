
import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

function App() {
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [units, setUnits] = useState(1);
  const [includeLabor, setIncludeLabor] = useState(false);

  const BOARD_AREA = 244 * 120;
  const BOARD_COST = 350;
  const LABOR_COST = 120;
  const TRANSPORT_COST = 200;

  const totalArea = length * height * units;
  const sheetsRequired = Math.ceil(totalArea / BOARD_AREA);
  const boardsCost = sheetsRequired * BOARD_COST;
  const laborCost = includeLabor ? LABOR_COST : 0;
  const totalCost = boardsCost + laborCost + TRANSPORT_COST;

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(14);
    doc.text('Sheet Calculation Summary', 10, 10);
    doc.text(`Length: ${length} cm`, 10, 20);
    doc.text(`Height: ${height} cm`, 10, 30);
    doc.text(`Units: ${units}`, 10, 40);
    doc.text(`Sheets Required: ${sheetsRequired}`, 10, 50);
    doc.text(`Boards Cost: ${boardsCost} AED`, 10, 60);
    doc.text(`Labor Cost: ${laborCost} AED`, 10, 70);
    doc.text(`Transport Cost: ${TRANSPORT_COST} AED`, 10, 80);
    doc.text(`Total Cost: ${totalCost} AED`, 10, 90);
    doc.save('calculation-summary.pdf');
  };

  return (
    <div className="container">
      <h1>Sheet Calculator</h1>

      <div className="section">
        <h2>Enter Dimensions</h2>
        <label>Length (cm):
          <input type="number" value={length} onChange={e => setLength(e.target.value)} />
        </label>
        <label>Height (cm):
          <input type="number" value={height} onChange={e => setHeight(e.target.value)} />
        </label>
        <label>No. of Units:
          <input type="number" value={units} onChange={e => setUnits(e.target.value)} />
        </label>
      </div>

      <div className="section">
        <h2>Options</h2>
        <label>
          <input type="checkbox" checked={includeLabor} onChange={() => setIncludeLabor(!includeLabor)} />
          Include Labor Cost (120 AED)
        </label>
      </div>

      <div className="section">
        <h2>Results</h2>
        <p><strong>Sheets Required:</strong> {sheetsRequired}</p>
        <p><strong>Boards Cost:</strong> {boardsCost} AED</p>
        <p><strong>Labor Cost:</strong> {laborCost} AED</p>
        <p><strong>Transport Cost:</strong> {TRANSPORT_COST} AED</p>
        <p><strong>Total Cost:</strong> {totalCost} AED</p>
      </div>

      <div className="actions">
        <button onClick={exportPDF}>Download PDF</button>
      </div>
    </div>
  );
}

export default App;
