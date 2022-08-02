function showAllertMesage() {
  var basket = JSON.parse(localStorage.getItem("basket"));

  if (basket.length == 0) {
    document.querySelector("#alert").classList.remove("d-none");
    document.querySelector(".show-order").classList.add("d-none");
  } else {
    document.querySelector("#alert").classList.add("d-none");
    document.querySelector(".show-order").classList.remove("d-none");

    var list = "";

    basket.forEach((item) => {
      list += `
            <tr>
                <th scope="row">${item.id}</th>
                <td><img src="${item.img}"
                    alt=""></td>
                <td>${item.name}</td>
                 <td>${item.price} Azn</td>
                <td>${item.count}</td>
                <td>${item.count * item.price} Azn</td>
            </tr>        
                        
            `;
      console.log(parseInt(item.count));
      document.querySelector("#tbody").innerHTML = list;
    });
  }
}
showAllertMesage();



//---Umumi Alinan Mehsulun SAyini Ve Qiymetini Hesablamaq Ucun
function showTotalOrder() {
  let totalCount = 0;
  let totalPrice = 0;

  var basket = JSON.parse(localStorage.getItem("basket"));

  basket.forEach((item) => {
    totalCount += item.count;
    totalPrice += item.count * item.price;
  });
  document.querySelector("#count").innerHTML = totalCount;
  document.querySelector("#total-price").innerHTML = totalPrice;
}
showTotalOrder();
