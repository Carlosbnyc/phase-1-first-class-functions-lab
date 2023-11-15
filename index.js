// Code your solution in this file!
const returnFirstTwoDrivers = (arrayOfDrivers) => {
  return [arrayOfDrivers[0], arrayOfDrivers [1]];
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
  return [arrayOfDrivers[2], arrayOfDrivers[3]];
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = (ride) => {
return (totalFare) => totalFare * ride; 
}

const fareDoubler = (totalFare) => {
  return createFareMultiplier(totalFare)(2);
}

const fareTripler = (totalFare) => {
  return createFareMultiplier(totalFare)(3);
}

const selectDifferentDrivers = (drivers,firstOrLast) => {
  return firstOrLast (drivers);

}
