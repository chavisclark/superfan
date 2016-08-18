# Superfan: A prototype feature
![alt text](https://s3.amazonaws.com/chamixes/Home.png "Superfan")

##### What the heck is this?
Simply put, it's an idea. After spending some time looking through [Stagelink.com](https://stagelink.com), I got inspired to develop a feature enhancement. 
> [Stagelink enables artists and managers to engage fans and efficiently promote shows.](https://www.facebook.com/Stagelink) Stagelink lets its users make "Come play in my town" type of requests for their favorite artists. Their request (i.e., vote) then accumulates based on location. This allows artists to effectively plan their tour dates and locations. 

So back to the feature. After my brainstorm, I settled on one feature I thought would be cool--A way for fans to track their own fandom. And thus **Superfan** was born

![alt text](https://s3.amazonaws.com/chamixes/SuperfanInfo.png "What's a Superfan?")



### The Breakdown:

#### Fans can vote for an artist to come to their town
> I recreated the voting functionality as seen on Stagelink.com

![alt text](https://s3.amazonaws.com/chamixes/ArtistPage.png "Voting page")

#### Every fan has a unique fan code
>I just used a username for simplicity's sake

#### After their initial vote, they can share a *special link*  with their friends
> Special link = artist's voting page + user's fan code set as a query parameter

![alt text](https://s3.amazonaws.com/chamixes/Promote2.png "Promote")
![alt text](https://s3.amazonaws.com/chamixes/Promote.png "The special link")

#### In my world, all fans start with 5 points in their Fan Power Pack
> Each fan starts with a Total Fan Power score of **5**

![alt text](https://s3.amazonaws.com/chamixes/UserProfile.png "User Profile")

#### When this special link is visited, their *fan power*  increases by 1 point
> In a real implementaion of this, I'd suggest registering IP addresses to prevent malicious use of this. **One computer should be allowed to increase fan power one time per artist.** 

#### If a fan's *special link*  is used to actually cast a vote, their fan power increases by 3 points
> Fans can only vote once per artist, until the next campaign



## What makes this thing work?
Superfan is fully contained within the client browser and has no major server activity. In a real implementation, a more advanced backend with a database service like PostgreSQL or MongoDB would be needed, but this is just a prototype so local storage was good enough for me!

#### Dependencies
* axios 
* dynamics.js 
* lodash 
* normalize.css 
* pagepiling.js 
* raven-js 
* react  
* react-dom 
* react-redux 
* react-router 
* redux 

#### devDependencies
* babel
* chance
* webpack
* webpack-dev-server

### React ecosystem technologies

###### [React, react-dom](https://github.com/facebook/react)
React is a JavaScript library for creating user interfaces and its the backbone of my app (hehe). I used this environment (^15.3) because it's a super cool.

###### [Webpack, webpack-dev-server](https://github.com/webpack/webpack)
Webpack is a module bundler that generates static represenations of my application.

I used webpack to compile and bundle my application files. This is where my Javascript(Babel) is translated into something that can be read by the browser. It also bundles my CSS. Now, this webpack config file can get pretty complicated real quick, but.... You know what I'm going to say right? This is only a prototype.

The webpack-dev-server is a little node.js Express server, which uses the webpack-dev-middleware to serve my webpack bundle.

###### [Redux](https://github.com/reactjs/redux)
Redux is a predictable state container for JavaScript apps. This is how I am able to maintain the state of my application and and respond to changes within my app efficiently.

###### [React Redux](https://github.com/reactjs/react-redux)
This binds my React goodies and my Redux goodies allowing me to connect my state!

###### [React Router](https://github.com/reactjs/react-router)
This handles all of my URL routing. It has a simple API but it is very powerful.

### Other technologies

###### [Lodash](https://github.com/lodash/lodash)
Lodash is a toolkit of Javascript functions that provides clean, performant methods for manipulating objects and collections. I specifially imported the _merge function from this library to merge my previous and new state objects in my Redux implementation.

###### [Dynamics](https://github.com/michaelvillar/dynamics.js/)
Dynamics is a JavaScript library that creates physics-based animations. I found this especially useful when developing the custom popover modals. But since it is a generic animations library, I'm able to use it in any component to animate any type of element (CSS or JavaScript)... Sweet!

###### [Axios](https://github.com/mzabriskie/axios)
Axios is a promise based HTTP client for the browser and node.js. This is how I'm able to make my api requests and return the data that I'm looking for. I implement this with the Github API to get information about my prototype 'artists' (i.e., random Github users)

###### [Chance](https://github.com/chancejs/chancejs)
Chance is a utility library to generate anything random for JavaScript. I use this to.... Yep, you guessed it generate random stuff, (e.g., names, integers)

###### [Normalize](https://github.com/necolas/normalize.css/)
This is a small CSS file that provides a better way for default styling

###### [PagePiling](https://github.com/alvarotrigo/pagePiling.js)
PagePiling is a JQuery plugin that effortlessly creates a 'full-page scroll' effect. I'm only using this to make one of my pages look cool. I was going to create a 'full-page scroll' myself, but then the word 'PROTOTYPE' kept appearing in my mind so I decided to just go with this (for now).

###### [Raven](https://github.com/getsentry/raven-js)
Raven is a tiny standalone JavaScript client for [Sentry](https://getsentry.com/). It can be used to report errors from a web browser.



## Good stuff to know
* Robotbook is my creation using Chance.js to generate random data for my user fields, and using [Robohash](https://robohash.org/) to generate my robot avatars.

* I borrowed [the original Stagelink stylesheet](https://stagelink.s3.amazonaws.com/assets/application-0b12a830028cd37c30cbb66064f9a4b3.css) in this rapid prototyping adventure

* The cool background is provided by [Anthony DELANOIX](https://unsplash.com/@anthonydelanoix) out of Paris!


## Usage

```
npm install
npm start
> open http://localhost:7725
```

## Things to extend this project
* Add unit-testing
* Integrate SASS and CSS Modules for a more modular way of organizing CSS
* Convert to ES6 syntax
* Move Redux async logic from reducers to middleware 
* Develop User login functionality and authentication
* Integrate Ruby on rails :)


## Note to Stagelink
Dear Stagelink,

I hope you don't mind my enthusiasm 🤓

— [Chā](https://twitter.com/cha_skyes)
