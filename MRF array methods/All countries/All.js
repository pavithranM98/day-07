var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var res = request.response;
  var result = JSON.parse(res);
  //console.log(result);
  var TotalPopulation = result.reduce(
    (accum, currentvalue) => accum + currentvalue.population,
    0
  );
  console.log(TotalPopulation);
};
