# Posfix MakeUofT Project

For a hackathon, my group of 3 including me sought to develop a wearable T-shirt that would monitor your posture and send updates to an app on your phone.

The app would monitor, and rate your posture over a period of time, and give you pointers on how to improve it. 

[![IMAGE_ALT](https://img.youtube.com/vi/M4SF_171kio/0.jpg)](https://www.youtube.com/watch?v=M4SF_171kio)
See video above

I worked on the hardware and data processing side, which meant sourcing and assembling the hardware, and processing the data for the app. I soldered a PCB together which worked with a raspberry PI to read data from 4 IMU sensors placed at strategic points on a shirt, as well as a flex sensor on the lower back.

The Raspberry PI communicated with the IMU's via i2c. I used Python to get the raw 9 axis IMU data, which included accelerometer, gyroscope and magnetometer data and used a Kalman filter to approximate the location and orientation in 3D space.

This was all done in real time, with the data being fed back (in the form of quaternions) to the app using firebase.

[Github](https://github.com/Kojon74/PosFix)
