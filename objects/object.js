var phone = {
    brand: "Apple",
    model: "iPhone 13",
    color: "Black",
    storage: "128GB",
    is5GCapable: true,
    displayInfo: function() {
        return `This is a ${this.color} ${this.brand} ${this.model} with ${this.storage} of storage.`;
    },
    toggle5G: function() {
        this.is5GCapable = !this.is5GCapable;
    }
};

phone.brand = "Samsung";
phone.model = "Galaxy S21";
phone.color = "Silver";
phone.storage = "256GB";

var phoneDetails = document.querySelector('#phoneDetails');
console.log(phoneDetails)

var showPhoneDetails = document.querySelector('#showPhoneDetails');

showPhoneDetails.onclick = function() {
    if(phoneDetails.style.display === "none") {
        phoneDetails.style.display = "block";
        phoneDetails.innerHTML = `
        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvbmV8ZW58MHx8MHx8fDA%3D" alt="Phone Image"/>
        <p>${phone.displayInfo()}</p>
        <p>5G Capable: ${phone.is5GCapable}</p>
    `
    } else {
        phoneDetails.style.display = "none";
    }
};

