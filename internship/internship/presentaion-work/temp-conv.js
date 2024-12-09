document.getElementById("convertBtn").addEventListener("click", function () {
  const temp = parseFloat(document.getElementById("temperature").value);
  const type = document.getElementById("type").value;
  const resultField = document.getElementById("result");

  if (isNaN(temp)) {
    resultField.value = "Enter a valid number";
    return;
  }

  let result = 0;

  if (type === "fahrenheit") {
    // Fahrenheit to Celsius
    result = ((temp - 32) * 5) / 9;
    resultField.value = `${result.toFixed(2)} °C`;
  } else if (type === "celsius") {
    // Celsius to Fahrenheit
    result = (temp * 9) / 5 + 32;
    resultField.value = `${result.toFixed(2)} °F`;
  } else if (type === "kelvin") {
    // Celsius to Kelvin
    result = temp + 273.15;
    resultField.value = `${result.toFixed(2)} K`;
  }
});
