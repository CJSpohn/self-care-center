# Self Care Center
## Overview
The Self Care Center is a my unique version of a project assigned to me by the Turing School of Software and Design. The goal is to build an app that 'helps users remind themselves of their inherent value.' Once on the page, a user must log in by entering their name. From there, they are brought to a custom greeting screen.

A user can choose to receive a mantra or an affirmation by selecting the corresponding radio button and clicking 'Receive a message'. Once generated, a user can choose to receive a new message, favorite a message, or delete a message. The application utilizes local storage to retain custom user content until the user either logs out or presses the 'Reset Data' button to manually reset the page data.

The spec for this project can be found [here](https://frontend.turing.io/projects/module-1/self-care-center.html).

#### The following features from the project spec were met within this project

##### Error handling and clear button

- User should not be able to click the "Receive Message" button unless they have selected a message option.
- The user can click a clear button, which clears the page of any message .
- User should only be able to click the clear button if a message is visible.
- When the clear button is clicked and the message is removed, the image of the meditation icon should re-appear.
- If you've added other buttons or inputs, be sure to add some error handling for them as well.

##### User can favorite a message

- When a message appears, it should appear with a "Favorite" button.
- When the "Favorite" button is clicked, that message should be added to a new list of favorite messages.
- Users should be able to view their favorites by clicking a "View Favorites" button that exists somewhere on the page
- When the "View Favorites" button is clicked, users should be taken to a new page that displays all of their favorite messages.
- Users should be able to navigate back to the main page by clicking a button.
- Users should be able to remove a message from their list of favorites, by clicking a button.
- As you add these new elements to the page, be sure to match the style of existing elements.

##### User can delete a message

- Add the ability to delete a message (ie: when a message shows up, show a button that says "I don't like this messge" (or something similar), and remove it from the list so that it will not show up any more. Make sure to alert the user in some way that the message has been removed.

##### Login Page

- Refactor your application so that the user lands on a "Login" page
- The login page should match the style of the application.
- The login page should contain an input for a user to enter their name, and a button to submit.
- After the user clicks the submit button, they should be taken to the main application page, and see a personalized greeting that displays their name and some sort of welcome message.
- The welcome message and name should appear in a logical place of your choosing.

#### Local Storage

- Only do this if you've added the "Favorite a Message" functionality.
- Do some research to utilize Local Storage, so that the user's favorite messages will persist, even if they reload the page.

## Prerequisites

This project does not require any installations in order to run. All functionality exists across browsers.

## Using the app

A user is first greeted with the log screen. In order to proceed, you must enter the name you would like to be referred to by.

<img src="https://user-images.githubusercontent.com/69563078/97226665-ed15dc00-1799-11eb-9000-75b83e1dfd5b.png">

Once on the main page a user can select whether they would like to receive an affirmation or a mantra. Additionally, the app will remember the user and will not require a log in on page refresh.

<img src="https://user-images.githubusercontent.com/69563078/97226668-edae7280-1799-11eb-8d59-0ab250a72616.png">

Upon pressing 'Receive Message', the corresponding self care message will be displayed in place of the meditation logo.

<img src="https://user-images.githubusercontent.com/69563078/97226663-ebe4af00-1799-11eb-8f89-6da70907957f.png">

If a user likes the message, they can click the star next to the message, indicating they want to add it to their favorites. Once added, a user can press 'Favorites' in order to be taken to a new screen that displays all their current favorite messages. Messages can only be unfavorited by clicking the star next to the message once it is displayed.

<img src="https://user-images.githubusercontent.com/69563078/97226664-ec7d4580-1799-11eb-82d8-64c8976f9d23.png">

The project utilizes local storage to remember the name, favorites, and deleted messages of the user. If a user wants to restart the app they can click 'Log Out' on the main page or 'Reset Data' on the favorites display. If a user logs out, all of their saved preferences will be lost.

## Languages

The project was written using HTML, CSS, and Javascript.

### Resources Used
- Atom - text editor
- GitHub - project mangement and workflow
- Online resources

### Authors
Chris Spohn [GitHub](https://github.com/CJSpohn)

[Live site](https://cjspohn.github.io/self-care-center/)
