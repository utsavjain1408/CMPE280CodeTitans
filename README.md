# Application Introduction: Titan Pizza
Pizza has become very popular fast food in the modern society. However, pizza places are usually full of people during rush hours since it takes time to cook one. It is very common that a person spends more than 20 minutes in line purchasing a pizza. In order to reduce the waiting time of ordering a pizza, we plan to establish a system to provide platform for customers to order pizza online, so that they can easily pick up their orders at pizza stores and drastically reduce the waiting time.
The objective is to create an interactive online pizza ordering website. It provides many options for customers to choose from available options or customize their own pizza. Customers can also use our application to create an order and get the pizza delivered to an address served by the Titan Pizza team.
Our application allows a potential customer to do the following things :
1. Create a new account. (Sign Up)
2. Login to their account. (Sign In)
3. Find the store location (Using the Google Maps API)
4. View and Edit their profile
5. Delete their account
6. View their past orders
7. Order pizza
   * Order a pre-made pizza
   * Create a custom pizza
8. Log out from the current session

![alt text](https://raw.githubusercontent.com/utsavjain1408/CMPE280CodeTitans/master/ProjectArtifacts/Titan%20Pizza%20Use%20Case%20Diagram.png "Titan Pizza Use Case Diagram")

# Technologies Used in Client-side, Server-side and Data Management 
An MVC application architecture was implemented in order to create a production ready application.

For Client-side: we use the following technologies.
- JQuery : Creating a richer front end experience for a Titan User. 
- AngularJS :  Used to better implement the MVC architecture.
- Pug : Template engine used for rendering web pages
- GoogleMap API : For displaying store location

For Server Side: we use the following libraries.		
- Express : The web application framework which form the bedrock of the Titan Pizza Application.
- Express session : For sessions management in the application
- Connect-Mongo : For storing sessions in MongoDB
- Axios : For making calls to from one controller 
- UUID : For generating unique IDs for objects
- Docker : We have containerised our application. We have two docker containers running in a VM in Google Cloud Platform. One container 

For Backend server and other for DB worker. The containers can be pulled by: 
- DB worker : docker pull utsavjain/titandbworker
```
sudo docker run -p 3000:3000 -d utsavjain/titandbworker  #Runs database worker^
```
-Backend : docker pull utsavjain/titanbackend
```
sudo docker run -p 3050:3050 -d utsavjain/titanbackend  #Runs Frontend^ 
```
^This assumes that the mongodb instance is running in the GCP. 

For Data Management:
- MongoDB
- Mongoose  for mapping
- One Database name “ProductCatalogue” with four collections


Run Application from source
1. Clone the repository
```
git clone https://github.com/utsavjain1408/CMPE280CodeTitans.git
cd CMPE280CodeTitans 
```
2. Start the DBWorker
```
cd DBWorker
npm install
npm start
```
3. Start the Front-End Server
```
cd ../Backend     
npm install
npm start
```

You can also just visit http://35.194.50.254:3050/ and Enjoy TITAN PIZZA!
