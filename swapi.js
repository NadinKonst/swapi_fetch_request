function fetchData() {
  const id = document.getElementById("id").value;
  const type = document.getElementById("type").value;
  const finallyResult = document.getElementById("finallyResult");
  const url = `https://swapi.py4e.com/api/${type}/${id}`;

  document.getElementById("result").textContent = "Запрос на сервер...";
  document.getElementById("error").textContent = "";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `Запрошенные данные не существуют, сделайте другой запрос. Ошибка: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      document.getElementById("result").textContent = JSON.stringify({
        name: data.name,
        title: data.title,
        model: data.model,
      })
        .replace(/(\{|\})/g, " ")
        .replace(/,/g, " ");
    })
    .catch((error) => {
      document.getElementById("error").textContent = error.message;
      document.getElementById("result").textContent = "";
    })
    .finally(() => {
      finallyResult.textContent = "Ответ обязательно найдется!";
    });
}
