import React from 'react';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card suit='H' number='K' />
      <Card suit='S' number='A' />
      <Card suit='D' number='9' />
      <Card suit='RED_BACK' number='' />
    </div>
  );
}

export default App;
