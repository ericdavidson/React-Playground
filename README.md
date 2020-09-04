## Eric's React Playground

There's nothing special here yet, I'm just using it to learn and create a reference for myself and others on various ways that React components can interact with each other.

If you run the project, the table will be populated with random data and if you click one of the rows it will "update" by re-generating. All of the row data is stored in the state of the App component (src/App.js). The app generates a list of InfoRow components (src/InfoRow.js) that actually display the data. If you click a row of data, there is a callback method in src/App.js that will randomize the row again to simulate updating and saving record data. I will revisit this documentation soon and add visuals as well as more clarifying comments.

To run the project:

> npm start

The documentation/comments represent the initial commit and will be updated as I learn more next week.

<p align="center"><img src="https://github.com/ericdavidson/React-Practice/blob/master/display.png"></p>
