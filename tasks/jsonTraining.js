  fetch('/~jitschin/weather.json')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++){
        let obj = data[i];
        var tableRow = document.createElement("tr");
        var tableCell = document.createElement("td");
        var table = document.getElementById('table');
        table.appendChild(tableRow);
        tableRow.appendChild(tableCell);
        tableCell.innerText = "Temperature: " + obj.temp + "°C";
      }
      var datum = data[i];

            var date = new Date(parseInt(datum.timestamp) * 1000);
            var dateFormatted = date.toLocaleString();

    });
