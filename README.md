# CSI 3150 Final Project Submission W26
### Daniella Luzi | Dashboard | https://daniellaluzi-finalproject-csi3150-f.vercel.app/
# 1. Technical Report & User Manual
#### 1.1 Project Overview
Daniella’s Dashboard is an app that allows the user to find out the weather of a city, top news headlines, and the current time. In addition, one can create a list of tasks to be completed. Users will also be able to switch to a “dark mode,” if they choose. The tasks and the dark/light mode settings will be saved when the page is refreshed. This app provides a simple and convenient way to stay organized, while receiving crucial information.
#### 1.2 Component Architecture
- **App.jsx:** Returns all the components to display on screen. 
- **Header.jsx:** Returns an h1 element for the header of the app.
- **Clock.jsx:** Contains a useEffect hook to update the clock every second. A cleanup function clears the interval when the clock unmounts.
- **ToggleMode.jsx:** Contains a useEffect hook to set localStorage and add/remove the “darkMode” class.
- **ToDoList.jsx:** Contains a useState hook to display tasks.
- **Weather.jsx:** Contains a useEffect hook to display weather on input.
- **News.jsx:** Contains a useEffect hook to display headlines on input.
- **MockNewsData.js:** Contains data in an object array to be used for error handling.
#### 1.3 Detailed Functionality
- **External API:** GNews.io and OpenWeatherMap.org were used for the news articles and weather. For the news, the data that was extracted from the JSON response was: “image, title, description, and URL.” For the weather, the data was: “name, temp, and weather.” This comes from the “main” portion, which gives the temperature and the type of weather (e.g. clouds).
- **Persistence:** localStorage was used to save the tasks in the To-Do List and Dark/Light Mode on refresh.
  - **ToggleMode:** The data is saved in the useEffect hook. It sets the “isDark” variable to be true. If “isDark” is true, then the “Dark Mode” class is added to CSS. If it is false, the class is removed. The data is retrieved in the useState hook because the variable “saved” is getting the item.
  - **To-Do List:** The data is saved in the useEffect hook. It sets the “task” variable with “JSON stringify” to help with changing state. The data is retrieved in the useState hook. It used the “saved” variable to get the item. If it is true, it will show the items because they were in localStorage. If it is false, it will be empty.
- **“Active” Clock:** Uses a useEffect hook to set the time to now. The interval will update every 1000 milliseconds (1 second). clearInterval is used as a cleanup function when the component unmounts. The clock uses .toLocaleTimeString in order to display a 12-hour clock correctly.
- **Global Search:** The global search is used to search the news headlines and the to-do tasks. First, the .filter() method is used to ensure that it is not case-sensitive. Then, toDisplay variables are declared. This will display the filtered items if they are searched, and display everything if nothing is searched. The display box has a value of one of the variables in the useState hook. Then, the set variable in the useState hook is updated onChange.
#### 1.4 User Manual (How to Navigate)
**Local**
- Starting the app locally
  - Open Command Prompt.
  - Ensure the directory is correct for where the project folder is located. Ex: C:\Users\daniellal\OneDrive\Desktop\daniellaluzi-finalproject-csi3150\daniellas-dashboard-final
  - Type “npm run dev”.
  - Copy and paste the URL into the browser.
- Toggle between Dark and Light Mode
  - Click the “🌙” icon for Dark Mode.
  - Click the “☀️” icon for Light Mode.
  - Settings will be saved on refresh.
- To-Do List
  - Type a new task in the “Add a new task!” input box.
  - Click the “Add task” button to add it to the list.
  - Tasks will be displayed in a list with a “✅” icon. Click this to complete the task and remove it from the list.
  - Type a specific task in the “Search tasks!” input box. This will display tasks that match the input, while hiding ones that do not.
- Weather
  - Type a city in the “Enter City!” input box.
  - A sentence with the weather will be displayed after input is typed.
- News
  - Scroll through the displayed news articles. Click the “Read More” link to go to the article's website.
  - Type a keyword to display articles that match.
**Vercel**
- Navigate to https://daniellaluzi-finalproject-csi3150-f.vercel.app/ instead of opening Command Prompt.
- Follow the rest of the steps as shown above.
# 2. Technical Challenges & Solutions
One of the major challenges I faced was the implementation of APIs. At first, I decided to use NewsApi.org. The key for the image in the JSON response is “urlToImage.” I switched to gnews.io. The key for the image in the JSON response is “image.” In order to deal with error handling, I created a mock news data file. I deployed my app on Vercel, and the mock news articles showed up. However, the images of the articles did not. I was confused why all the other aspects showed up except for the image. Running my app locally, the news from gnews.io showed up with the images. 

I checked over my mock data file, and I realized that I did not change the key names after I switched APIs. The mock data file was using a key of “urlToImage,” while the component was returning a key of “image” to the screen. After changing the key name in my mock data file, the images showed up.

I learned about the useEffect hook and how it can be utilized for fetching data from APIs. I also learned more about error handling with a try/catch block. My code tries to fetch the data from gnews.io, and if there’s an error it displays the mock news data instead. The useEffect hook uses a dependency array to ensure that it only renders once. 
# 3. Demo Video Link
https://drive.google.com/file/d/1rUB3f8vNmPZUOu2i3PSLp7LBfn6JiptW/view?usp=sharing








