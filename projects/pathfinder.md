# Pathfinder - A Route Solver

Pathfinder is a full stack web app being written completely in Rust. The aim is to make not just another Google Flights, but something which takes it a step further. It aims to be able to take a rough itinerary of locations and dates, and find optimal travel dates and flights to meet all constraints, ideally minimizing for flight costs, and hopefully in the future taking other costs into consideration.

When I was thinking about my summer travels earlier this year, there were a number of cities in mind that I (and friends) wanted to visit. I must have spent hours pouring over Google flights prices trying to find what arrangement of flights and hotels and everything would be cheapest, since some arrangements had wildly different total prices. I wanted to create something that will simplify this process a little bit, and I wanted an excuse to learn Rust. 

Ideally one would provide an itinerary to the website like:

1. Tokyo: 1 week, somewhere around July
2. Kyoto: 23 July - 26th ish, meeting a friend
3. Seoul: < 1 week
4. Singapore: 3 days max
5. Bangkok: 5-14 days after the 3rd of August
6. Chiang Mai: 4 days
... and so on

Pathfinder will take the itinerary and provide arrangements that minimize flight costs.

This website is still a work in progress. Find the current progress below, when it's working it will be on this website somewhere.

[Github](https://github.com/dpbaines/route-solver)
![Status](https://github.com/dpbaines/route-solver/actions/workflows/rust.yml/badge.svg?branch=main)

