### swiggy project details

#namaste react

Chapter 1

after creating githut repo and here do git init to make this now git repository

and do git branch -M main to create main as the main branch

git remote add origin git@github.com:Ganesh9812/namaste-react2024 to set our local to git repo

browser does not know react
we need to configure react into our project
browser knows the js as it has the js engine

how can we inject react into the project

CDN content delivery network these are website where react library is hoisted and we are pulling the react from there and using in our project

first file react.development.js this is the core file of the react
second file react-dom.development.js for dom for browsers...

react works in phone apps as react native

root is the place where we render everything

End of the day react uses js

HW
what is CDN
what is crossorigin

chapter 2

the code which we return till now above is just html, css and js and react and is it ready to push to production? No

then whats the issue in this code

basically this code needs to optimised. we dont want to put comment console in to our prodution.

we want to minify the code , we want to bundle our code

if we lot of images, we want to optimize

so before pushing the code to prod we need to do lot of processing.

we need to do bundling, code splitting, chunking, image optimisatgioin, compress, minifiy etc..

npm is a package manager

manages packages

all the library and utilities that we need comes from npm

when you do create react app, it has already npm in it

add node package manager to our project

npm init --our project starts using npm

npm init -y skips few thins

package.json is a configuration for npm

npm is package manager that manages all the packages that we install in our system and these packages are also know as dependencies

npm take care of the packages and their version in the package.json

the most important package in our project is a bundle

bundler does all the compression, cache, minification ect... that we need for production

webpack, parcel etc... are bundlers

create react app uses webpack bundler

here we are using parcel

install parcel

npm install -D parcel -- install parcel as dev dependency

there are 2 types of depencies we can install

one is dev dependency -- it is generally required during the development
normal dependency -- used for production

parcel is beast as it will do lot of things

^ is know as carrot

if new minor upgrade version comes , then if use carror, parcel will automatically upgrades the version

~ will install major version automatically

safe to use carrot

after installing parcel we got package-lock.json as well

package-lock.json keeps a track of the exact package versions of all the dependencies

package-lock.json keeps a hash to verfiy whatever there in my local machine is the same version deployed to production

node modules got into project after installing the parcel dependency

node modules has the actual code of the dependency

parcel again has some other dependencies... and these dependencies has a dependency with other dependency. so lot of packages or dependencies got into node modules when we installed parcel. this is called transitive dependency.

every dependency has its own package.json and it has its own dependencies.

node modules is the collection of the dependencies

node modules is so huge, should we push node modules to github?

No

so put this node modules in git ignore

should i put package.json and package-lock.json into the git?
yes

both maintains the note of all the dependencies that we need for our project. These are enough to re generate node modules in the server.

what ever you can re generate, so don't put in git

if you delete some dependency and if you do npm i, this will create all the dependencies again in node modules

how to ignite our app

npx parcel index.html

now its like we are hosting our app in the server -- parcel is doing this

just like npm we have npx

npm is like installing a package

npx is like excecting the package

npx means executing a package

npx parcel index.html

here we are executing the parcel where index.html is the source and build a development build app and host this development build app in localhost 1234

previously we injected react using cdn

now another way to inject react into our app is using npm where react is hosted in npm

cdn is not a prefered way to do bring react and react dom

why to make another network call to get the react if we have in node modules
if version changes then we need to change the cdn
easy with package versions

install react

npm install react
npm install react-dom
not using -D as i need react as normal dependency

and then import react and use it. React from node modules

# Parcel

dev build
Local server
Refreshing your page - HMR - Hot Module Replacement

Parcel uses file watching algorithm written in c++
when ever we do some change in code and save parcel will do HMR using file watching algorithm

parcel also caching things for us to give faster build
thats y parcel-cache folder is created
these are binary files

parcel will do image optimisation
Minification our files
compress our files

parcel also uses other packages or dependencies to do the above

parcel uses consistent hashing

