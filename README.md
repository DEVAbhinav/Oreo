<h1 align= "center"><b>Vinayaka Travels</b></h1>

<p align="center">Planning a trip to Varanasi?</p>

<p align="center">Book a cab in Varanasi with us for the lowest fare and most efficient car hire and taxi service. Hire us to visit Kashi Vishwanath, Ganga Aarti, Sarnath Darshan and many more places inside as well as near Varanasi and take your touring experience to another level.</p>

<h3><b>Technology Used</b></h3>
<ul>
<li>Bootstrap 4.x</li>
<li>ReactJS</li>
<li>Nodejs</li>
<li>Expressjs</li>
</ul>
<h4>Using React hooks to improve the app performance</h4>
<ul>
<li>React Hooks are the way to use stateful functions inside a functional component. Functional components are components written as a function, so they take some input (props) and return a react element.</li>
<li>More information https://reactjs.org/docs/hooks-intro.html</li>
<li>Using React Hooks will improve the performance of our project as it uses memorization techniques to avoid re-rendering of the component.</li>
</ul>

<h3><b>Quick Start :rocket: </b></h3>

##### `Install server dependencies`

npm install

##### `Install client dependencies`

cd client
npm install

##### `Run both Express & React from root`

npm run dev

##### `Build for production`

cd client
npm run build

Test production before deploy. <br>
After running a build in the client point_up_2, cd into the root of the project.
And run..

NODE_ENV=production node app.js
Check in browser on http://localhost:8080/

<a href="./LICENSE"><h2 align= "center"><b>License</b></h2></a>

<p align="center"><img width=35% src="https://media.giphy.com/media/xUPGcJGy8I928yIlAQ/giphy.gif"></p>

<h2 align= "center"><b>Project Maintainer</b></h2>
<p align="center">
<img width=20% src="https://avatars1.githubusercontent.com/u/14235781?s=400&u=04e682f0022b55e24740ebd9ed4a22dd9f1b95cd&v=4">
</p>
<p align="center"><a href="https://github.com/DEVAbhinav"><b>Abhinav Pandey</b></h4></a></p>
<h5 align="center">
Made with 💖 for Kashi
</h5>

## How to make changes in Website.
/home/codespace/Oreo/app/src/App.js -  This is entry point for react App.
- This has router logic.

### For blogs and packages route API is called.
- API is Az function that reads title from Query or body and sends resopnse in json.

### Link to work flow
- Workflows are Github action that deploys code chagnes. 
- Current active work flow is https://github.com/DEVAbhinav/Oreo/edit/AzureDeploy/.github/workflows/azure-static-web-apps-yellow-tree-0be727a00.yml

### How to add new blogs.
- create file in /home/codespace/Oreo/api/getBlogs/data/your-file-name.json
- keep all small letters only in file name.
- GET - kashitaxi.in/blogs/your-file-name
- If data is not comming inspect the api request - https://www.kashitaxi.in/api/getBlogs?name=your-page-name
- if its 500 in response likely naming issue. verify file name and url you type is same.

### How to debug API
- Open github codespace - https://refactored-goggles-jjq76qj4gpjcj5r.github.dev/
- nvm use 14
- npm install -g azure-functions-core-tools@3
- navigate to function - cd ~/Oreo/api
- func start
- open another terminal and hit curl - curl -X GET "http://localhost:7071/api/getBlogs?name=hotel-booking-in-varanasi"