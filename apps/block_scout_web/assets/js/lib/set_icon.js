import axios from "axios"
document.addEventListener("DOMContentLoaded", async function () {
    const dynamicIcon = document.getElementById("token-icon-updated");
    const currentIcon = document.getElementById("token-icon");

    const tokenAddress = document.getElementById("get-token-hash")?.value; // Optional chaining added in case element doesn't exist

    // Define the array of valid addresses to check against
    const arr = [
      "0x2493ac3c7792019dfdf796ab58e5f953d6c45021",
      "0x89dBb770A4c3ca78c1dCC391FECe013D1C7b4a69",
      "0xA2723B7163Cd6AFd54520530b80A1028126aEb6F"
    ];
    
    // Debug: Log the tokenAddress and the first element of the array
    console.log(tokenAddress?.toLowerCase(), arr[0].toLowerCase(), "tokenAddress");
    
    // Check if the tokenAddress is in the array, case-insensitively
    if (arr.some(address => address.toLowerCase() === tokenAddress?.toLowerCase())) {
      // Debug: If match found, log a message
      console.log("Address found! Displaying the check icon.");
    
      // Remove the "d-none" class from the element with the ID "token-check-icon"
      document.getElementById("token-check-icon")?.classList.remove("d-none");
    } else {
      // Debug: Log if the address was not found
      console.log("Address not found in the array.");
    }


   
  
    const addrs = dynamicIcon.getAttribute("data-address-hash");
  
    let apiUrl = "https://dscscan.io/node-api/get-token-image";
    let requestData = {
      address: addrs.toLowerCase()
    };
  
    try {
      const response = await axios.post(apiUrl, requestData);

      const data = response.data;
      console.log(data.data[0].imageurl, "data");
      if(data.status==true){
      const imgElement = document.createElement("img");
      imgElement.src = `${data.data[0].imageurl}`; // Replace with your image URL
      imgElement.alt = "token";
      imgElement.width = 20;
      imgElement.height = 20;
      dynamicIcon.appendChild(imgElement);
      // currentIcon.setAttribute("data-display-token-icons","false");
      currentIcon.style.display = "none"
      }else{
        currentIcon.setAttribute("data-display-token-icons","true")
      }
    } catch (error) {
      console.error("Error fetching token image:", error);
    }
  });