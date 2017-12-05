import React, { Component } from 'react';

export default class FamilyChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      allowEdit: nextProps.allowEdit
    })
  }

  render() {
    return (
      <select className="dropDownContainer" onChange={event => this.props.update(event.target.value)} disabled={this.state.allowEdit === 'false'}>
        <option value="monospace"> Monospace </option>
        <option value="arial"> Arial </option>
        <option value="courier"> Courier </option>
      </select>
    )
  }
}