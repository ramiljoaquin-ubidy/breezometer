# breezometer - Air Quality React App

## Getting Started

```
npm install
```

## Running the app

Now, you are in conditions to run the app. Run the following command:

```
npm start
```

Go to your browser, and write: http://localhost:3000/ you will see the app running.



In case the API responds with an error, the app should display an appropriate message.

# Cleanse route - How To:

The following is a high level description of an algorithm you could utilise to implement a cleanest route solution:

Assumption/ pre requests: get the geolocation array/segments for each of the alternative routes (supplied by a route provider such as Google, Here,etc..)

For each route you should calculate the route “source” following the following steps:

## Calculate pollution exposure

- If the segment/geolocation is within the current hour, use AQI current condition AQI, if more then 1 hour then use AQI forecast according to the expected time for reaching that segment.

- For each pollutant divide the AQI by the segment duration . and accumulate the total concentration exposure for the route → sum (for each pollutant the concentration \* the segment duration).

- Normalize the total route exposure concentration to 1 hour - >Total exposure/route time.

- Check for each segment if the segment BAQI is lower then BAQI 60 ( The WHO threshold for good/bad air quality).

- If the BAQI is more or equal than 60, then add to the total good exposure 1/(number of segments).

- Now you have for each route the percentage of exposure of clean/bad AQI, and if you would like to show additional details you have for each route the pollutants intake
