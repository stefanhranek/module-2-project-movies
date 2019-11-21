# Movie Log

## Description

Users can keep track of all the movies they have watched, and separate the special ones they love into a separate list that can be displayed on their user profile for friends to see. They can customize profile to their liking & display information relating to movies.
 
## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault 
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage so that I see what the app is about and login and signup
- **sign up** - As a user I want to sign up on the webpage so that I can see all the events that I could attend
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account
- **searchpage** - As a user I want to be able to search the page for movies. So that I can make add movies to my list and view detils of each movie. 
- **profilepage** - As a user I want to be able to create and update my personal profile and display my movie stats, lists, profile picture and information. 
- **settingspage** - As a user I want to be able to edit my profile, change my profile picture.
- **movieslistspage** - As a user I want to be able to add movies to "Want to see" list. "Seen" list.
- **moviesdetailspage** - As a user i want to be able to view detail information about a specific movies.





## Backlog

List of other features outside of the MVPs scope

User profile:
- see my profile
- upload my profile picture
- see other users profile
- list of events created by the user
- list events the user is attending

Follow friends:
- views other useres movie lists
- make recomendations

Movies lists:
- possibility to make a custom list of movies

Events:
-create posibility for users to host or attande movie watching events. 
  - **events list** - As a user I want to see all the events available so that I can choose which ones I want to attend 
  - **events create** - As a user I want to create an event so that I can invite others to attend
  - **events detail** - As a user I want to see the event details and attendee list of one event so that I can decide if I want to attend 
  - **event attend** - As a user I want to be able to attend to event so that the organizers can count me in

Edit profile:
-**change email**
-**change password**

-moving the movie from "Want to see" to "Seen" section

Search: 
- **find a movie base of different params e.g. (actor name, director name, year, country, etc)**






## API Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Log in page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | { name,email, password,password again  }                                    |
| `GET`      | `/private/home`            | Private route. Renders `home` form view.             |                                                          |
| `POST`      | `/private/home`            | Sends search info to the server and responds witch a result.            |                                                          |
| `GET`      | `/private/search-result`            | Render movie card partials based on the query params.            |                                                          |
| `GET`      | `/private/profile`            | Private route. Renders `profile` form view.             |                                                          |
| `GET`      | `/private/settings`               | Private route. Render the `settings` view.                  |                                                          |
| `PUT`      | `/private/setings`            | Private route. Sends edit profile info to server and updates user in DB. | { name, quote, [imageUrl] } |
| `GET`     | `/private/movies-list/`           | Private route.Shows a "Want to seen" or "Seen" movies  list.|                         |
| `DELETE`   | `/private/movies-list/` | Private route. Deletes a specifed movie from the current users list. |                                                          |
| `GET`      | `/private/movie-detail/:id`        | Renders a movie with a specific id and shows a detailed page.|                                                          |

## Partials

Movie card
```
{
poster: Image
name: String
year: Number

}
```

## Models

User model
 
```
{
username: String
password: String
email: String
quote: String
follows: [ ]
}
```

____ model

```
{
username: String
password: String
email: String
quote: String
follows: [ ]
}
``` 

## Links

### Trello

[https://trello.com/b/I2u4xr68/ironhack-project-2-film-log]

### Git

The url to your repository and to your deployed project

[https://github.com/stefanhranek/module-2-project-movies]

[Deploy Link](http://heroku.com)

### Slides

The url to your presentation slides

[Slides Link](http://slides.com)

