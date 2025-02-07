### Front-end:

**Tech Stack:**

- React.js
- Typescript
- Next.js (preferred but not mandatory)

**Tasks:**

1. **Country List Page**
    - Display a list of countries fetched from the endpoint.
    - Each country name should be clickable and navigate the user to the Country Info Page.
2. **Country Info Page**
    - Display detailed information about the selected country, including:
        - **Country Name**: Displayed prominently at the top.
        - **Country Flag**: Displayed alongside the country name using the URL fetched from the backend.
    - **Border Countries Widget**:
        - Show a list of countries that border the selected country.
        - Each border country name should be clickable and navigate the user to the corresponding Country Info Page.
    - **Population Chart**:
        - Implement a chart that shows the country’s population over time.
        - The X-axis should represent years, and the Y-axis should represent the population.

### Additional Requirements

1. **Styling**:
    - You can use any CSS framework or custom styles to design the components.
    - Ensure that the UI is responsive and user-friendly.
2. **Environment Variables**:
    - Create a `.env` file to store sensitive data such as API keys and base URLs.
    - Ensure that environment variables are loaded and used securely in the application.
    - Add `.env` to the repository.
3. **Code Quality**:
    - Set up ESLint and Prettier to ensure consistent code formatting and quality.
    - Ensure that all files are properly linted and formatted before submission.
4. **Documentation**:
    - Include a `README.md` file that provides instructions on how to install, run, and test the application.
    - Include any necessary setup steps, such as installing dependencies or configuring environment variables.