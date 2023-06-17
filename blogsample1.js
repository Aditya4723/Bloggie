// Get the search button element and search input element
const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

// Function to handle search button click
function handleSearch() {
  const searchQuery = searchInput.value;
  // Implement your search functionality here
  console.log("Search query:", searchQuery);
}

// Add event listener to the search button
searchButton.addEventListener("click", handleSearch);