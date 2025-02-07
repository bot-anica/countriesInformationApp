# Country Information App

A React TypeScript application that displays information about countries, including their borders, population data, and flags.

## Features

- List of all available countries
- Detailed country information pages
- Population data visualization
- Border countries navigation

## Installation

1. Clone the repository
2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory with the following content:
```
REACT_APP_API_URL=http://localhost:3000
```

5. Run application
```bash
npm start
```

## Project Structure

```
src/
├── components/         # Reusable UI components
├── interfaces/        # TypeScript interfaces
├── pages/            # Page components
├── services/         # API services
├── store/            # Redux store configuration
├── hooks/            # Custom React hooks
├── theme/            # Theme configuration
└── constants/        # Constants and configurations
```

## Main Components

### CountryList
- Displays grid of available countries
- Responsive grid layout

### CountryDetails
- Shows detailed country information
- Displays population chart
- Shows bordering countries
- Displays country flag

## Styling

The project uses:
- Tailwind CSS for styling
- Custom theme configuration
- Responsive design principles

## API Integration

The application integrates with the backend API to fetch:
- List of available countries
- Detailed country information
- Population data
- Flag images

## Code Quality

- ESLint for code linting
- Prettier for code formatting
- TypeScript for type safety
