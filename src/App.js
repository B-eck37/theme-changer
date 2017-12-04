import React, { Component } from 'react';

// Components
import EditToggle from './components/EditToggle';
import ColorChanger from './components/ColorChanger';
import SizeChanger from './components/SizeChanger';
import FamilyChanger from './components/FamilyChanger';
import TextContainer from './components/TextContainer';

class App extends Component {
  constructor() {
   super();
   this.state = {
     fontColor: 'black',
     fontSize: 12,
     fontFamily: 'monospace',
     allowEdit: 'true',
   } 

   this.updateColor = this.updateColor.bind(this);
   this.updateSize = this.updateSize.bind(this);
   this.updateFamily = this.updateFamily.bine(this);
   this.updateEditStatus = this.updateEditStatus.bind(this);
  }

updateColor(val){
  this.setState({fontColor: val})
}// updateColor

updateSize(val){
 this.setState({fontSize: val}) 
}// updateSize

updateFamily(val){
  this.setState({fontFamily: val})
} // updateFamily

updateEditStatus(val){
 this.setState({allowEdit: val}) 
}// updateEditStatus

  render() {
    return (
      <div>
        <div className="headerBar">
          { /* Render EditToggle */ }
          { /* Render ColorChanger */ }
          { /* Render SizeChanger */ }
          { /* Render FamilyChanger */ }
        </div>
        <div className="textArea">
          { /* Render TextContainer */ }
        </div>
      </div>
    )
  }
}

export default App;
