# FamilyCampApp

Family Camp 2025 Registration - Angular Project

Overview
This Angular application serves as the registration platform for the Family Camp 2025, providing users with essential information, event details, and registration options. The project includes multiple pages with data fetching from external APIs, client-side navigation, and a reactive form for registration.

Features
1. Set Up the Angular Project
Project Initialization: A new Angular 18 project was initialized using Angular CLI.

Routing Configuration: Angular Router was set up to enable navigation between multiple pages, including the Home, API Data, and Form pages.

2. Client-Side Navigation
Navigation Bar: A responsive navigation bar was created to navigate between the Home, API Data, and Form pages.

Routing: Utilized Angular's Router to handle client-side navigation for seamless page transitions.

3. Pages Implemented
Home Page: A welcoming page with event details, registration steps, and other important information related to Family Camp 2025, scheduled to take place from April 11-12, 2025 at Humber IGS Campus.

Content: The page includes:

A brief introduction and welcome message.

Registration steps with a clear outline of what attendees need to do.

Important details about registration dates, fees, and what’s included.

API Data Page: A page that fetches and displays weather data from the OpenWeatherAPI.

Weather Data: Displays a forecast for Toronto, showcasing temperature, weather condition, and date for April 9-10, 2025.

UI: The weather information is displayed in a clean, user-friendly format with icons representing weather conditions.

Form Page: A reactive form for the Family Camp 2025 Registration.

Form Fields: The form collects user details such as name, email, and payment proof.

Validation: The form includes validation for required fields, email format, and correct payment information.

Submission: Provides clear feedback on validation errors and successful form submission.

4. API Service and Data Fetching
Weather Service: A dedicated WeatherService was created to handle API requests to the OpenWeatherAPI.

HttpClient: Angular's HttpClient was used to fetch data from the external API and handle responses accordingly.

5. Reactive Form
Form Creation: The registration form was implemented using Angular's ReactiveFormsModule.

Fields: The form includes at least three fields: name, email, and payment proof.

Validation: Form validation ensures that all required fields are filled out and that email format is valid.

Error Messages: If any fields are invalid, appropriate error messages are displayed.

Technology Stack
Angular 18: Front-end framework used to build the application.

OpenWeatherAPI: Weather data API used to fetch weather information for Toronto.

Angular Router: Used for handling client-side navigation.

Reactive Forms: Angular’s ReactiveFormsModule was used for form creation and validation.

HttpClient: Angular’s HttpClient module was used for API calls.

Project Structure
Home Page (home.component.ts): Displays event details and registration steps.

API Data Page (api-data.component.ts): Fetches and displays weather data from OpenWeatherAPI.

Form Page (form.component.ts): A reactive form for Family Camp 2025 registration.

Location Page (map.component.ts): Fetches and displays pinned location on Google Maps.

WeatherService (weather.service.ts): Service to handle API requests and data fetching from OpenWeatherAPI.

Setup & Installation
Clone the repository:

bash
Copy
Edit
git clone https://github.com/yourusername/family-camp-2025-registration.git
Install dependencies: Navigate to the project folder and install dependencies using npm:

bash
Copy
Edit
cd family-camp-2025-registration
npm install
Run the application: To start the development server, run:

bash
Copy
Edit
ng serve
Open your browser and go to http://localhost:4200 to view the app.

How to Use
Home Page: Visit the homepage for an overview of the event and the registration process.

API Data Page: View the weather forecast for Toronto for April 9-10, 2025 by navigating to the Weather page. Also, exact address was pin and shown on Google Maps via the Google Maps API.

Form Page: Fill out the registration form to sign up for the event. Make sure to provide accurate information and follow the steps outlined on the page.



Conclusion
This Angular application is fully functional, offering users an intuitive way to access event information, view weather updates, and register for the Family Camp 2025. It demonstrates the use of Angular features like routing, reactive forms, and HTTP requests to build a dynamic and interactive web application.




This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.1.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
#   a n g u l a r - a s s i g n m e n t - a l e x b a t a c 
 
 