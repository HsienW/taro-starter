import {isNaN} from 'lodash';

function ascendingSort(data, condition) {
  return data.sort(function (a, b) {
    return a[condition] - b[condition];
  })
}

function descendingSort(data, condition) {
  return data.sort(function (a, b) {
    return b[condition] - a[condition];
  })
}

// 校驗身分證長度是 18
function certificateValidator(value) {
  // const reg = /^\d{6}(18|19|20)\d{2}(0\d|10|11|12)([0-2]\d|30|31)\d{3}(\d|X|x)$/;
  // return reg.test(value);
  const reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  return reg.test(value);
}

// 手機號脫敏(長度要為 18)
function phoneDesensitization(phone, char) {
  return phone.replace(/(\d{3})\d*(\d{4})/, `$1${new Array(5).join(char)}$2`)
}

// 校驗是否為大小寫英文+數字
function englishAndNumbersValidator(value) {
  const reg = /^[a-zA-Z0-9]{18}$/;
  // const reg = /(^\d{17}(\d|([a-zA-Z0-9]))$)/;
  return reg.test(value);
}

// 校驗是否為法人證件號(數字+大寫字母X)
function idCardValidator(value) {
  // const reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  const reg = /(^\d{17}(\d|X|x)$)/;
  return reg.test(value);
}

// 校驗是否為法人證件號(數字+大寫字母X)
function legalCodeValidator(value) {
  // const reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  const reg = /(^\d{17}(\d|X|x)$)/;
  return reg.test(value);
}

// 校驗手機號
function telValidator(value) {
  // const reg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
  const reg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
  return reg.test(value);
}

// 校驗是否是 Invalid Date
function isValidDate(date) {
  return date instanceof Date && !isNaN(date.getTime())
}

export {
  ascendingSort,
  descendingSort,
  certificateValidator,
  phoneDesensitization,
  englishAndNumbersValidator,
  idCardValidator,
  legalCodeValidator,
  telValidator,
  isValidDate
}
