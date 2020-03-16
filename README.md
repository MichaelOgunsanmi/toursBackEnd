# ****Introduction****

The aim of this package is to create a folder structure for your node-express applications following the MVC architecture. The 
structural choices made for this package have been based on my experience developing node-express applications and are
open to reviews and alterations. Below represent some actions to be carried out for each package with suggestions made 
for each folder and file. 


# ****Actions****
- Initialize git with "git init" to add git to project.
- Install express with "npm install express".
- Create a .gitignore file.
- Create a .env file and check this into .gitignore.


# ****Configurations**** 

### **package.json**
- Install the nodemon package as a development dependency using "npm install nodemon --save-dev"
- Edit the following fields to suit your needs
      
          "name": ,
          "version": ,
          "description": ,
          "keywords": [],
          "author": {
            "name": ,
            "email": 
          },
          "license":
      
- Add more fields as required to the package.json file
- Add more scripts as required. 


### **.env**
- Set the NODE_ENV via the command line using either the SET or EXPORT keyword as defined below
        
        SET NODE_ENV=production (for production environment)
        EXPORT NODE_ENV=developemnt (for development environment)`
- Install the dotenv package using "npm install dotenv"
- In the .env file created, set the PORT number and other environment variables using the format below
    
        PORT=5000
        EXAMPLE_ENVIRONMENT_VARIABLE=EXAMPLE_ENVIRONMENT_VALUE


### **readme.MD**
- Edit file to describe your project and highlight specific actions to be carried out in running your project.


### **server.js**
- Main entry into your app. The server exported here can be used during testing.


### **app.js**
- Add other startup files required for your application by requiring the files containing them from the startup folder.


### **Startup**
#### **db.js**
- npm install winston
- npm install mongoose
- Set DB connection string in the .env file 

#### **logging.js**
- npm install winston-mongodb (if you want winston to write log Files to mongodb database. Could cause errors when used
during testing)
- npm install express-async-errors (used for handling errors and logging these errors)

#### **routes.js**
- register routes and middleware here.

#### **index.js**
- Add other startup files required for your application by requiring the files containing them from the startup folder.
Remember here that the order of files being required is very important e.g logging files should come above every other 
file that requires the logging functionality.

#### **config.js**
- Add Code to throw Error when specific environmental variables needed for app startup are not provided e.g PORT number

- Add other startup files that work as middleware needed in the request response cycle e.g
    
    validation.js (add middleware required for data validation 
    e.g joi-objectid),
    
    views.js (add middleware required for view engines e.g middleware for 
    handlebars view engine),
    
    session.js (add middleware for session management on the server),
    
    flashMessaging.js (add middleware for flash messaging e.g connect-flash),
    
    production.js (add production based middleware e.g helmet) e.t.c


### **routes**
- Add routes as necessary. Group routes based on the API end point


### **middlewares**
- Add middleware necessary for the project e.g authentication.js, maintenance503.js e.t.c. Remember to call next() to 
allow for continuation of the request-response processing pipeline
- error.js catches any error in the request-processing pipeline and uses winston to log these errors.


### **models**
- Install mongoose with "npm install mongoose".
- Place all utility functions relating to all models in utils.js.
- Create a folder for each collection in the database and describe its model in this folder.
- Add methods on the model schema to the methods folder.
- Add statics on the model schema to the statics folder.
- Add pre actions on the model schema to the pre folder.
- Add post actions on the model schema to the post folder.
- Add other methods closely tied to the model schema to the utils folder.


### **views**
- Add view engine code here and structure the view engine folder as recommended for the view engine chosen. View engines
could be pug, jade, handlebars, e.t.c


### **controllers**
- Add controller folder for each major API endpoints necessary for the project.
- Add controller files containing controller logic for the CRUD action necessary for that particular endPoint
- Create an index.js file for each controller folder to export all the controllers from one file.


### **public**
- Add css based code to css folder and structure the folder according to your css needs.
- Add project images to images folder and structure the folder according to your project images structure.
- Add client-side javascript code here and structure the folder according to your client-side javascript needs.
- Add html pages to the root of this folder e.g index.html, about.html, e.t.c . Note to remove the index.html file when
using a view engine (e.g handlebars) as it will override the index page for your view engine.


### **tests**
#### **/\_\_mocks__**
- Mock third-party API calls here i.e API calls for third-party services e.g sending mails, payment services.

#### **/fixtures**
- Add code that would usually come up in your beforeEach and afterEach calls. Export this code so that they can be 
available for multiple test suites e.g code to setup and clean a database.
- Add other files that might be needed for testing API endpoints e.g photo.jpg needed to test file uploads.

#### **/integration**
- Add integration tests here and group these tests according to the file structure used in the project e.g middleware 
folder for integration tests for files in the project's middleware folder.

#### **/unit**
- Add unit tests here and group these tests according to the file structure used in the project e.g controller 
folder for unit tests for files in the project's controller folder.  
        

Add other files and folders as required for your project.



                                    
                                     
                                     