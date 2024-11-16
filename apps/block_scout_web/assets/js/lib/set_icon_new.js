
document.addEventListener("DOMContentLoaded", async function () {
    

    const tokenAddress = document.querySelector(".get-token-hash-2")?.value; // Optional chaining added in case element doesn't exist

  
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
      document.querySelector(".token-check-icon-2")?.classList.remove("d-none");
    } else {
      // Debug: Log if the address was not found
      console.log("Address not found in the array.");
    }



    
  

  });