code splitting

differential bundling - your app can be opened any browsers, so parcel takes care of all that using differential bundling so that support of older browsers will also be there

Diagonstics

Better error handling

right now in dev env our app is hosted on http

parcel can help to host in https

tree shaking - remove unused code for us

parcle creates different build for dev and prod bundles

how to create a prod build
npx parcel build index.html

and remove main from package.json

when parcel builds a prod ready app, where the build goes --- npx parcel build index.html

so all the things after minification etc... are kept in dist

3 main files we need to care about dist folder where parcels compressed, minified etc....and built these 3 files
index.html
index.js
index.css

npx parcel index.html for dev buiild when we do this dev build or prod build dist and parcel cachel will get generated for the first time and this does not needs to be pushed to github

local code ---- github ---server

server host the app to end user

npx parcel build index.html also runs on server becuase of package.json and we do npm install on server and get the node modules on server and all this because of the package.json

lets make our app compatible with old browsers

browsers list is a npm package

we can add browsers list in the package.json

"browserslist": [
"last 2 Chrome version",
"last 2 Firefox version"
]

this means it will work in all browsers but its must work in the mentioned browsers

by following the above we have created our own create react app

chapter 3

npx parcel build index.html

this is executing npm parcel package with index.html source file

lets write a script to shorten these commands

we write commands in package.json script that needs to be executed by npm

now do

npm run and script like npm start

npx parcel index.html now will be npm run start

npm run start or npm start will be same

when we render react element to dom, it becomes an html

React.createElement is complicated with complex html

to avoid this now we have jsx

its a javascript syntax to create elements

react and jsx are different

jsx is just to make our life easy

jsx is a convention where we merge js and html

jsx is not html and jsx is not html inside javascript .. jsx is html or XML like syntax

const jsxHeading = <h1> jsx heading</h1>;

jsxHeading is a react element

here <h1> jsx heading</h1> this piece of code is jsx

when this piece of code is executed, it becomes a react element.

React.createElement("h1", {}, "hello"); this is how you create react element in core react

<h1 id="heading"> jsx heading</h1> this is how you create react element using jsx

js engine does not understand const jsxHeading = <h1> jsx heading</h1>; js engine understands ecma script

this code const jsxHeading = <h1> jsx heading</h1>; renders due to parcel

transpilation is nothing but converting the code

Parcel gives the responsibility of transpilation to babel package

wehn i save jsx , babel convert the jsx to react understands code

jsx is converted to react element which is an js object and rendered as html in the browser

jsx in multiple lines wrap it in () so that babel knows where it starts and where it ends

react components

class based
functional based

react functionl component is just a normal js function which returns a piece of jsx element or a function which returns a react element as babal converts jsx to react element

create react functional component is capital letter

jsx can be nested

root.render(heading); rendering react element

root.render(<HeadingComponent />); rendering react component which return jsx/react element/react elements

this is how babel understand react element and react component

in jsx if we keep {} we can write any js expression or any js code

component inside component

how to put react element inside a component.. react element is a js object

so we need to put {title} inside a component

chapter 4

props is something we can pass to components or just normal arguments to the functions

config driver UI

controlling UI using the data

for eg: ui driven by config
based on location we might show banner or not

if we dont use the key react will re render everythings instead of adding one

chapter 5

usestate is used to create state variables

whenever state variable updates, react will re render the component

data layer will be in sync with UI layer

as the state variable updates UI will update by re rendering

react uses something know as reconciliation algorithm and this its also know react fiber

virtual dom is representation of actual dom

virtual dom is nothing but the react element which is a js object

return <body /> here this is virtual dom

diff algorithm is difference between previous virtual dom and new virtual dom

and then diff algorithm updates the actual dom and thats how the react is fast

virtaul dom is nothing but final react element or final jsx that converted to converted to react element by babel and this react element is nothing but js object rendered as html

chapter 6

