var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
var request4 = new XMLHttpRequest();
request4.open("GET", "https://restcountries.com/v3.1/all", "true");
request4.send();
request4.onload = function () {
  var data4 = request4.response;
  var result4 = JSON.parse(data4);
  var output4 = result4.filter(
    (element) => element.currencies && element.currencies.USD
  );
  output4.forEach((element) => console.log(element.name.common));
};
