# Phase 2 Project

Flatiron School's Phase 2 was all about React!  
Phase 1 seemed to work with the [Dog CEO API](https://dog.ceo/dog-api/documentation/) a lot. In Phase 2, this API was not used as often, so there were not as many cute dogs to see! Using Dog CEO in the Phase 2 project gave the opportunity to still work with dogs!  
In the images section, random dog images are added by making a `GET` request to Dog CEO, then making a `POST` request to the `json-server`, then finally, updating state. Dog CEO also provides the data for the Breeds section. Since `json-server` needed to be used with controlled forms as well, activities were manually added.  
The project utilizes `BrowserRouter`, `Switch`, `Route` and `NavLink` from `react-router-dom` to handle all client-side routing. 
#
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
#
## Features
- Uses client-side routing, which makes navigating through the application faster
- Images are always randomly generated, with the option to list more as many times as wanted
- Navigation Bar has CSS styling that makes it easier to navigate
- Option to add activities with a form to the activities section
- Breeds can be searched by partial matches
#
## Review Links
[Application]()  
[Blog]()  
[Video]()
#
## Resources
[Activities](https://www.care.com/c/101-things-to-do-with-your-dog/) - This was used to create the json data for Activities.  
[Button](https://copy-paste-css.com/) - Button styling for the "Get More Dogs" button; some colors and values were modified from the example given.