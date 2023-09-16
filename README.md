# MovieLens App

MovieLens App is a web application that uses the MovieLens dataset to list and recommend movies and display their ratings.

### Technologies
- NestJS
- PrismaORM
- SQLite
- ReactJS
- Docusaurus
- Docker

NestJS and PrismaORM were used to implement the API that provides data to the client. NestJS is a robust framework for NodeJS, with many implementations and tools available for API development. 
PrismaORM is a library for object-relational mapping (ORM), using the SQLite database.

For the client, the Docusaurus framework was used, created by Facebook, which allows the creation of web pages and the use of Markdown files, perfect for implementing project documentation. 
Under the hood, Docusaurus runs React, allowing customization of pages and utilizing all the power that React offers.

To run the systems in the environment, Docker was used. Dockerfiles were created for the API and the Client, and both are executed through docker-compose, which has a configuration file `.yml`.

## Running the Application

To run the application, you need to have Docker installed on your machine.
- [Install Docker Desktop on Windows](https://docs.docker.com/desktop/install/windows-install/)

With Docker installed, run the following in your terminal:



```console
user@desktop:$ git clone https://github.com/devRaelBraga/LG-Challenge-FullStack.git
user@desktop:$ cd MovieLensApp/ 
user@desktop:MovieLensApp$ docker-compose up -d --build
```
After that, the application will be available at [http://localhost:3000](http://localhost:3000)

### Data Processing

Using the dataset from [MovieLens](http://files.grouplens.org/datasets/movielens/ml-25m.zip),
the script `movie-lens-api/src/migrator.js` was used to read the dataset in CSV format, and with the `csv-parser` library, the data was transformed into JavaScript objects. With this, they are inserted into the database using Prisma.

Thus, at the end of the execution, we have a database with a table `FilmeRating` that has the parameters:
- title
- year
- genres
- rating (average rating)
- quantity (quantity of user ratings)


### Making Data Available

MovieLens API makes data available at routes:
- get all movies: GET /
- search movies: GET /search?title=&year=&genre=&top=
- get recommended movies: GET /recomendation

Best recommended movies were sorted using the formula:
```
movieScore = movieRating * quantityRating/2
```

### Consuming Data

Client consumes data on ```localhost:3003``` via fetch shows it to the user on a table.
It's also possible to sort movies by year or by rating, just clicking on Year or Rating table header.

![image](https://i.imgur.com/mZEqZha.png)
