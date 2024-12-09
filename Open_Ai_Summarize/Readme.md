## Document Summarization Add-on

This Google Docs add-on helps you create concise summaries of selected paragraphs. It leverages OpenAI's API to generate summaries based on your selections.

**Features:**

- Summarizes selected paragraphs
- Appends the generated summary to the document

**Requirements:**

- A Google Doc
- An OpenAI API key (obtainable from [https://beta.openai.com/account/api-keys](https://www.google.com/url?sa=E&source=gmail&q=https://beta.openai.com/account/api-keys))

**Setup:**

1.  **Obtain an OpenAI API Key:** Create an account on OpenAI and generate an API key.
2.  **Install the Add-on:**
    - Go to **Tools** -\> **Script editor**.
    - Copy and paste the code provided below into the script editor.
    - Replace `'your-api-key'` with your actual OpenAI API key in the `generateSummary` function.
    - Save the project.
    - Go to **Run** -\> **Deploy as add-on**.
    - Grant the necessary permissions when prompted.

**Usage:**

1.  **Select a Paragraph:** Highlight the paragraph you want to summarize.
2.  **Run the Add-on:** Go to **Add-ons** -\> **Custom Menu** -\> **Summarize selected paragraph**.
3.  **View Summary:** A new paragraph titled "Summary" will be appended below the selected text, containing the generated summary.

**Additional Notes:**

- The summary length may vary depending on the selected paragraph and the set maximum tokens.
- OpenAI's API is subject to usage limits and fees. Refer to their documentation for details.

**Disclaimer:**

This code is provided as a starting point and may require further customization. While efforts have been made to ensure its functionality, continued development and maintenance are your responsibility.
