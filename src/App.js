import React from 'react';
import './styles.css'
import Header from './Components/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import InputForm from './Components/InputForm';
import Saved from './Saved';
import WordCon from './Context/WordCon';
import WordListCon from './Context/WordListCon';

function App() {
  return (
    <div className="container">
    <Router>
      <WordCon>
        <WordListCon>
          <Header />
          <Switch>
            <Route exact path='/' component={InputForm}/>
            <Route exact path='/saved' component={Saved}/>
          </Switch>
        </WordListCon>
      </WordCon>
    </Router>
    </div>
  );
}

export default App;


// const SAMPLE_DATA = [
//   {
//     definitions: [
//       {
//         definition: "a feeling of amazement and admiration, caused by something beautiful, remarkable, or unfamiliar.",
//         example: "he observed the intricacy of the ironwork with the wonder of a child",
//         type: "noun"
//       }, 
//       {
//         definition: "a person or thing regarded as very good, remarkable, or effective.",
//         example: "we all eat cakes from Gisellaâshe's a wonder",
//         type: "noun"
//       },
//     ],
//     word: "wonder"
//   },
//   {
//     definitions: [
//       {
//         definition: "regard in a specified way.",
//         example: "I look at tennis differently from some coaches",
//         type: "verb"
//       }, 
//       {
//         definition: "have the appearance or give the impression of being.",
//         example: "mum looked unhappy",
//         type: "verb"
//       },
//       {
//         definition: "rely on (someone) to do or provide something.",
//         example: "she will look to you for help",
//         type: "verb"
//       }, 
//       {
//         definition: "(of a building or room) have an outlook in a specified direction.",
//         example:"the room <b>looks out over</b> Mylor Harbour",
//         type: "verb"
//       },
//       {
//         definition: "an act of directing one's gaze in order to see someone or something.",
//         example:"let me get a closer look",
//         type: "noun"
//       }, 
//       {
//         definition: "the appearance of someone or something, especially as expressing a particular quality.",
//         example:"the bedraggled look of the village",
//         type: "noun"
//       },
//       {
//         definition: "used to call attention to what one is going to say.",
//         example: "âLook, this is ridiculous.â",
//         type: "exclamation"
//       }, 
//       {
//         definition: "direct one's gaze in a specified direction.",
//         example:"people were <b>looking at</b> him",
//         type: "verb"
//       },
//     ],
//     word: "look"
//   }
// ]