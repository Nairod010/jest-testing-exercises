function capitalize(str){
  return String(str).charAt(0).match(/[a-z]/i) ? String(str).charAt(0).toUpperCase() + String(str).slice(1) : "first character is not a letter"
}

module.exports = capitalize
