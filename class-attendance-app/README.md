# Class Attendance Application

## Overview
The Class Attendance Application is a fully responsive web application designed to manage class attendance for different student groups and class types. It provides an intuitive interface for marking attendance, managing student information, and generating reports.

## Features
- **Student Groups**: Supports three student groups: "C", "B", and "A y WS".
- **Class Types**: Supports three class types: 
  - Paid: "Especiales" and "Off Skate"
  - Free: "Generales"
- **Student Management**: Add and manage students, including tracking payment status.
- **Attendance Tracking**: Mark and view attendance for each class.
- **Reports**: Download attendance reports in Excel format with filters for date ranges (last 30 days, specific date ranges, etc.).

## Technology Stack
- **Frontend**: React, TypeScript, CSS
- **Backend**: Node.js (for API and database interactions)
- **Database**: SQL (schema and seed data provided)

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/class-attendance-app.git
   ```
2. Navigate to the project directory:
   ```
   cd class-attendance-app
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Set up the database using the provided SQL files:
   - Run `schema.sql` to create the necessary tables.
   - Run `seed.sql` to populate the database with initial data.

5. Start the application:
   ```
   npm start
   ```

## Usage
- Access the application through your web browser at `http://localhost:3000`.
- Use the navigation to access different pages: Home, Attendance, Students, and Reports.
- Follow the prompts to mark attendance, add students, and generate reports.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.