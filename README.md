# Task Tracker Application

This project is a task tracking application developed as part of the second-round assessment for **Helpstir company**. The application allows users to manage their tasks efficiently with features such as adding, updating, deleting, and searching for tasks.

## Features

- **Add New Tasks**: Users can add new tasks to the list.
- **Update Task Status**: Mark tasks as complete or incomplete.
- **Delete Tasks**: Remove tasks from the list.
- **Search Tasks**: Search for tasks by name.

## Getting Started

Follow the instructions below to set up and run the project on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (v6 or higher)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/R-Madhan-1306/Task-Tracker.git
   ```

2. Navigate to the project directory:

   ```sh
   cd task-tracker
   ```

3. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Application

1. Start the JSON server:

   ```sh
   npx json-server --watch db.json --port 3500
   ```

2. In another terminal, start the React development server:

   ```sh
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to view the application.

### Usage

- **Add Task**: Enter a task in the input field and click the "Add" button.
- **Update Task**: Click the checkbox to mark a task as complete or incomplete.
- **Delete Task**: Click the trash icon to delete a task.
- **Search Task**: Use the search bar to filter tasks by their name.

## Project Structure

- **App.js**: The main component that integrates other components and manages the state.
- **Header.js**: The header component displaying the application title.
- **Content.js**: The component that displays the list of tasks and handles task updates and deletions.
- **AddItem.js**: The component for adding new tasks.
- **SearchItem.js**: The component for searching tasks.
- **Footer.js**: The footer component displaying the number of tasks.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request


