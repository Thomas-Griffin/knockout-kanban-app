# Knockout.js Kanban App

## Description

This project is a Kanban-style task management application built with Knockout.js. It allows users to create, view, and
manage tasks in a visually intuitive board format. Tasks can be categorized into different states like 'New', 'In
Progress', and 'Done', and users can easily move tasks between these states using drag-and-drop functionality.

## Features

- **Kanban Board View**: Visualize tasks in a board format, with columns for different stages of completion.
- **Drag-and-Drop Functionality**: Easily move tasks between different stages.
- **Live-Update Counts**: View real-time updates of the number of tasks in each column.
- **Inline Editing**: Edit task details directly on the board.
- **Toggle View**: Switch between a detailed view (multiline) and a compact view (single line) for tasks.
- **Responsive Design**: The app is fully responsive, ensuring a seamless experience across various devices.

## Technologies Used

- **Knockout.js**: For dynamic data binding and MVVM architecture.
- **JSON Server**: To simulate an API for backend data storage and retrieval.
- **HTML5/CSS3**: For structuring and styling the application.
- **FontAwesome**: For icons.
- **Jest**: For unit testing.

## Installation

1. **Clone the Repository**
   ```
   git clone [repository URL]
   cd knockout-kanban-app
   ```

2. **Install Dependencies**
    - Ensure that Node.js and npm are installed.
    - Install JSON Server for the backend API.
      ```
      npm install -g json-server
      ```

3. **Run the Application**
    - Start the JSON Server.
      ```
      cd backend
      json-server --watch db.json
        ```
    - Build the frontend.
      ```
      cd frontend
      npm run frontend:build
      ```
    - Open `dist/pages/index.html` in a web browser.

## Usage

- **Add a Task**: Click on the 'Add Task' button and fill in the task details.
- **Edit a Task**: Click on a task to edit its details inline.
- **Move a Task**: Drag and drop tasks between different columns.
- **Toggle View**: Use the view toggle button to switch between detailed and compact views.

## Contributing

Contributions to the project are welcome. Please follow the guidelines below:

1. Fork the repository.
2. Create a new branch for your feature (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## Testing

- Run backend unit tests using Jest:
  ```
  cd backend
  npm run backend:test:unit
  ```
  
- Frontend unit tests are not available at this time.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Knockout.js team for the great framework.
- Contributors and reviewers of this project.
