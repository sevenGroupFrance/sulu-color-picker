import React from 'react';
import { RadioGroup, Radio } from 'sulu-admin-bundle/components/Radio';

class ColorPickerCustom extends React.PureComponent {
  constructor() {
    super();
    this.state = { value: '#FFFFFF' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({ value });
    this.props.onChange(value);
    this.props.onFinish();
  }

  componentDidMount() {
    const radiogroup = document.getElementsByClassName("color-picker-radiogroup");
    const radioArray = [];
    const colors = ["#F18C1C", "#3C3C3B", "#FFFFFF"];
    for (let i = 0; i < radiogroup.length; i++) {
      let label = radiogroup[i].children;
      radioArray.push(label);
      radiogroup[i].parentElement.parentElement.parentElement.classList.add("radio-container")
      for (let j = 0; j < radioArray[i].length; j++) {
        radioArray[i][j].children[0].style.backgroundColor = colors[j]
      }
    }
  }

  render() {
    const { value: value } = this.props;

    return (
      <RadioGroup value={value} onChange={this.handleChange} className="color-picker-radiogroup">
        <Radio value="#F18C1C"></Radio>
        <Radio value="#3C3C3B"></Radio>
        <Radio value="#FFFFFF"></Radio>
      </RadioGroup>
    )
  }
}

export default ColorPickerCustom;
