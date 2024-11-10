document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});


// Store favorite houses in localStorage
let favoriteHouses = JSON.parse(localStorage.getItem('favorites')) || [];

// Function to open modal and display house details
function openModal(houseId) {
    const houseData = getHouseData(houseId);
    const modal = document.getElementById('houseDetailsModal');
    document.getElementById('modalTitle').textContent = houseData.title;
    document.getElementById('modalPrice').textContent = `Price: $${houseData.price}`;
    document.getElementById('modalDetails').textContent = houseData.details;
    document.getElementById('modalLocation').textContent = houseData.location;
    document.getElementById('modalDate').textContent = houseData.comingDate;
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    document.getElementById('houseDetailsModal').style.display = 'none';
}

// Get house data (you can modify this with real data or API)
function getHouseData(houseId) {
    const houseData = {
        house1: {
            title: 'Modern Villa in Downtown',
            price: '750,000',
            details: '4 Bedrooms, 3 Bathrooms, Pool, Garage',
            location: 'Downtown City, NY',
            comingDate: 'January 2025'
        },
        house2: {
            title: 'Spacious Family Home',
            price: '450,000',
            details: '3 Bedrooms, 2 Bathrooms, Garden',
            location: 'Greenfield, TX',
            comingDate: 'March 2025'
        },
        house3: {
            title: 'Luxury Apartment with Sea View',
            price: '1,200,000',
            details: '2 Bedrooms, 2 Bathrooms, Balcony',
            location: 'Greenfield, TX',
            comingDate: 'november 2025'
        },
        house4: {
            title: 'Cozy Cottage by the Lake',
            price: '320,000',
            details: '2 Bedrooms, 1 Bathroom, Garden',
            location: 'Greenfield, TX',
            comingDate: 'september 2025'
        },
        house5: {
            title: 'Contemporary Loft in City Center',
            price: '600,000',
            details: '3 Bedrooms, 2 Bathrooms, Garden',
            location: 'Greenfield, TX',
            comingDate: 'auguest 2025'
        },
        house6: {
            title: 'Charming Cottage in the Countryside',
            price: '400,000',
            details: '3 Bedrooms, 2 Bathrooms, Fireplace',
            location: 'Greenfield, TX',
            comingDate: 'March 2025'
        },
        // Add other houses similarly...
    };
    return houseData[houseId];
}

// Function to add house to favorites from the modal
function addToFavoritesFromModal() {
    const houseId = document.getElementById('modalTitle').textContent;
    addToFavorites(houseId);
    closeModal(); // Close the modal after adding to favorites
}

// Function to add house to favorites
function addToFavorites(houseId) {
    if (!favoriteHouses.includes(houseId)) {
        favoriteHouses.push(houseId);
        localStorage.setItem('favorites', JSON.stringify(favoriteHouses));
        alert(`${houseId} added to favorites!`);
    } else {
        alert(`${houseId} is already in your favorites.`);
    }
}

// Optional: Function to display favorites on a separate page (e.g., a favorites page). 
// You could create a new page to list the saved favorites from localStorage.
function showFavorites() {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    console.log(favorites); // Or display it in a list on the page
}