document.addEventListener('DOMContentLoaded', function() {
    var locationChoice = document.getElementById('location-choice');
    var locationList = ['Commons Dining Hall', 'Food Hall @ Sadler']; // Example location list

    locationList.forEach(function(location) {
        var option = new Option(location, location);
        locationChoice.add(option);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var periodChoice = document.getElementById('period-choice');
    var periodList = ['Breakfast', 'Lunch', 'Dinner', 'All Day']; // Example period list

    periodList.forEach(function(period) {
        var option = new Option(period, period);
        if (period === 'Dinner') {
            option.style.color = 'black'; // Make "Dinner" black
        } else {
            option.style.color = '#cccccc'; // Make other options light gray
        }
        periodChoice.add(option);
    });
});

function highlightKeywordInText(text, keyword) {
    // Escape special characters in the keyword for use in a regular expression
    const escapedKeyword = keyword.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

    // Use a regular expression to globally and case-insensitively find the keyword
    const regex = new RegExp(escapedKeyword, 'gi');

    // Replace all occurrences of the keyword with a span element that highlights the keyword
    return text.replace(regex, match => `<span style="color: blue;">${match}</span>`);
}


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.search-form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Getting user inputs
        const date = document.getElementById('date-choice').value;
        const location = document.getElementById('location-choice').value;
        const period = document.getElementById('period-choice').value;
        const keyword = document.getElementById('keyword-input').value;
        console.log("'" + date + "', '" + location + "', '" + period + "', '" + keyword + "'");

        let inverse_location_dictionary = {
            "Commons Dining Hall": 78390,
            "Food Hall @ Sadler": 78391,
        };

        let inverse_period_dictionary = {
            "Breakfast": 5408,
            "Lunch": 5409,
            "Dinner": 5410,
            "All Day": 5411,
        };

        // Fetch data from the local JSON file
        fetch('../local_data/data.json')
            .then(response => response.json())
            .then(data => {
                console.log(data["location_data"]);
                // Assuming data is in the format data["d"]["s"]["p"]["k"]
                try {
                    const location_id = inverse_location_dictionary[location];
                    const period_id = inverse_period_dictionary[period];
                    console.log("location id:", location_id);
                    console.log("period id:", period_id);
                    console.log(`fetching data["location_data"][${location_id}]["date_data"][${date}][${period_id}]`);
                    const results = data["location_data"][location_id]["date_data"][date][period_id];
                    console.log("results:", results);
                    displayResults(results, keyword); // Function to display results in a table
                } catch (error) {
                    console.error("Data not found for the given criteria", error);
                    document.getElementById('search-results').innerHTML = "<p>Data not found for the given criteria.</p>";
                }
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    });

    function displayResults(results, keyword) {
        // Start building the table HTML
        let product_keywords = ["PeriodId", "StationId", "ProductId", "MarketingName", "ShortDescription", "IsOrganic", "IsVegan", "IsVegetarian", "ServingSize", "ServingUnit", "Calories", "CaloriesFromFat", "IngredientStatement"];
        let title_html = "";
        product_keywords.forEach(item => {
            title_html += `<th>${item}</th>`;
        });
        let tableHTML = `<table class="table"><thead><tr>` + title_html + `</tr></thead><tbody>`;

        // Populate the table with results
        let body_html = "";
        results.forEach(item => {
            if (keyword.length === 0 || (`${item["MarketingName"]}/${item["ShortDescription"]}/${item["IngredientStatement"]}`).toLowerCase().includes(keyword.toLowerCase())) {
                let content_html = "";
                product_keywords.forEach(one_keyword => {
                    let content;
                    if (keyword.length === 0) {
                        content = item[one_keyword];
                    } else {
                        content = highlightKeywordInText(String(item[one_keyword]), String(keyword));
                    }
                    content_html += `<td>${content}</td>`;
                });
                body_html += `<tr>` + content_html + `</tr>`;
            }
        });
        tableHTML += body_html;
        tableHTML += `</tbody></table>`;
        console.log(tableHTML);

        if (body_html.length > 0) {
            document.getElementById('search-results').innerHTML = tableHTML;
        } else {
            document.getElementById('search-results').innerHTML = "<p>Data not found for the given criteria.</p>";
        }

    }
});

function getOperatingSystem() {
    var platform = navigator.platform.toLowerCase();
    var userAgent = navigator.userAgent.toLowerCase();

    if (platform.includes('mac') || userAgent.includes('mac os')) {
        return 'macOS';
    } else if (platform.includes('linux')) {
        return 'Linux';
    } else {
        return 'Other';
    }
}

console.log(getOperatingSystem());