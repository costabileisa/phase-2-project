# Phase 2 Project

Flatiron School's Phase 2 was all about React!  
Phase 1 seemed to work with the [Dog CEO API](https://dog.ceo/dog-api/documentation/) a lot. In Phase 2, this API was not used as often, so there were not as many cute dogs to see! Using Dog CEO in the Phase 2 project gave the opportunity to still work with dogs!  
In the images section, random dog images are added by making a `GET` request to Dog CEO, then making a `POST` request to the `json-server`, then finally, updating state. Dog CEO also provides the data for the Breeds section. Since `json-server` needed to be used with controlled forms as well, activities were manually added.  
The project utilizes `BrowserRouter`, `Switch`, `Route` and `NavLink` from `react-router-dom` to handle all client-side routing. 
    

## Installation
In the terminal, clone the project repo:
```console
git clone https://github.com/costabileisa/phase-2-project.git
```
Then open it:
```console
code phase-2-project
```
or
```console
cd phase-2-project
code .
```
Now, inside the VS Code terminal (this will ensure you are in the proper folder), follow these next steps:    

Install dependencies:
```console
npm install
```
Now, run the server:
```console
npm run server
```
You should now be able to access the server on     
`http://localhost:4000/images` - for images      
or     
`http://localhost:4000/activities` - for activities  
      
In a separate terminal, start the application:
```console
npm start
```
The application should open at `http://localhost:3000` by default. You may be prompted to open it using a different port if 3000 is in use. To open using a different port, just press "y" when prompted!
    
## Requirements
For this project, the requirements were as follows:
- Create a React single page application from scratch
- Apply knowledge of components, props, and state management
- Incorporate client-side routing
- Utilize `json-server` to create a RESTful api
    - Make both a `GET` and `POST` request to the `json-server`
    - Keep data simple
    - After returning json from `POST`, update state
- Add some CSS styling
    
## Features
- Uses client-side routing, which makes navigating through the application faster
- Images are always randomly generated, with the option to list more as many times as wanted
- Navigation Bar has CSS styling that makes it easier to navigate
- Option to add an activity to the activities section using a form
- Breeds can be searched by starting letter
    
## Review Links
[GitHub Repo](https://github.com/costabileisa/phase-2-project)  
[Blog Post - The Importance of Organization](https://medium.com/@costabileisa/the-importance-of-organization-2274d66c6b30)  
[Video]()
    
## Resources
[Activities](https://www.care.com/c/101-things-to-do-with-your-dog/) - This was used for the json data in the activities section.  
[Button](https://copy-paste-css.com/) - Button styling for the "Get More Dogs" button; some colors and values were modified from the example given.  
[Dog CEO API](https://dog.ceo/dog-api/documentation/) - Used for images and breeds