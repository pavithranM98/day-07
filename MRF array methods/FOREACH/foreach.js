var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function () {
  var res = request.response;
  var result = JSON.parse(res);
  //console.log(result)
  result.forEach((Element) =>
    console.log(
      `country name: ${Element.name.common} | capital: ${Element.capital} | flag: ${Element.flags.png} |`
    )
  );
};
