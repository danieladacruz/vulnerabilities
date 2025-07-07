const key = "sk_live_1234567890abcdef";

function fetchUserData(userId: string) {
  const url = `https://api.example.com/users/${userId}`;
  
  fetch(url, {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${key}`,
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log("User data retrieved:", data);
  })
  .catch(error => {
    console.error("Failed to fetch user data:", error);
  });
}

// Simulate usage
fetchUserData("12345");