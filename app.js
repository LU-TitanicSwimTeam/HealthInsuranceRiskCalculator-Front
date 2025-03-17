const apiURL = "https://healthinsuranceriskcalc-back-cgcsbha9dsaydnhp.centralus-01.azurewebsites.net/api/calculate-risk";

document.addEventListener("DOMContentLoaded", function() {
    const heightFeetSelect = document.getElementById("heightFeet");
    const heightInchesSelect = document.getElementById("heightInches");

    // Populate height feet dropdown 
    for (let i = 2; i <= 8; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        heightFeetSelect.appendChild(option);
    }

    // Populate height inches dropdown
    for (let i = 0; i <= 11; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        heightInchesSelect.appendChild(option);
    }

    document.getElementById("riskForm").addEventListener("submit", async function(event) {
        event.preventDefault();

        const heightFeet = heightFeetSelect.value;
        const heightInches = heightInchesSelect.value;
        const weight = document.getElementById("weight").value;
        const errorMessage = document.getElementById("error-message");

        // Validation
        if (!heightFeet || !heightInches || !weight) {
            errorMessage.textContent = "Please fill out all fields.";
            return;
        }

        if (weight < 50 || weight > 800) {
            errorMessage.textContent = "Weight must be between 50 and 800 lbs.";
            return;
        }

        errorMessage.textContent = "";  // error message if needed

        // Send data to server (for the backend peeps)
        const formData = {
            heightFeet: heightFeet,
            heightInches: heightInches,
            weight: weight
        };

        try {
            // Send request to backend
            const response = await fetch(apiURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (response.ok) {
                alert(`Risk Score: ${result.riskScore}`);
            } else {
                throw new Error(result.message || "Something went wrong");
            }
        } catch (error) {
            console.error("Error:", error);
            errorMessage.textContent = "Failed to get risk score. Please try again later.";
        }
        
        alert("Form submitted! (Data will be processed by the server)");
    });
});
