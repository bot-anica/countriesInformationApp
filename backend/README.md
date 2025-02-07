# Country Information API

A NestJS-based REST API that provides detailed information about countries, including their borders, population data, and flag images.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository
2. Navigate to the backend directory:
```bash
cd backend
```

3. Install dependencies:
```bash
npm install
```

4. Create a `.env` file in the root directory with the following content:
```
DATE_NAGER_API_URL=https://date.nager.at/api/v3
COUNTRIES_NOW_API_URL=https://countriesnow.space/api/v0.1
```

## Running the Application

### Development mode
```bash
npm run start:dev
```

### Production mode
```bash
npm run build
npm run start:prod
```

The server will start on `http://localhost:3000` by default.

## API Endpoints

### 1. Get Available Countries

Retrieves a list of all available countries.

- **URL**: `/countries`
- **Method**: `GET`
- **Response Format**:
```json
[
  {
    "countryCode": "AD",
    "name": "Andorra"
  },
  {
    "countryCode": "AE",
    "name": "United Arab Emirates"
  }
  // ...
]
```

### 2. Get Country Information

Retrieves detailed information about a specific country.

- **URL**: `/countries/:countryCode`
- **Method**: `GET`
- **URL Parameters**: 
  - `countryCode`: Two-letter country code (ISO 3166-1 alpha-2)
- **Response Format**:
```json
{
  "borders": {
    "commonName": "Ukraine",
    "officialName": "Ukraine",
    "countryCode": "UA",
    "region": "Europe",
    "borders": ["BY", "HU", "MD", "PL", "RO", "RU", "SK"]
  },
  "population": [
    {
      "year": 2019,
      "value": 44385155
    },
    {
      "year": 2020,
      "value": 44134693
    }
    // ...
  ],
  "flagUrl": "https://example.com/flags/ua.png"
}
```

## Error Responses

The API uses standard HTTP response codes:

- `200 OK`: Request successful
- `404 Not Found`: Country not found
- `500 Internal Server Error`: Server error

Error response format:
```json
{
  "statusCode": 404,
  "message": "Country with code XX not found",
  "error": "Not Found"
}
```

## Data Sources

The API aggregates data from multiple sources:
- Border Countries: [Date Nager API](https://date.nager.at/swagger/index.html)
- Population Data: [Countries Now API](https://countriesnow.space/)
- Flag Images: [Countries Now API](https://countriesnow.space/)

## Development

### Code Style

The project uses ESLint and Prettier for code formatting. Run the following commands:

```bash
# Lint code
npm run lint

# Format code
npm run format
```
