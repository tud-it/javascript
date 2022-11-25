{/* <script> */}
  fetch('/~jitschin/weather.json')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++){
        let obj = data[i];
        var temp = new Date(parseInt(obj.timestamp) * 1000);
        var tableRow = document.createElement("tr");
        var tableCell = document.createElement("td");
        var table = document.getElementById('table');
        var date = temp.getDate() + "." + temp.getMonth() + "." + temp.getFullYear();
        var hour = temp.getHours(); //FIXME: is an Int and has to be a string to give the correct hour
        table.appendChild(tableRow);
        tableRow.appendChild(tableCell);
        tableCell.innerText = "Temperature: " + obj.temp + "°C" + ", " + "Date: " + date + ", " + hour + " o'clock";
      }
    });
{/* </script>
<table id="table"></table> */}
