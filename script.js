
    document.addEventListener("DOMContentLoaded", function () {
        // Select all dropdown items
        const dropdownItemsFrom = document.querySelectorAll('.dropdown-item.from'); 
        const dropdownItemsTo = document.querySelectorAll('.dropdown-item.to'); 

        dropdownItemsFrom.forEach(item => {
            item.addEventListener('click', function () {
                // Get the selected country's name and airport
                const country = this.querySelector('h6').textContent.trim();
                const airport = this.querySelector('p').textContent.trim();

                // Update the input field with the country
                const inputField = document.querySelector('.form-item.dropdown input.form-control');
                inputField.value = country;

                // Update the airport paragraph
                const airportField = document.querySelector('.form-item.dropdown p');
                airportField.textContent = airport;
            });
        });

        dropdownItemsTo.forEach(item => {
            item.addEventListener('click', function () {
                // Get the selected country's name and airport
                const country = this.querySelector('h6').textContent.trim();
                const airport = this.querySelector('p').textContent.trim();

                // Update the input field with the country
                const inputField = document.querySelector('.country-to');
                inputField.textContent = country;

                // Update the airport paragraph
                const airportField = document.querySelector('.airport-to');
                airportField.textContent = airport;
            });
        });

        
    });

