import React, { Component } from 'react';

export default class SizeChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(nextProps){
    //Possible if statement needed if multiple props coming in and you only want to focus on a specific prop. 
    this.setState({
      allowEdit: nextProps.allowEdit
    })
  }

  render() {
    return (
      <select className="dropDownContainer" onChange={(event) => this.props.update( parseInt(event.target.value))} disabled={this.state.allowEdit === 'false'}>
        <option value="12"> 12 </option>
        <option value="13"> 13 </option>
        <option value="14"> 14 </option>
      </select>
    )
  }
}