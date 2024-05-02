var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var res = request.response;
  var result = JSON.parse(res);
  //console.log(result)
  var AsianCountries = result
    .filter((ele) => ele.region === "Asia")
    .map((ele) => ele.name.common);
  console.log(AsianCountries);
};
