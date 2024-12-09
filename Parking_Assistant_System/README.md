## Parking Lot Search Application

This project implements a web-based parking lot search application using Google Apps Script. Users can search for specific information in the parking lot data by entering keywords in the search bar.

**Features:**

- Simple search functionality
- Table display of parking lot data with headers

**Requirements:**

- A Google Sheet containing your parking lot data (named "Parking" in this example)

**Setup:**

1. **Create a Google Sheet:** Organize your parking lot data into columns representing relevant details (e.g., License Plate, Model, Location). Ensure the sheet is named "Parking."
2. **Deploy the Script:**
   - Go to [Link 1](https://docs.google.com/spreadsheets/d/1qFZXRgBYtPka0E2N04W4lzz-cL-yWHa1T8ekIkDCcsE/edit?gid=0#gid=0).
   - If prompted, grant the script access to your Google Drive.
   - (Optional) Review and customize the code in the script editor (accessible via "Tools" -> "Script editor").

**Usage:**

1. **Access the Application:** Visit [Link 2](https://script.google.com/macros/s/AKfycbwkA1Vxvv3tV-YcweEQHUztHGUp2F9P4TLEchYGLGOC5v-gtleTGYv95na9SRYkms4HmA/exec) in your web browser.
2. **Enter Search Term:** Type your search keywords in the "Search" bar.
3. **Click "Search":** The application will filter the parking lot data based on your search term (case-insensitive) and display it in a table.
   - If no search term is entered, all data will be displayed.

**Additional Notes:**

- This example provides a basic search functionality. You can enhance it further by incorporating advanced search options (e.g., dropdowns for specific filters).
- Consider implementing security measures if the parking lot data is sensitive.

**Code Reference:**

- The code for this application can be found in the script editor associated with the deployed script (Link 1).
- Key functions include:
  - `doGet(e)`: Creates and displays the HTML template for the web interface.
  - `doPost(e)`: Handles user search submissions and updates the displayed data.
  - `getSheetData()`: Retrieves data from the "Parking" sheet in your Google Sheet.
  - `getUrl()`: Gets the script's URL for form submission.

**Disclaimer:**

This code is provided as a starting point and can be adapted to your specific needs. While efforts have been made to ensure its accuracy, you may need to modify it for your particular use case.
