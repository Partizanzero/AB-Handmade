document.getElementById("btnProduct").onclick = function () {
  calcCost();
};

function calcCost() {
  var sP = document.getElementById("selectProduct").value; //список продуктов
  var qP = document.getElementById("quantityProduct").value; //кол-во товара
  var total = sP * qP; //итого

  //Делаем блок с итоговым рассчетом видимым
  document.getElementById("infoProduct").style.display = "block";

  //Выводим итоговое значение в блок
  document.getElementById("priceProduct").innerHTML = total;

  //Если пользователь ничего не ввел
  if (sP == 0 || qP == 0) {
    document.getElementById("infoProduct").style.display = "none";
    alert("Укажите товар и его количество");
    return;
  }
}
