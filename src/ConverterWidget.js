import React from 'react';
import {
  Button,
  Select,
  InputNumber,
  Card,
} from 'antd';
import 'antd/dist/antd.css';

const { Option } = Select;  //спросить почему так сделано

// function convert(amount, rate) {}

class NumInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  onChange = (value) => {
    this.setState({ inputValue: value }, () => this.onAmountConvert());
  }

  onAmountConvert() {
    this.props.amountConvert(this.state.inputValue);
  }

  render() {
    return (
      <InputNumber
        min={1}
        value={this.state.inputValue}
        onChange={this.onChange}
        />
    );
  }
}

class SelectCurrency extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedCurrency: '' };
  }

  onCurrencySelect() {
    this.props.currencySelect(this.state.selectedCurrency);
  }

  onChange = (value) => {
    this.setState({ selectedCurrency: value }, () => this.onCurrencySelect());
  }

  render() {
    return (
      <Select
        defaultValue="Please,choose currency to convert to"

        onChange={this.onChange}
      >
        {Object.keys(this.props.currencies).map((curr) => <Option key={curr} value={curr}>{curr}</Option>)}
      </Select>

    );
  }
}

class ConverterWidget extends React.Component {
  constructor(props) {
    super(props);
    this.onAmountToConvert = this.onAmountToConvert.bind(this);
    this.state = {
      currencies: {},
      selectedCurrency: '',
      amountToConvert: '',
      converted: '',
      result: '',
    };
  }

  componentDidMount() {
    fetch('https://api.exchangeratesapi.io/latest?base=USD')
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          currencies: data.rates,
        });
      }).catch((error) => {
        console.log(error);
      });
  }

  onCurrencySelect(value) {
    this.setState({
      selectedCurrency: value,
    });
  }

  onAmountToConvert(value) {
    this.setState({
      amountToConvert: value,
    });
  }

  // onClick() {
  //   this.handleValidation
  //   this.convert()
  // }

  // handleValidation = () => {
  //   const {
  //     selectedCurrency,
  //     amountToConvert,
  //     formValid,
  //     error
  //   } = this.state;
  //
  //   if(typeof(amountConvert) === 'string'){
  //     this.setState({
  //       error: "Please fill amount with numeric data",
  //       formValid: false
  //     })
  //
  //   }
  //
  //   if(selectedCurrency === '' || selectedCurrency === null){
  //     this.setState({
  //       error: "Please select currency",
  //       formValid: false
  //     })
  //   }
  // }

  convert = () => {
    const selected = this.state.selectedCurrency;
    const coeff = this.state.currencies[selected];
    const amount = this.state.amountToConvert;
    const converted = amount * coeff;
    this.setState({
      converted,
    }, () => this.result());
  }

  result() {
    const res = `Amount of ${this.state.selectedCurrency} in ${this.state.amountToConvert} USD is ${this.state.converted}`;
    this.setState({ result: res });
  }

  render() {
    return (
      <>
        <Card title="Simple converter">
          <NumInput
            amountConvert={this.onAmountToConvert} //узнать можно ли заменить
          />
          <SelectCurrency
            currencies={this.state.currencies}
            currencySelect={this.onCurrencySelect.bind(this)}
          />
          <Button
            onClick={this.convert}
            type="primary" // уточнить за стайлинг ЖСХ
          >
            Convert
          </Button>
          <p>{this.state.result}</p>
        </Card>
      </>
    )
  }
}

export default ConverterWidget;
