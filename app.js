document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("searchButton").addEventListener("click", function () {
        var searchTerm = document.getElementById("searchInput").value.trim();

        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    try {
                        var response = JSON.parse(xhr.responseText);
                        displayResult(response);
                    } catch (error) {
                        console.error("Error parsing JSON:", error);
                        displayResult({ message: "Error parsing JSON" });
                    }
                } else {
                    console.error("Error fetching data. Status: " + xhr.status);
                    displayResult({ message: "Error fetching data" });
                }
            }
        };

        // Sanitize the search term before sending it to the server
        var sanitizedSearchTerm = encodeURIComponent(searchTerm);

        xhr.open("GET", "http://localhost/info2180-lab4/superheroes.php?query=" + sanitizedSearchTerm, true);
        xhr.send();
    });
});

function displayResult(response) {
    var resultContainer = document.getElementById("result");

    if (response.message === "Superhero not found") {
        resultContainer.innerHTML = "<p>Superhero not found</p>";
    } else {
        // Display the result in the resultContainer
        resultContainer.innerHTML = `
            <h3>${response.alias}</h3>
            <h4>${response.name}</h4>
            <p>${response.biography}</p>
        `;
    }
}