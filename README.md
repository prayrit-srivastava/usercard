>**project**
1. Create a User card grid layout having navbar showing any brand name
2. Add a button in the navbar saying 'Get Users', which makes an API call to get the user data
3. Use https://reqres.in/api/users?page=1 to get the data
4. Show a loader while the API fetches the data.

>**fetching_api**  
For fetching the api I have used the onclick function along with fetch function in try and except block.

>**states**  

I have made two state data(array) and isloading(boolean) where data is used to store the returned data from the api and isloading is a boolean value which is used to show the loader while the api is been fetched.

>**loader**  

for showing the loader I have used ternaray operator in react if the value of isloading will be true the spinner will be displayed else the user card will be displayed.

>**User_Card**  

I have used map function to map every object to the component and passed the different attribute as props and used it to display the cards

>Time taken  
8hr
