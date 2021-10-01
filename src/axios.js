import axios from "axios"

const instance = axios.create({
    baseURL: 'https://us-central1-challenge-bc1ba.cloudfunctions.net/api' // THE API (cloud function) URL
    // baseURL: 'http://localhost:5001/challenge-bc1ba/us-central1/api' // THE API (cloud function) URL
});

export default instance;