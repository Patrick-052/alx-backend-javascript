/* Implementing a class that contains a static method */

import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // If amount is not a number, throw an error
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = amount;

    // If currency is not an instance of Currency, throw an error
    if (!(currency instanceof Currency)) {
      throw TypeError('Currency must be an instance of Currency');
    }
    this._currency = currency;
  }

  // Getter and setter for attribute amount
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // Getter and setter for attribute currency
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  // Method that returns the attributes in a specific format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Method that returns the price formatted according to the locale passed
  static convertPrice(amount, conversionRate) {
    // If amount is not a number, throw an error
    if (typeof amount !== 'number') {
      throw TypeError('Amount must be a number');
    }

    // If conversionRate is not a number, throw an error
    if (typeof conversionRate !== 'number') {
      throw TypeError('Conversion rate must be a number');
    }

    return amount * conversionRate;
  }
}
