import { EXCEPTION_MESSAGE } from '../constants/ExceptionMessage.js';
import { LOTTO_SETTING } from '../constants/Setting.js';

class InputValidator {
  static validateInputPrice(price) {
    if (isNaN(price)) {
      throw new Error(EXCEPTION_MESSAGE.priceFormat);
    }
    if (/^0\d+/.test(price)) {
      throw new Error(EXCEPTION_MESSAGE.priceStartsWithZero);
    }
    const priceInt = parseInt(price);
    if (priceInt === 0 || priceInt % LOTTO_SETTING.pricePerLotto !== 0) {
      throw new Error(EXCEPTION_MESSAGE.priceFormat);
    }
  }
}

export default InputValidator;