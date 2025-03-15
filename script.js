function getSelectedFamilyDiseases() {
    const diseases = [];
    const checkboxes = document.querySelectorAll('input[name="familyDisease"]:checked');
    checkboxes.forEach((checkbox) => {
      diseases.push(checkbox.value);
    });
    return diseases;
  }
  const familyDiseasePoints = {
    cancer: 2,
    diabetes: 2,
    heart: 3
  };
  function calculateFamilyDiseaseRisk(diseasesArray) {
    let totalPoints = 0;
    diseasesArray.forEach((disease) => {
      if (familyDiseasePoints[disease] !== undefined) {
        totalPoints += familyDiseasePoints[disease];
      }
    });
    return totalPoints;
  }
  function calculateTotalRisk() {
    // Other calculations (age, BMI, blood pressure)
    const agePoints = calculateAgePoints();
    const bmiPoints = calculateBMIPoints();
    const bloodPressurePoints = calculateBloodPressurePoints();
  
    // Get the family disease selection
    const selectedFamilyDiseases = getSelectedFamilyDiseases();
    const familyDiseaseRisk = calculateFamilyDiseaseRisk(selectedFamilyDiseases);
  
    // Sum all the points
    const totalRiskPoints = agePoints + bmiPoints + bloodPressurePoints + familyDiseaseRisk;
  
    // Convert totalRiskPoints into a risk category
    const riskCategory = determineRiskCategory(totalRiskPoints);
  
    // Display the results
    displayRiskResults(totalRiskPoints, riskCategory);
  }
  