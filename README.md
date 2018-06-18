# full_stack_messaging
COde Challenge 5 for Prime

# Code Challenge 5

Welcome to Code Challenge 5! In this challenge, you are going to build a full stack application. The whole thing. The application you are going to build is a message board. 

Just relax and show us what you know!

## Message Board Application

The message board application you are going to build has the following requirements:

* Read **ALL** instructions before you start
* MUST use Angular and PostgreSQL
* Name your database: `message_board`
* Your Front End should have two inputs. One for the user's name, the other for the user's message. Additionally, there should be a submit button,
* When the submit button is clicked, you must send the name and message from the inputs to the server to be written to an SQL Database
* Once the message has been successfully written to the database, display all messages on the DOM,
* If the application page is reloaded, all previous messages should appear.

### Setup

Name your database: `message_board`

```SQL
CREATE TABLE "messages" (
  "id" serial primary key,
  "name" varchar(120),
  "message" varchar(240)
);

INSERT INTO "messages" ("name", "message")
VALUES ('Dane', 'The busses were really slow today!');
```

### NOTE!

* Use of a service is **OPTIONAL**. Get it working in a Controller first. Add a service if you have time.
* You **do not** need `ngRoute` (client-side routing)
* When you're done please turn in the assignment and work quietly

## Mockup

![Wireframe](images/wireframe.png)



