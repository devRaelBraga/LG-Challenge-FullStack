---
sidebar_position: 3
---

# Architecture

Detailed description of the architecture of the application using the C4 model.

## C4 Model

The C4 Model, comprising Context, Containers, Components, and Code diagrams, offers a structured approach for designing and communicating software architecture. At its core, it provides a hierarchical view of a system's architecture, starting from the high-level context and gradually drilling down to the code level.

### Context Diagram

On the context diagram, we can see external software systems used by this app, as its shown, there is no external software.

![image](https://i.imgur.com/8NpiO1f.png)


### Container Diagram

On the container diagram, we can see the modules of our systems, parts of system that can run independently.

![image](https://i.imgur.com/gG4YwBa.png)

### Component Diagram - API

On this component diagram we can see parts of API module and how they interact with each other. NestJS uses a pattern with Module, Controller and Service.
Modules manages controllers and providers, Controllers manages requests logic and Services are responsible for the business rules and the logic of the system.
As there is just one table, just one module, controller and service were needed.

![image](https://i.imgur.com/p7JKoDG.png)

### Component Diagram - Client

On this component diagram we see the components of Client module, and how they interact.

![image](https://i.imgur.com/SQWWOir.png)

### Database Schema

Just one table was needed, FilmeRating, containing movieID, year, genres, rating and quantity of ratings. SQLite were used as Database.

![image](https://i.imgur.com/CQDO3eA.png)
