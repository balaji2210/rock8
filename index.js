const express = require("express");

const volleyball = require("volleyball");

const axios = require("axios");

const app = express();

const cors = require("cors");

app.use(express.json());

app.use(cors());

app.use(volleyball);

app.get("/products", async (req, res) => {
  const endpointURL = "https://devcore02.cimet.io/v1/plan-list";
  const apiKey = "4NKQ3-815C2-8T5Q2-16318-55301";
  const authToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcGlfa2V5IjoiNE5LUTMtODE1QzItOFQ1UTItMTYzMTgtNTUzMDEiLCJzdWIiOjQzOCwiaXNzIjoiaHR0cHM6Ly9kZXZjb3JlMDIuY2ltZXQuaW8vdjEvZ2VuZXJhdGUtdG9rZW4iLCJpYXQiOjE2ODk0ODc3NjksImV4cCI6MTY4OTQ5ODU2OSwibmJmIjoxNjg5NDg3NzY5LCJqdGkiOiJXcW5FYXlTTFZ1azE5Y1VaIn0.wTgaZMWDKky3qfOlWE0L-f8C-Y6rP_gnvF4DzczQfyQ"; // Replace this with the actual token obtained in the previous step

  const requestBody = {
    session_id:
      "eyJpdiI6IkVNUkZ1N0hlSHhHSnJ3Vjl4aUlxc0E9PSIsInZhbHVlIjoieFlxa1wvVDYxQWl5U2pxMDFcL0R6ZVVvdEN6Mkk0R29TRDN3ZnN0U3VGcER0cEFMa2NVb0xNcDJudjlRTHRUbGJkIiwibWFjIjoiMTE0MmU0MGE5YmJhMzY4Nzc4MDExNmZkNTI1MjZhMGE3OTQyMDZmOTc1MTVmZDM1Mzc3ZmJmNjhmMzllOGYxYSJ9",
  };

  try {
    const { data } = await axios.post(endpointURL, requestBody, {
      headers: {
        "Api-key": apiKey,
        "Auth-token": authToken,
      },
    });
    return res.json({
      data,
    });
  } catch (error) {
    return res.json(error);
  }
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is Running on PORT 5000");
});