all the big companies are preferring micro services archetiture

micro serives together forms a project

different teams can work on different services independently and these serives interact with each other

all the servies run on their own port

and each service can maintain individual git rub

useeffect callback function will be called after the component renders

once the page body renders for the first time when you open the page, after the render, then effect callback will be called

whenever the state variable changes, then the component will re render

chapter 7

useeffect callback function will be called after every render of that component

dependency array changes the behaviour of the useeffect render

if we dont put any dependency arry, useeffect will be rendered after every render

if empty depenency array, then useeffect will be call only once after the initial render

if you put something in the dependency array, then useeffect will be called when the dependency changes

createBrowserRouter will create a routing configuration for us

we can also put error page using errorElement

also for the error component we can use useRouteError

also we can create child routing where like we need to keep header in common in which ever page we go

in header links, better not use <a> tag for links as it will reload the entire page, so link from react router dom

2 types of routing
client side routing
server side routing

server side routing --- when you click on some link, page reloads and make a network call orrequest goes to server to fetch the html and then renders
client side routing- here we are not making any network calls and just components changed

dynamic routing

chapter 9

custom hooks

why custom hook in restuarant menu component

creating a custom hook is not mandatory but creating it looks more modular

single responsibitility principle if you have any function or component, it should have single responsibility, like only job of the restraurant card should only displaying restaurant card

code becomes reusable, testable, modular

hooks are like utitlity functions

creating a custom hook is not mandatory but creating it makes our code modular

restaurantmenu is doing fetchinb the data and displaying the menu

here restuarant menu should only display the data

when creating a custom hook check for input of the hook and output of the hook so it will be easy while creating the custom hook

bundler does the bundling of our code where all our js code or components are converted into single js file

and for big applications this size of the single js file will get increased which is not good and page will take lot of time to load

how to optimise this

lets make small bundles of these files . this process is known as chunking/code splitting /lazy loading /dynamic bundling / on demand loading

to break our app into small chunks

like you can make a bundle for make my trip for flights, and make a bundle for trains

here lets make different bundle for grocery and rest

so we need to import using lazy loading

so when we launch the app, our code wont load grocery and only when we go to grocery page then only my code loads for grocery

suspense

chapter10

css

styled components to write css to our components

tailwind css

material ui is a react component library

npm install -D tailwindcss postcss
npx tailwindcss init

when we do npx tailwindcss init it will create a tailwind.config.js

we need to create a configuration file post css by creating .postcssrc and copy from tailwind

parcel uses postcss to read tailwind

we need to add content and it indicates that in which files we need to use tailwind

now copy index.css from tailwind to our index.css

how tailwind works

we are going put to css class names

tailwind css give class names

chapter11

how to manage data in our application

higher order components

higher order component is a function that takes a component and returns a component

this takes a component and enhances and then returns

UI is different and data part is different in react

data layer is very important

all the react applications has UI layer and data layer and UI layer is powered by data layer

data layer is props, state etc..

UI layer is the jsx

we should know more on how to manage data

controlled component and uncontrolled component

lifting the state up

props drilling

data in react flows in one direction from parent to child

so data needs to flow all through all components

so one or two levels passing props fine, lets say we need pass props to more levels, so this is not recommended instead we can use react context

by this we can access data at any place

react context

so using react context we can avoid props drilling

context is like a global place where anyone can access

this context is like a global kind of object for react

using createContext we create the context

in createContext we give the information that we hold

react has usecontext hook using which we can access context

UserContext.provider helps you to override the default context value

we wrapped UserContext.provider in the whole app

thats y all places in the app, the new value will be updated

alternative for context is redux

chapter11

redux works on the data layer

how we can create redux store

how we can manage data using redux

using redux is not mandatory

for small applications don't need redux

react and redux are different library

redux is used for state management

alternative of redux is zustand

when using redux dev tools application becomes easy to debug

