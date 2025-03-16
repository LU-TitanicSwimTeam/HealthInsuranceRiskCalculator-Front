
 /***************************************************
 * 1) Calculate Age Points
 ***************************************************/
function calculateAgePoints() {
    // Grab the user's age from an input field
    const ageInput = document.getElementById("age");
    const age = ageInput ? parseInt(ageInput.value, 10) : 0;

    // - If age < 30: 1 point
    // - If age is 30 to 49: 2 points
    // - If age >= 50: 3 points
    if (age < 30) {
      return 1;
    } else if (age < 50) {
      return 2;
    } else {
      return 3;
    }
  }
  
  /***************************************************
   * 2) Calculate BMI Points
   ***************************************************/
  function calculateBMIPoints() {
    // Grab weight and height
    const weightInput = document.getElementById("weight");
    const heightInput = document.getElementById("height");
    const weight = weightInput ? parseFloat(weightInput.value) : 0;
    const height = heightInput ? parseFloat(heightInput.value) : 0;
  
    // Prevent division by zero
    if (height <= 0) {
      return 0;
    }
  
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Example logic:
    // - Under 18.5: 1 point
    // - 18.5 to 24.9: 2 points
    // - 25.0 to 29.9: 3 points
    // - 30.0 or above: 4 points
    if (bmi < 18.5) {
      return 1;
    } else if (bmi < 25) {
      return 2;
    } else if (bmi < 30) {
      return 3;
    } else {
      return 4;
    }
  }
  
  /***************************************************
   * 3) Calculate Blood Pressure Points
   ***************************************************/
  function calculateBloodPressurePoints() {
    // Grab systolic blood pressure from an input
    const systolicInput = document.getElementById("systolic");
    const systolic = systolicInput ? parseInt(systolicInput.value, 10) : 0;

    // - Under 120: 1 point
    // - 120 to 129: 2 points
    // - 130 to 139: 3 points
    // - 140 or above: 4 points
    if (systolic < 120) {
      return 1;
    } else if (systolic < 130) {
      return 2;
    } else if (systolic < 140) {
      return 3;
    } else {
      return 4;
    }
  }
  
  /***************************************************
   * 4) Family Disease Logic
   ***************************************************/
  // A) Gather which diseases are checked
  function getSelectedFamilyDiseases() {
    const diseases = [];
    const checkboxes = document.querySelectorAll('input[name="familyDisease"]:checked');
    checkboxes.forEach((checkbox) => {
      diseases.push(checkbox.value);
    });
    return diseases;
  }
  
  // B) Define point values for each disease
  const familyDiseasePoints = {
    cancer: 2,
    diabetes: 2,
    heart: 3
  };
  
  // C) Calculate total points from family diseases
  function calculateFamilyDiseaseRisk(diseasesArray) {
    let totalPoints = 0;
    diseasesArray.forEach((disease) => {
      if (familyDiseasePoints[disease] !== undefined) {
        totalPoints += familyDiseasePoints[disease];
      }
    });
    return totalPoints;
  }
  
  /***************************************************
   * 5) Determine Risk Category
   ***************************************************/
  function determineRiskCategory(totalRiskPoints) {
    // Example logic:
    // - Under 5 points: Low Risk
    // - 5 to 9 points: Moderate Risk
    // - 10 or above: High Risk
    if (totalRiskPoints < 5) {
      return "Low Risk";
    } else if (totalRiskPoints < 10) {
      return "Moderate Risk";
    } else {
      return "High Risk";
    }
  }
  
  /***************************************************
   * 6) Display Results
   ***************************************************/
  function displayRiskResults(totalRiskPoints, riskCategory) {
    const resultsDiv = document.getElementById("results");
    if (!resultsDiv) {
      alert("No results element found!");
      return;
    }
    resultsDiv.innerHTML = `
      <p><strong>Total Risk Points:</strong> ${totalRiskPoints}</p>
      <p><strong>Risk Category:</strong> ${riskCategory}</p>
    `;
  }
  
  /***************************************************
   * 7) The Main Calculation Function
   ***************************************************/
  function calculateTotalRisk() {
    // Gather other risk factor points
    const agePoints = calculateAgePoints();
    const bmiPoints = calculateBMIPoints();
    const bloodPressurePoints = calculateBloodPressurePoints();
  
    // Gather family disease selection
    const selectedFamilyDiseases = getSelectedFamilyDiseases();
    const familyDiseaseRisk = calculateFamilyDiseaseRisk(selectedFamilyDiseases);
  
    // Sum all points
    const totalRiskPoints = agePoints + bmiPoints + bloodPressurePoints + familyDiseaseRisk;
  
    // Determine risk category
    const riskCategory = determineRiskCategory(totalRiskPoints);
  
    // Display the results
    displayRiskResults(totalRiskPoints, riskCategory);
  }
  