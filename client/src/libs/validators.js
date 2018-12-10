export function required(rule, value, callback) {
  if (value == '') {
    callback(new Error('Заполните обязательное поле'))
  } else {
    callback()
  }
}
