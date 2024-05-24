# Infusion App

Infusion App is a Infusion App is a powerful and user-friendly application designed to assist healthcare professionals. Besides, this app could be dockerized, has a dockerfile included.
Employes an accurate calculation and administration of intravenous (IV) infusions. 
This app simplifies the process of determining the correct infusion rates for various medications and fluids, 
ensuring patient safety and effective treatment. This project aims to The primary purpose of the Infusion App is to streamline and enhance the process of intravenous (IV), 
medication administration, ultimately aiming to improve patient care and treatment outcomes. By providing accurate and efficient infusion rate calculations, 
the app empowers healthcare professionals to deliver medications and fluids more effectively, ensuring timely and appropriate treatment for patients.

## Features
- Calculate infusion doses for a variety of drugs for Adults and Pediatrics as well.
- Separate drug lists for adult and pediatric patients.
- Option to add custom drugs, add other functionality, add other features as well to the app if that is necessary.
- (UI)Design, User-friendly interface for easy navigation.

## Installation
To run the Infusion App locally, follow these steps:
1. Clone the repository to your local machine.
2. Install dependencies using npm or yarn.
3. Run the app using the provided npm scripts.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed [Node.js](https://nodejs.org/) and npm.
- You have installed [Docker](https://www.docker.com/).
- You have a [GitHub](https://github.com/) account.


## Usage
1. Ensure that Python is installed and the ionic framework is ready for it you could check the main website of the framework: `https://ionicframework.com/docs/intro/cli`.
2. Ensure as well that you are in the main page of the project:
 ```bash
 cd infusionapp
 ```
3. To execute the project, run:
 ```bash
 ionic serve
 ``` 

## Installation

1. Clone the repository

git clone https://github.com/yourusername/infusion-app.git
Navigate to the project directory

cd infusion-app
Install the dependencies
sh
Copy code
npm install

## Usage
1. Ensure that Python is installed and the ionic framework is ready for it you could check the main website of the framework:
 ```bash
https://ionicframework.com/docs/intro/cli
 ```
4. Ensure as well that you are in the main page of the project:
 ```bash
 cd infusionapp
 ```
3. To execute the project, run:
 ```bash
 ionic serve
 ```
4.- Open your browser and navigate to:
 ```bash
http://localhost:3000.
 ```
## Dockerization

### To run the application using Docker:

Build the Docker image:
 ```bash
docker build -t infusionappdocker .
 ```
Run the Docker container:
 ```bash
docker run -p 3000:3000 infusionappdocker
 ```

## Contributing

### To contribute to Infusion App, follow these steps:

Fork this repository.
Create a branch: git checkout -b feature/your-feature.
Make your changes and commit them: git commit -m 'Add some feature'.
Push to the original branch: git push origin feature/your-feature.
Create the pull request.
Alternatively see the GitHub documentation on creating a pull request.

## Contributing
Contributions are welcome! To contribute to the Infusion App, please follow these guidelines:
1. Fork the repository and create a new branch.
2. Make your changes and ensure they adhere to the project's coding style and guidelines.
3. Submit a pull request with a detailed description of your changes.
