document.querySelector("#imcForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var weight = parseFloat(document.querySelector("#weight").value);
  var size = parseFloat(document.querySelector("#size").value);

  var imc = weight / ((size/100) * (size/100)) ;

  var resultDiv = document.querySelector("#result");
  resultDiv.innerHTML = "Votre IMC est : " + imc.toFixed(2);

  document.querySelector("#weight").value = "";
  document.querySelector("#size").value = "";
});
