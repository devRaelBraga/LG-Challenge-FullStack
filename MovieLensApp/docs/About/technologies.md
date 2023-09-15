# Technologies used 

This section will show you the technologies used to create MovieLensApp.


## NestJS

[Nest](https://nestjs.com/) is a powerful and robust NodeJS framework. It allows highly reliable and scalable applications.
I chose Nest due to its high usage and its power, allowing a quick scalability and expansion on applications.
For this application, as it is quite simple, just one module was needed, as there is just one table on Database.

Alongside with NestJS, were used:
- [PrismaORM](https://www.prisma.io/docs) - Used to access and manage Database
- [SQLite](https://www.sqlite.org/index.html) - Used as Database
- [Jest](https://jestjs.io/pt-BR/) - Used to unit tests

## Docusaurus

[Docusaurus](https://docusaurus.io/) is a [React](https://react.dev/) framework focused in documenting applications, 
it allows the use of Markdown
files on React and allows customization and new pages to be created on it. I chose docusaurus because i wanted to use Markdown files
as this app documentation, and because it runs react, i could cutomize and create my own pages.

## Docker

[Docker](https://www.docker.com/) is an open-source platform designed to automate application deployment and manage containerized applications. At its core, Docker uses containers to encapsulate applications and their dependencies, ensuring they run consistently across different environments, from a developer's laptop to a production server. It allows scalability, portability, resource efficiency and is an essential part of DevOps.

In this application, there are two systems working: ```MovieLens API``` and ```MovieLens Client```, each one has its own Dockerfile, configuring enviroment, image and testing(the API). And for a quick build and execution, a ```docker-compose.yml``` file was used to build and run API and Client images.

MovieLens API has a test stage where it runs the test suites and only build the application if it's all passed.
