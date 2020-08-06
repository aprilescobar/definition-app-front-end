import React from 'react';

function App() {
  const Owlbot = require('owlbot-js');
  const token = process.env.REACT_APP_OWLBOT_API_TOKEN
  const client = Owlbot(token)

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
