function myFunction() {
  var num = document.getElementById("inputnum").value;
  document.getElementById("demo").innerHTML = primo(num);
  
}
function primo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}

exports.funcionpr = function (numero){
    return primo(numero);
};