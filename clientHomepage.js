document.addEventListener("DOMContentLoaded", function () {
    var category = document.getElementById("category");
    var filter = document.getElementById("filter");
    var table = document.querySelector("table");
    var rows = table.querySelectorAll("tbody tr");
  
    function filterTable() {
      var value = category.value.toLowerCase();
      for (var i = 0; i < rows.length; i++) {
        var specialty = rows[i].querySelector(".specialty").textContent.toLowerCase();
        if (specialty.includes(value) || value === "all") {
          rows[i].style.display = "";
        } else {
          rows[i].style.display = "none";
        }
      }
    }
  
    filter.addEventListener("click", filterTable);
  });