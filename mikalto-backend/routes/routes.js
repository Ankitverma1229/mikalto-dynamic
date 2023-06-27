
import * as data from "../database/data.js"

import { formData } from "../modules/getFormData.js";

import { parse } from "querystring";

export function getRequestData(req) {
  let status = 200;
  if (req.url === "/") {
    return JSON.stringify({
      //   status,
      text: "Welcome to api",
    });
  } else if (req.url === "/heroSection") {
    return JSON.stringify({
      // status,
      heroSection: data.heroSection,
      message: "heroSection data",
      Sucess: true
    });
  } else if (req.url === "/welcomeSection") {
    return JSON.stringify({
      // status,
      welcomeSection: data.welcomeSection,
      message: "welcomeSection data",
      Sucess: true
    });
  } else if (req.url === "/roomsSection") {
    return JSON.stringify({
      // status,
      roomsSection: data.roomsSection,
      message: "roomsSection data",
      Sucess: true
    });
  } else if (req.url === "/activitiesSection") {
    return JSON.stringify({
      // status,
      activitiesSection: data.activitiesSection,
      message: "activitiesSection data",
      Sucess: true
    });
  } else if (req.url === "/experienceSection") {
    return JSON.stringify({
      // status,
      experienceSection: data.experienceSection,
    });
  } else if (req.url === "/helloSection") {
    return JSON.stringify({
      // status,
      helloSection: data.helloSection,
    });
  } else if (req.url === "/ratingSection") {
    return JSON.stringify({
      // status,
      ratingSection: data.ratingSection,
    });
  } else if (req.url === "/joinUsSection") {
    
    return JSON.stringify({
      // status,
      joinUsSection: data.joinUsSection,
    });
  }
   else if (req.url === "/post-data") {
     formData(req);
  }
 
   else {
    console.log(req.url);
    return JSON.stringify({
      message: "Successfully Connected",
    });
  // formData(req);

  }
}