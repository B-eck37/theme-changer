import React, { Component } from 'react';

export default class ColorChanger extends Component {
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
    const {update} = this.props;
    return (
      <select className="dropDownContainer" onChange={event => this.state.update(event.target.value)} disabled={this.state.allowEdit === 'false'}>
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}