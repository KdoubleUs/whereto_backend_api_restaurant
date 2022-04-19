## whereTo Back-end

A JSON API built with MongoDB, Express, Javascript, Node, and RESTful routes that display information for the most coveted restaurants, bars, and activity spots in NYC.

## Architectural Pattern
This project uses the MVC design pattern to structure the logic and user flow. The back-end is using a non-relational database, Mongodb/Mongoose to store the data. Because it is non-relational there are no associations. 

## Models
* Bars

* Restaurants

* Activities

## Instructions

1. Clone down this repo.
2. Install dependencies.
3. Seed data to database.
4. Run server.
5. Navigate to front-end on different server port. 


## Clone repository

```
git clone https://github.com/LauraTelqiu/backend_api_restaurant.git
```

## Install Dependencies

```
npm install express mongoose axios
```

## Seed the Data

```
npm run db:seed
```

## Connect to server

```
npm run start
```

## Navigate to front-end
```
http://localhost:3001
```

## API Endpoints

| Method | Endpoint            | Description                  |
|--------|---------------------|------------------------------|
| GET    | /api                | This is the API root.        |
| GET    | /api/restaurants    | Retrieves all restaurants.   |
| GET    | /api/bars           | Retrieves all bars.          |
| GET    | /api/activities     | Retrieves all activities.    |
| GET    | /api/restaurants:id | Retrieves one restaurant.    |
| GET    | /api/bars:id        | Retrieves one bar.           |
| GET    | /api/activities:id  | Retrieves one activity.      |
| PUT    | /api/restaurants:id | Updates one restaurant.      |
| PUT    | /api/bars:id        | Updates one bar.             |
| PUT    | /api/activities:id  | Updates one activity.        |
| POST   | /api/restaurants    | Creates a new restaurant.    |
| POST   | /api/bars           | Creates a new bar.           |
| POST   | /api/activities     | Creates a new activity.      |
| DELETE | /api/restaurants:id | Deletes a single restaurant. |
| DELETE | /api/bars:id        | Deletes a single bar.        |
| DELETE | /api/activities:id  | Deletes a single activity.   |

## Contributors

[![](https://github.com/LauraTelqiu.png?size=100)](https://github.com/LauraTelqiu)
[![](https://github.com/KdoubleUs.png?size=100)](https://github.com/Kdoubleus)
[![](https://github.com/AinsleyB29.png?size=100)](https://github.com/AinsleyB29)

## Contact

If you'd like to learn more or collaborate, feel free to connect with us on LinkedIn.

[Laura](https://www.linkedin.com/in/lauratelqiu/) ✯
[Kevin](https://www.linkedin.com/in/kevinwunyc/)  ✯
[Ainsley](https://www.linkedin.com/in/ainsleybrundage/)

