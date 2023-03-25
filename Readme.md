1. Build server and client folder and start working from server folder
2.npm init and --save-dev nodemon install
3.pkg.json file make type : module and setup the nodemon
exprss - framework to create our api . to serve our frontend to create an api simply with nodejs
4.cors - setup the rules for the communication b/w frontend and backend when we make api request from our react application to your own server.
5.mongoose will allow us to communicate with the mongodb app
6. further go in the mongodb app 
7.app.use(experss.json()) - this middleware do is that when you send data form the front end it'll convert it into json everytime.
8.app.use(cors()) - make api req from the frontend
9.setup the mongodb make recepe named database which is called table
10.after connection to database we'll set create all models folder which is for collections,models
11.in this we create Schema which tells the structure of our database
12.we create route to have separate endpoint for our api
13. users route will encompass everything related to our logging in and registering route
14.jwt from jsonwebtoken
15.bcrypt 
16. setup the middle routes 
17.login - when you want to login in application you want to create what is known as token which is going to represent your login session . Whenever user in frontend makes the request they need to prove that they are the original user that were logined in so they should send that token to request everytime you make a request you should validate to see if they are validated user that's a whoel concept in web dev . we'll do this jsonwebtoken

18. in our registeration function it was quite simple we setup the post req via axios and send that username and id to the backend where after getting passed to schema it get stored in the database.
19. incase of login we setup the jwt token to check and get the token required for all this. we get token in res and also store the userid in the localstorage.
20. after successful we navigate it to home page and setup the nav bar for it.
21. here we setup the logout page from which we get logout, which'll the data stored in the cookies along with localstorage and redidrect to /auth page.
22.