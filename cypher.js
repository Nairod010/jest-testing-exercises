function cypher(str, shift){
  return str.split("")
    .map(char => {
      if (char >= "A" && char <= "Z"){
        return String.fromCharCode(((char.charCodeAt(0) - 65 + shift) % 26) + 65);
      }
      else if (char >= "a" && char <= "z"){
        return String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97);
      }
      else {
        return char
      }
    })
    .join("");
}

module.exports = cypher
