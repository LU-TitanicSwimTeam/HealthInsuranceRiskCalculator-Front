# Health Insurance Risk Calculator

Rudra Patel, Ethan Myers, Ben Eiler, Kolade Idris, Michael Poole

rudrappatel@lewisu.edu, benjaminseiler@lewisu.edu, koladeidris@lewisu.edu

- A Web application that will calculate the health risk of a new insurance company customer

# Key Features:

### Frontend (HTML, CSS, JavaScript)

- **User Input Form**: Allows users to enter personal health details for risk assessment.
- **Real-Time Validation**: Ensures all required fields are filled out correctly before submission.
- **Dynamic Risk Display**: Shows calculated risk points and risk category instantly after submitting data.
- **Modern UI Design**: Clean and intuitive interface for a good user experience.
- **Secure API Requests**: Communicates securely with the backend to fetch risk assessment results.

# Getting Started

The development of this project followed these steps:

- **Setting Up the Backend**: Started by creating a Node.js server with Express and defined an API endpoint to calculate health risk based on user input. CORS was configured to allow requests from the frontend.

- **Risk Calculation Logic**: Implemented a function that takes age, weight, height, blood pressure, and family history as input and assigns a risk score based on predefined criteria.

- **Designing the Frontend**: Built an interactive user form using HTML, CSS, and JavaScript, allowing users to enter their health details and submit the form to the backend.

- **Connecting Frontend and Backend**: Integrated the frontend with the backend API using fetch requests for more smooth data transfer and result display.

- **Deployment on Azure**: Hosted the backend as an Azure Web App and the frontend as an Azure Static Web App, ensuring accessibility and scalability.
