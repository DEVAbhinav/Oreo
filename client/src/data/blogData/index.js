// Path: client\src\data\serverData\index.js

// Import data from folders

import dataAbout from "./about.json";
import dataKashi from "./Kashi-Vishwanath-Darshan.json";
import dataPlaces from "./placesVisit.json";
import dataCarRental from "./carHire.json";
import dataTaxiService from "./taxi-and-cab-booking-service-in-varanasi.json";
import dataVidhayanchal from "./vindhayachal.json";
import dataAllahabad from "./allahabad.json";
import dataGaya from "./gaya.json";


const blogData = {
    
// Serving of Data From Backend
"about": dataAbout,
  
  "kashiVishwanath": dataKashi,
  
  "places": dataPlaces,
  
  "carRental": dataCarRental,
  
  "taxiService": dataTaxiService,
  
  "vindhyachal": dataVidhayanchal,
  
  "allahabad": dataAllahabad,
  
  "gaya": dataGaya

}

export default blogData;