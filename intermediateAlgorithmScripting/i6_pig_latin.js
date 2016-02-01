function translate(str) {
  if (str[0] === 'a' || str[0] === 'e' || str[0] === 'i' || str[0] === 'o' || str[0] === 'u')
  {
    str += 'way';
  } else {
    str = str.substr(1, str.length-1) + str[0] + 'ay';
  }
  return str;
}

translate("consonant"); 
translate("california"); // "aliforniacay"
translate("paragraphs"); // "aragraphspay"

function translate(str) {
  var arr = str.split(" ");
  for (var i=0, i <)
}