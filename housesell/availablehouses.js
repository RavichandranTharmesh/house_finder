// Function to open the modal and display house details
function openDetails(houseId) {
    // Get the modal elements
    const modal = document.getElementById('houseDetailsModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalPrice = document.getElementById('modalPrice');
    const modalDetails = document.getElementById('modalDetails');
    const modalOwner = document.getElementById('modalOwner');
    const modalContact = document.getElementById('modalContact');
    const modalAddress = document.getElementById('modalAddress');

    // House details data
    const houseDetails = {
        "northern1": {
            title: "Modern Villa - Jaffna",
            price: "$350,000",
            details: "4 Bedrooms, 3 Bathrooms, Spacious garden, Modern interior.",
            owner: "John Doe",
            contact: "0771234567",
            address: "Jaffna, Northern Province, Sri Lanka"
        },
        "northern2": {
            title: "Family Home - Kilinochchi",
            price: "$220,000",
            details: "3 Bedrooms, 2 Bathrooms, Family-friendly neighborhood, Close to schools.",
            owner: "Jane Smith",
            contact: "0772345678",
            address: "Kilinochchi, Northern Province, Sri Lanka"
        },
        "northern3": {
            title: "Luxury Bungalow - Vavuniya",
            price: "$400,000",
            details: "5 Bedrooms, 4 Bathrooms, Private pool, Large garden, High-end finishes.",
            owner: "Alice Green",
            contact: "0773456789",
            address: "Vavuniya, Northern Province, Sri Lanka"
        },
        "eastern1": {
            title: "Luxury Beach House - Trincomalee",
            price: "$500,000",
            details: "5 Bedrooms, 4 Bathrooms, Pool, Beachfront property, Stunning sea view.",
            owner: "Robert Black",
            contact: "0774567890",
            address: "Trincomalee, Eastern Province, Sri Lanka"
        },
        "eastern2": {
            title: "Cozy Cottage - Batticaloa",
            price: "$180,000",
            details: "2 Bedrooms, 1 Bathroom, Perfect for small families, Quiet location.",
            owner: "Sara White",
            contact: "0775678901",
            address: "Batticaloa, Eastern Province, Sri Lanka"
        },
        "eastern3": {
            title: "Spacious Villa - Ampara",
            price: "$450,000",
            details: "4 Bedrooms, 3 Bathrooms, Large garden, Family-friendly, Near amenities.",
            owner: "Michael Blue",
            contact: "0776789012",
            address: "Ampara, Eastern Province, Sri Lanka"
        },
        "colombo1": {
            title: "Luxury Apartment - Colombo",
            price: "$750,000",
            details: "4 Bedrooms, 4 Bathrooms, Sea View, Spacious balcony, Modern interiors.",
            owner: "Sophia Brown",
            contact: "0777890123",
            address: "Colombo, Western Province, Sri Lanka"
        },
        "colombo2": {
            title: "Modern Bungalow - Negombo",
            price: "$400,000",
            details: "3 Bedrooms, 2 Bathrooms, Garden, Quiet residential area, 10 minutes to the beach.",
            owner: "David Grey",
            contact: "0778901234",
            address: "Negombo, Western Province, Sri Lanka"
        },
        "colombo3": {
            title: "Contemporary House - Panadura",
            price: "$500,000",
            details: "5 Bedrooms, 3 Bathrooms, Garden, Close to main roads, Stylish interior.",
            owner: "Eve Purple",
            contact: "0779012345",
            address: "Panadura, Western Province, Sri Lanka"
        },
        "colombo4": {
            title: "Family Home - Kalutara",
            price: "$350,000",
            details: "3 Bedrooms, 2 Bathrooms, Family-friendly, Located near schools and shopping centers.",
            owner: "Liam White",
            contact: "0770123456",
            address: "Kalutara, Western Province, Sri Lanka"
        },
        "southern1": {
            title: "Beachfront Villa - Galle",
            price: "$600,000",
            details: "5 Bedrooms, 4 Bathrooms, Beachfront property, Private pool, Sea views.",
            owner: "Olivia Pink",
            contact: "0771234500",
            address: "Galle, Southern Province, Sri Lanka"
        },
        "southern2": {
            title: "Charming House - Matara",
            price: "$250,000",
            details: "3 Bedrooms, 2 Bathrooms, Quiet street, Close to the beach.",
            owner: "Lucas Red",
            contact: "0772345601",
            address: "Matara, Southern Province, Sri Lanka"
        },
        "southern3": {
            title: "Luxurious Villa - Hambantota",
            price: "$700,000",
            details: "6 Bedrooms, 5 Bathrooms, Large garden, Private beach access.",
            owner: "Grace Yellow",
            contact: "0773456702",
            address: "Hambantota, Southern Province, Sri Lanka"
        },
        "central1": {
            title: "Hilltop Villa - Kandy",
            price: "$450,000",
            details: "4 Bedrooms, 3 Bathrooms, Scenic mountain view, Near cultural sites.",
            owner: "Ethan Gold",
            contact: "0774567803",
            address: "Kandy, Central Province, Sri Lanka"
        },
        "central2": {
            title: "Luxury Bungalow - Nuwara Eliya",
            price: "$500,000",
            details: "5 Bedrooms, 4 Bathrooms, Hill station views, Perfect for relaxation.",
            owner: "Amelia Silver",
            contact: "0775678904",
            address: "Nuwara Eliya, Central Province, Sri Lanka"
        }
    };

    // Get the details for the selected house
    const house = houseDetails[houseId];

    // Populate the modal with the house details
    modalTitle.innerText = house.title;
    modalPrice.innerText = `Price: ${house.price}`;
    modalDetails.innerText = house.details;
    modalOwner.innerText = house.owner;
    modalContact.innerText = house.contact;
    modalAddress.innerText = house.address;

    // Show the modal
    modal.style.display = "block";
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('houseDetailsModal');
    modal.style.display = "none";
}

// Function to simulate sending an interest message (you can integrate with email API if needed)
function sendInterestMessage() {
    alert("Thank you for showing interest! We will get back to you soon.");
}

// availablehouses.js
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});