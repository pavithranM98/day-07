var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var res = request.response;
  var result = JSON.parse(res);
  console.log(result);
  var Population = result
    .filter((x) => x.population < 200000)
    .map((x) => x.name.common);

  console.log(Population);
};
