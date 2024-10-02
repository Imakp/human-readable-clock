# Human Readable Clock with Toggleable 12/24-Hour Format and Dark Mode

This project is a dynamic clock built with Next.js and Tailwind CSS that displays time in a human-readable format. The time is represented using words, such as "ten minutes to eleven" or "quarter past ten". It includes two toggles: one for switching between 12-hour and 24-hour formats, and another for toggling between light and dark modes.

## Features

- **Human-Readable Time:** The time is displayed in a format like "quarter to ten" or "eleven minutes past nine".
- **12/24-Hour Toggle:** Users can switch between the 12-hour AM/PM format and the 24-hour format.
- **Light/Dark Mode Toggle:** Users can toggle between light and dark modes for better viewing experience in different environments.
- **Real-Time Updates:** The time updates every second to always display the current time.
- **Responsive Design:** The clock is designed to be fully responsive and adjusts to various screen sizes.

## Project Structure

- **Next.js:** The project is built using Next.js for server-side rendering and React-based component architecture.
- **Tailwind CSS:** Styling is done using Tailwind CSS, offering a flexible and utility-first approach for modern web design.
- **Heroicons:** The project uses Heroicons for the toggle icons (Sun, Moon, and Clock).

## Usage

1. **Humanizing Time:**  
   The `humanizeTime()` function converts the current hours, minutes, and seconds into a human-readable format. The function adjusts the wording based on the time and handles both 12-hour and 24-hour formats.

2. **Number to Words Conversion:**  
   The `numberToWords()` function translates numbers into their corresponding English words for time display.

3. **Real-Time Clock:**  
   The clock updates every second by utilizing React's `useEffect()` and `useState()` hooks, ensuring that the displayed time is always accurate.

4. **Dark Mode Toggle:**  
   The dark mode is controlled via the `setDarkMode()` function, which applies or removes a `dark` class on the HTML root element.

5. **12/24-Hour Toggle:**  
   The `setIs24Hour()` function toggles between 12-hour and 24-hour time formats.

## How to Run

1. **Install Dependencies:**  
   Clone the repository and run the following commands:

   ```bash
   npm install
   ```

2. **Run Development Server:**  
   Start the development server by running:

   ```bash
   npm run dev
   ```

3. **View in Browser:**  
   Open `http://localhost:3000` in your browser to view the clock.

## Components

- **Home Component:**  
  The main component that displays the clock and toggle buttons. It uses React's `useState` and `useEffect` hooks to handle time, dark mode, and 12/24-hour format toggling.
  
- **Clock Display:**  
  The clock is displayed in human-readable format with a dynamic update every second.

- **Buttons:**
  - **12/24-Hour Format Toggle:**  
    Allows switching between the 12-hour and 24-hour time formats.
  - **Dark Mode Toggle:**  
    Switches between light and dark modes, using the Sun and Moon icons for visual representation.

## Customization

- **Modify Time Format:**  
  You can easily modify how time is displayed by changing the logic inside the `humanizeTime()` function. For instance, you could further customize how seconds are displayed or change the wording of certain time intervals.

- **Styling:**  
  Modify the appearance of the clock and buttons by editing the Tailwind CSS classes in the TSX elements.

## Dependencies

- **React**: A JavaScript library for building user interfaces.
- **Next.js**: A React framework for server-rendered applications.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Heroicons**: A set of free icons for use in web projects.
