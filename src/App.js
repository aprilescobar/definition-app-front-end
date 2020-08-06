import React from 'react';

function App() {
  const Owlbot = require('owlbot-js');
  const client = Owlbot('7ab0c1cee24e74180a1a063d4c7960b27ade6f5d')

  const lookUp = 'wonder'

  const renderDefinition = () => {
    client.define(lookUp).then(function(result){
      console.log(result)
    })
  }

  return (
    <div>
      <h1>Hello</h1>
      {renderDefinition()}
    </div>
  );
}

export default App;
