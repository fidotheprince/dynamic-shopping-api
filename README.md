# Description

This is a REST API / Server Application that communicates with Open AI's text model GPT-3.5 Turbo. 
The application then gathers the response from the model and sends it back to the client. The native client for this application can be found [here](https://effulgent-praline-4dbf11.netlify.app/). Also here is the repository for said client, [here](https://github.com/fidotheprince/dynamic-shopping-list).

# Design Diagram

![Design Diagram](https://effulgent-praline-4dbf11.netlify.app/documents/grocery-pal-design.png)

# Installation Instructions

Before you begin, make sure you have [Node.js](https://nodejs.org/) installed on your machine. Node.js is a JavaScript runtime that allows you to run JavaScript on your server. It's essential for this project as it uses Node.js for its server environment.

1. **Install Node.js**

   If you don't have Node.js installed, you can download it from the [official website](https://nodejs.org/). Follow the instructions for your specific operating system.

2. **Clone the repository**

   First, you need to clone the repository to your local machine. You can do this with the following command:

   ```bash
   git clone <repository-url>
   ```

   Replace `<repository-url>` with the URL of your repository.

3. **Navigate to the project directory**

   Use the `cd` command to navigate to the project directory. For example:

   ```bash
   cd <project-directory>
   ```

   Replace `<project-directory>` with the name of your project directory.

4. **Install the dependencies**

   Your project requires several dependencies to run. Install them with the following command:

   ```bash
   npm install
   ```

   This command installs all of the dependencies listed in your `package.json` file.

5. **Start the application**

   You can start the application in development mode with the following command:

   ```bash
   npm run start:dev
   ```

   This command starts your application with `nodemon`, which will automatically restart your application whenever you make changes to the code.

   If you want to start the application in production mode, use the following command:

   ```bash
   npm start
   ```

   This command starts your application with `node`.