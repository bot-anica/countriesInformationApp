### Backend:

**Tech Stack:**

- Nest.js
- Typescript

**Tasks:**

1. **Endpoint: Get Available Countries**
    - Create an API endpoint, using Date Nager API `https://date.nager.at/api/v3/AvailableCountries`
    - This endpoint should return a list of available countries.
2. **Endpoint: Get Country Info**
    - Create an API endpoint to retrieve detailed information about a specific country.
    - This endpoint should provide the following data:
    a. **List of Border Countries**: A list of countries that share a border with the selected country `https://date.nager.at/api/v3/CountryInfo/UA`
    b. **Population Data**: Historical population data for the country, suitable for plotting on a chart `https://countriesnow.space/api/v0.1/countries/population`
    c. **Flag URL**: A URL to the country’s flag image `https://countriesnow.space/api/v0.1/countries/flag/images`

### API Documentation

- **Country List API**: [Nager.Date API Documentation](https://date.nager.at/swagger/index.html)
- **Country Info API**: [Postman Country Info API Documentation](https://documenter.getpostman.com/view/1134062/T1LJjU52)

### Additional Requirements

1. **Environment Variables**:
    - Create a `.env` file to store sensitive data such as API keys and base URLs.
    - Ensure that environment variables are loaded and used securely in the application.
    - Add `.env` to the repository.
2. **Code Quality**:
    - Set up ESLint and Prettier to ensure consistent code formatting and quality.
    - Ensure that all files are properly linted and formatted before submission.
3. **Documentation**:
    - Include a `README.md` file that provides instructions on how to install, run, and test the application.
    - Include any necessary setup steps, such as installing dependencies or configuring environment variables.