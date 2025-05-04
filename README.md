# Credit Card Form - Angular Application

## Project Overview

This project is an interactive credit card form built with Angular. It provides a user-friendly interface for entering credit card information with real-time validation and a visual card preview that updates as the user types.

![Screenshot (16)](https://github.com/user-attachments/assets/fb493100-8eb3-4397-914f-0a22d3817d02)



## Features

- **Interactive Card Preview**: Visual representation of the card updates in real-time as users enter information
- **Form Validation**: Comprehensive validation for all credit card fields
- **Formatted Inputs**: Automatic formatting for:
  - Credit card number (spaces after every 4 digits)
  - Expiration date (MM/YY format)
  - CVV code

## Technologies Used

- Angular 17+
- TypeScript
- Reactive Forms
- Custom Form Controls
- CSS for card animations

4. Open your browser and navigate to `http://localhost:4200/`

## Project Structure

- `app.component`: Main application component
- `card-form.component`: Handles form logic and validation
- `card.component`: Visual credit card preview
- `input.component`: Reusable form input with validation
- `date-form-control`: Custom form control for expiration date formatting

## Form Validation

The application includes validation for:

- **Card Number**: Must be a valid credit card number format
- **Card Name**: Required field
- **Expiration Date**: Must follow MM/YY format
- **Security Code**: Must be 3 or 4 digits

## Custom Form Controls

The project demonstrates the use of custom form controls in Angular, particularly for the expiration date field which automatically formats input to the MM/YY pattern.

## How It Works

1. User enters credit card information in the form
2. Real-time validation provides immediate feedback
3. The card preview updates as information is entered
4. Form can only be submitted when all validations pass

## Development

### Prerequisites

- Node.js (v14+)
- Angular CLI (v17+)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Card design inspired by [Adam Quinlan's CodePen](https://codepen.io/quinlo/pen/YONMEa)
- Form validation techniques based on Angular best practices
