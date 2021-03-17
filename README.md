# REST_API

a simple JSON API for managing event Tickets.
<br>

## Setup

Create MongoDB and node Container with

```bash
$ docker-compose up -d
```

<br>

## Usage

RequestsURL:

```
localhost:3000/tickets
```

<br>

## Documentation

The ticket schema contains 3 fields:

```bash
artists: String (required)

location: String (required)

eventDate: Date (default: Date.now())
```

## GET all tickets

Simple GET request to localhost:3000/tickets
<br>
<br>

## GET single ticket

GET localhost:3000/tickets/:id
<br>
<br>

## Create new ticket

POST localhost:3000/tickets

```bash
Body: {
  "artist": "Name"
  "location: LocationName"
}
```

## Delete single ticket

DELETE localhost:3000/tickets/:id
<br>
<br>

## Update artist of a ticket

PATCH localhost:3000/tickets

```bash
Body: {
  "artist": "newName"
}
```

Change body to location/date to change effected field
