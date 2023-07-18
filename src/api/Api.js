import React from "react";
import axios from "axios";

axios.get("https://api.github.com/users/vijit200").then((response)=>{console.log(response.data);})

function fetchDataFromApi(user) {
    
}