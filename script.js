document.addEventListener("DOMContentLoaded", function () {
    const heightFeetSelect = document.getElementById("heightFeet");
    const heightInchesSelect = document.getElementById("heightInches");

    const API_BASE_URL = "https://healthinsuranceriskcalc-back-cgcsbha9dsaydnhp.centralus-01.azurewebsites.net/api/calculate-risk";

    for (let i = 2; i <= 7; i++) {  
        let option = document.createElement("option");
        option.value = i;
        option.textContent = `${i} ft`;
        heightFeetSelect.appendChild(option);
    }

    for (let i = 0; i <= 11; i++) {
        let option = document.createElement("option");
        option.value = i;
        option.textContent = `${i} in`;
        heightInchesSelect.appendChild(option);
    }

    document.getElementById("riskForm").addEventListener("submit", function (event) {
        event.preventDefault();

        const formData = {
            age: document.getElementById("age").value,
            weight: document.getElementById("weight").value,
            heightFeet: document.getElementById("heightFeet").value,
            heightInches: document.getElementById("heightInches").value,
            bloodPressure: document.getElementById("bloodPressure").value,
            familyDiseases: Array.from(document.querySelectorAll('input[name="familyDisease"]:checked'))
                                .map(disease => disease.value)
        };

        if (!formData.age || !formData.weight || !formData.heightFeet || !formData.heightInches || !formData.bloodPressure) {
            document.getElementById("results").innerHTML = `<p class="error">Please fill out all fields.</p>`;
            return;
        }

        fetch(API_BASE_URL, {  
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.error) {
                document.getElementById("results").innerHTML = `<p class="error">${data.error}</p>`;
            } else {
                document.getElementById("results").innerHTML = `
                    <p><strong>Total Risk Points:</strong> ${data.totalRiskPoints}</p>
                    <p><strong>Risk Category:</strong> ${data.riskCategory}</p>
                `;
            }
        })
        .catch(error => {
            console.error("Error:", error);
            document.getElementById("results").innerHTML = `<p class="error">An error occurred. Please try again later.</p>`;
        });
    });
});
