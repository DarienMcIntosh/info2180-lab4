document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function () {
       var xhr = new XMLHttpRequest();
       xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    alert("List of Superheroes:\n" + xhr.responseText);
                } else {
                    alert("Error fetching data");
                }
            }
        };
        xhr.open("GET", "superheroes.php", true);
        xhr.send();
    });
});