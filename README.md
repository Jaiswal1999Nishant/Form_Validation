# Form Validation Project

This project contains a simple HTML form with JavaScript validation and a Python script for processing form data.

## Files Structure

- `index.html` - Main HTML file with the contact form
- `styles.css` - CSS styling for the form
- `script.js` - JavaScript validation logic
- `scripts/form_processor.py` - Python script for processing form data

## Features

### HTML Form
- Clean, responsive design with gradient background
- Name and Email input fields
- Submit button
- Real-time error display

### JavaScript Validation
- Both fields must be filled out
- Email must contain "@" symbol
- Shows success/error alerts
- Displays submitted data on success
- Form resets after 3 seconds

### Python Script
- Takes Name and Email as command-line input
- Validates input data
- Prints formatted output: "Received data: Name: [name], Email: [email]"

## How to Use

### Running the HTML Form
1. Open `index.html` in a web browser
2. Fill out the form and test validation
3. Try submitting with empty fields or invalid email

### Running the Python Script
1. Navigate to the project directory
2. Run: `python scripts/form_processor.py`
3. Enter name and email when prompted


### GitHub Upload
1. Created a new repository on GitHub: FORM_VALIDATION
2. Uploaded all files:
   - `index.html`
   - `styles.css` 
   - `script.js`
   - `scripts/form_processor.py`
   - `README.md`
  
## Testing Checklist

- [ ] Form validates empty name field
- [ ] Form validates empty email field  
- [ ] Form validates email without @ symbol
- [ ] Form shows success message with valid data
- [ ] Python script handles empty inputs
- [ ] Python script validates email format
- [ ] Python script prints correct output format
- [ ] Screen recording shows both demos
- [ ] All files uploaded to GitHub
