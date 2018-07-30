/*
  Date: 07.30.2018
  Source: https://www.codewars.com/kata/drone-fly-by/train/javascript
*/

const flyBy = (lamps, drone) => {
  let dronePath = drone.split("=").length;
  let lights = lamps.substring(0, dronePath).replace(/x/g, "o");

  return lights + lamps.substring(lights.length, lamps.length);
}
