# To Do List | Back-end | NodeJS

An API in NodeJS to register users, with bcrypt, jwt and create task list.

## How to configure the project:

> If you use npm, just replace the **yarn** > **npm**.

* Clone the repository to your computer, navigate to the folder and use the command **yarn install** to install the dependencies.
* Turn on your database and create a database with the name of **tasklist** (or whatever you prefer). > **I recommend using postgres.**

* Open the project folder in your text editor to include your database information:

The information of what to fill is commented in the scripts.

* Navigate to **config > auth.js** and add your information to the JWT.
* Navigate to **config > database.js** and include your database access information.
* Navigate to **server.js** and include the port the server will listen to.

Now start the project with the command **yarn dev** (accessing the project's root folder from the terminal).

* With the project and the database running, use the terminal again to create the tables with the command **yarn sequelize db:migrate**

### If you have followed the steps here, everything is ready for use! Now just use the API on your front-end or test the routes using Insomnia.

## Access routes to the API:

> Replace **base_url** with your server's url. **Example: localhost:3333**

### User routes

* Route to create user: **base_url/users**

Example: {
	         "name": "YOUR_NAME",
	         "email": "YOUR_EMAIL",
	         "password": "YOUR_PASSWORD"
         }

* Login route: **base_url/sessions**

Example: {
	          "email": "YOUR_EMAIL",
	          "password": "YOUR_PASSWORD"
         }

* Route to edit user: **base_url/users** (necessary to send the bearer token)

Example: {
	          "name": "YOUR_NAME",
	          "email": "YOUR_EMAIL",
	          "oldPassword": "YOUR_OLDPASS",
	          "password": "YOUR_NEWPASS",
	          "confirmPassword": "YOUR_NEWPASS"
         }

### Tasks routes

* Route to create task: **base_url/tasks** (necessary to send the bearer token)

Example: {
	          "task": "YOUR_TASK"
         }

* Route to list tasks: **base_url/tasks** (necessary to send the bearer token)

* Route to edit task: **base_url/tasks/:task_id** (where **:task_id** is the task id) (necessary to send the bearer token)

Example: {
	          "check": true
         }
* Route to delete task: **base_url/tasks/:task_id** (where **:task_id** is the task id) (necessary to send the bearer token)

### Doubts? Send me a message on my social networks. Good luck! ;)
