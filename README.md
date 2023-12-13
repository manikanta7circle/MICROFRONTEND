# MICROFRONTEND

Steps to render the application
#npm install
#ng s faculty-app-cr
#ng s side-navigation
#ng s faculty-app


Implementation Details
1. create workspace without application #ng new LP --create-application=false
2. create projects
    #ng g application faculty-app --routing --style=scss
    #ng g application faculty-app-cr --routing --style=scss
    #ng g application side-navigation --routing --style=scss
3. install webpack
    #npm i webpack webpack-cli --saved-dev
4. add module federatiion for each project with port
    #ng add @angular-architects/module-federation@16 --project faculty-app --port 4200
    #ng add @angular-architects/module-federation@16 --project faculty-app-cr --port 4300
    #ng add @angular-architects/module-federation@16 --project side-navigation --port 4400