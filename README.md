# Todo List

This project is a simple web-based Todo List application. It allows users to add, check off, and delete tasks.

## Files

- `index.html`: The main HTML file containing the structure of the Todo List application.
- `style.css`: The CSS file containing styles for the Todo List application.
- `script.js`: The JavaScript file containing the functionality for managing tasks.
- `README.md`: This file, providing an overview of the project.

## Usage

1. Open `index.html` in a web browser.
2. To add a task:
   - Enter the task description in the input field.
   - Click the "Add" button to add the task to the list.
3. To mark a task as completed:
   - Click on the task in the list to toggle its completion status.
4. To delete a task:
   - Click on the delete icon next to the task to remove it from the list.

## HTML Structure

- The `main` tag contains the primary content of the Todo List application.
- The `div` with the class `todo` contains the heading and the task list.
- The `div` with the class `heading` contains the title and an image.
- The `div` with the class `list` contains the input field, add button, and the task list.
- The `ul` with the id `listcontainer` holds the tasks.

## CSS Styling

- The page is styled with basic CSS to make it visually appealing and user-friendly.
- Google Fonts is used to include the `Madimi One` font for the heading.
- Flexbox is used for layout and alignment.

## JavaScript Functionality

- The `script.js` file contains the logic for adding, marking, and deleting tasks.
- An event listener is added to the "Add" button to add tasks to the list.
- Each task can be clicked to mark it as completed.
- Each task has a delete icon that can be clicked to remove the task.

## Future Improvements

- Add persistent storage using LocalStorage to save tasks between sessions.
- Implement editing functionality for tasks.
- Improve accessibility features such as keyboard navigation and screen reader support.
- Add animations for adding and removing tasks.

## Contributing

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a pull request.

## License

This project is licensed under the MIT License.
