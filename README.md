# Real-Time Chat Application

A simple chat application using raw WebSockets in Node.js with the following features:

## Features

### Admin
- Create a chat room with configurable properties:
  - **Name**: Room title.
  - **Start Time**: Session start time.
  - **Is Open**: Indicates if the room is active.
  - **Cool Down Time**: Limits message posting frequency.

### Users
- Join chat rooms and send messages.
- Upvote messages:
  - Messages with **3+ upvotes** move to a separate section.
  - Messages with **10+ upvotes** alert the admin for a response.

This application ensures a real-time and interactive chat experience.