2 libraries that redux offers
react redux - bridge between react and redux
redux toolkit - package is standard way to write redux logic

redux store is big whole object and kept in central global place and any component can access this redux store

we can keep our entire data in redux store because redux store has slices

slice is small portion of the redux store

for suppose we create a separate slice for cart data which cart slice

user slice

theme slice

this cart slice will have all the data of the cart

how does the data go to cart slice

we cannot add directly or modify the cart slice

when we click on the add item, it dispatch an action, this action calls a function and the function modify or updates the cart slice

this function is basically known as the reducer

now read data for cart slice

for reading data we use selector to read the data from store and modify the react component

this is subscribe to the store, where if data in store changes my component updates

we subscribe to the store using a selector

install redux tool kit

install react redux

first build our own store in the utils appStore.js

now provide this store to our application

now find the root of the application

and connect the store and root of the application using provider that comes from react-redux and pass the store to the provider as props

now create cart slice using createSlice and we pass configuration like initialstate like initial state of the cart, and then reducers where it can contain additem reducer etc.. which modifies the slice of the cart, reducer gets the access to initial state and also gets access to the action and it will modify the state based on the action

when we click on add item we get payload

now we will export our actions and reducers

now add the slice to the store

store also has a reducer for it and this reducer combines the reducers of these slices

basically a reducer is nothing but which modifies soemthing like slice or store

so slice has its reducers and store has its reducer

we use selector to read from the slice

its a hook

this hook gives access to the store

subsribing to the store using selector

we tell to the selector what portion of the store we need access to

now in itemlist we can add item by clicking add item button ..on click of it we first dispatch an action using useDispatch given by hook

chapter12

time for test

why to write test cases

different type of testing for developer
unit testing
integration testing
end to end testing

unit testing
test react components in isolation

integration
testing the integration of the components

end to end
all the flows

as a dev we are concerned about unit and integration testing

libraries for testing

react testing library

react testing library was build on top of dom testing library

react testing library uses jest which is js testing framework

install react testing libraray
install jest
install babel dependency
npm i -D @babel/preset-react to make jsx work in test cases
include babel preset inside babel config
install @testing-library/jest-dom

now create babel.config.js and copy from react testing library page

now create .parcelrc and copy from parceljs.org to disable default babel transpilation

now do npx jest --init

when we run test cases they will not run in server or google chrome so they need a env to run where this test cases will be executed. for this we need js dom

its not a browser but it will have features like browser

its like a browser which gives super powers of browser

now install jsdom library from testing-library

test function takes string and call back function

whenever we testing an ui component inside react, we need to render component to the jsdom

### promises

two async functions one is create order and proceed to payment

one should happen after another

using callbacks for eg

createOrder(cart, function(){
proceedtopayment(orderid)
})

here we are calling the callback function back once the order is create using the orderid

here the issue is inversion of control

here we are passing the callback function to the createorder api and now we are relaxing

what if our call back function is called twice or not at all called

this createorder can be some other external world

to handle this situations we can use promises

const promise = createOrder(cart);

when the returned promise object filled with data, then the then method executes and call back will be called

the promise object can be only resovled once either resolved or rejected

3 states can be possible pending, fulfilled, rejected

promise objects are immutable, someone cannot mutate the data

what is a promise - promise object is a placeholder for a certain period of time unitl we receive some value from the asyncronous operation or container for a future value or representing an eventual completion of an async operation

always return data or promise , use return

from then we can return a promise or a data

from then if we return data or promise, then in the next then data or data from promise sits in the argument of the callback function in that then

async await

async is a keyword used before function to create a async function

async function always returns a promise

if we return a value, then it automatically wrapped in promise

async and await combo used to handle promises

await use only with async function

use await before promise so that await will resolve the promise and will give the resolved value

when the callstack sees async function with await inside, so it will move this outside the callstack and rest of the code or functions will execute and once the await resolves then it executes
