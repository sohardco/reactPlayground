import React from 'react';
import {Button, Select, Input} from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select; //спросить почему так сделано

// function convert(amount, rate) {}

class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {inputValue: ''}
  }

  onChange = (e) => {
    this.setState({inputValue: e.target.value})
  }

  render() {
    return (
      <Input min={1} value={this.state.inputValue} onChange={this.onChange} />
    )
  }
}

class ConverterWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
        currencies: [],
    }
  }


  handleClick() {

  }

  componentDidMount() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
    .then((response) => {
      return response.json();
    })
    .then(data => {
      const currencyCodes = Object.keys(data.rates).map(cur => {
        return {value: cur, display: cur}
      });
      this.setState({
        currencies: currencyCodes
      });
    }).catch(error => {
      console.log(error);
    });
  }

  render() {

    return (
      <>
        <NumInput />
        <Select
          defaultValue="Please,choose currency to convert to"
        >
          {this.state.currencies.map((curr) => <Option key={curr.value} value={curr.value}>{curr.display}</Option>)}
        </Select>
        <Button type="primary" // уточнить за стайлинг ЖСХ
          >Convert</Button>
      </>
    )
  }
}

export default ConverterWidget;
