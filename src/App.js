import React, { Component } from 'react';
import './App.css';
import ValidComp from './ValidComp';
import CharComp from './CharComp';
// none
class App extends Component {
  state = {
    letterDisplay: ''
  }

  getLengthHandler = (event) => {
      this.setState({letterDisplay: event.target.value});
    }

  deleteHandler = (index) => {
      const letters = this.state.letterDisplay.split('');
      letters.splice(index, 1);
      const updated = letters.join('');
      this.setState({letterDisplay: updated});
}
  
  // switchNameHandler = (event, id) => {
  //     const personIndex = this.state.persons.findIndex(p => {
  //       return p.id === id;
  //     });
  //     const person = {
  //       // copying one js person object at this index
  //       ...this.state.persons[personIndex]
  //     };
  //     person.name = event.target.value;
  //     // copy the entire persons array of objects
  //     const persons = [...this.state.persons]
  //     //set the persons array at this index to the new person object
  //     persons[personIndex] = person;
  //     // add this person into the persons array
  //     this.setState({persons: person});
  //   }

//   togglePersonHandler = (event) => {
//     const doesShow = this.state.showPerson;
//     this.setState({showPerson: !doesShow});
//   }

  render() {
    let charList = this.state.letterDisplay.split('').map((char, index) =>{
      return <CharComp delete={() => this.deleteHandler(index)} character={char} key={index}/>
    });
    <div>
  </div> 

    return (
      <div className="App">
        <h1>I am a magnificent App</h1>
        <p>It's definitely working</p>
        <input type="text" onChange={this.getLengthHandler} value={this.state.letterDisplay} />
        <p> Length: {this.state.letterDisplay.length}</p>
        <ValidComp textLength={this.state.letterDisplay.length} onChange={this.getLengthHandler}/>
       {charList}
      </div>
    );
  }
}

export default App;
