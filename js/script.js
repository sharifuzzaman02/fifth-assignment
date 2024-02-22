// ids of all selected seats
const selectedSeats = [];

// function for buying tickets
function buyTicket(e) {
    const ticket = e.target;
    if (!selectedSeats.includes(e.target.id)) {
        if (selectedSeats.length >= 4) {
            alert('You cannot buy more than 4 seats!')
            return
        }
        ticket.classList.remove('bg-[#F7F8F8]'); // removing the previous bg color
        ticket.classList.add('bg-[#1DD100]', 'text-white'); // adding green bg color and white font color
        selectedSeats.push(e.target.id); // save the seat's id to the selected seats list

        // add seat to the cart list
        addSeatToCart(e.target.id, e.target.innerText);
    }
    else {
        ticket.classList.remove('bg-[#1DD100]', 'text-white'); // removing the green bg color and white font color
        ticket.classList.add('bg-[#F7F8F8]'); // adding prev bg color
        const idx = selectedSeats.indexOf(e.target.id);
        selectedSeats.splice(idx, 1);

        // remove seat from the cart list
        removeSeatFromCart(e.target.id);
    }

    // update the cart items count
    updateCartItemsCount();
}

// function to add seat to cart
function addSeatToCart(id, value) {
    const seatIdOnCart = `cart_${id}`;
    const cartList = document.getElementById('cartList');

    // creating a new div element with seat info to be shown in the cart list
    const newCartElement = document.createElement('div');
    newCartElement.id = seatIdOnCart;
    newCartElement.className = 'flex gap-20 justify-center items-center text-[#03071299]';
    newCartElement.innerHTML = `
        <h2>${value}</h2>
        <p>Finance</p>
        <p>570</p>`;

    // appending the new cart element to the existing cart list
    cartList.appendChild(newCartElement)
}


// function to remove seat from the cart list
function removeSeatFromCart(id) {
    const seatIdOnCart = `cart_${id}`;
    const cartList = document.getElementById('cartList');

    const seatInfoElemOnCart = document.getElementById(seatIdOnCart);
    cartList.removeChild(seatInfoElemOnCart);

}


// function to update count of cart items
function updateCartItemsCount() {
    const cartItemsCountOnCart = document.getElementById('countOfCartItems');
    cartItemsCountOnCart.innerText = selectedSeats.length;
}





// seat blocks
const seatBlocks = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J']

// add event listener for user click on each seat
for (let seatBlock of seatBlocks) {
    for (let i = 1; i < 5; i++) {
        const seatId = `${seatBlock}${i}`;
        const seat = document.getElementById(seatId);
        seat.addEventListener('click', buyTicket);
    }
}


// adding elements to passenger-info-form
{/* <div class="space-y-3">
            <h1 class="font-bold text-base">Passenger Name*</h1>
            <input class="font-medium text-base p-6 rounded-lg w-full border-2" type="text" name="" id=""
              placeholder="Enter your name">
          </div> */}

/* const passengerInfoForm = document.getElementById('passenger-info-form'); */

/* const newElement = document.createElement('div');
newElement.classList.add('space-y-3');
newElement.innerHTML = `
            <h1 class="font-bold text-base">Passenger Name*</h1>
            <input class="font-medium text-base p-6 rounded-lg w-full border-2" type="text" name="" id=""
              placeholder="Enter your name">
`;
passengerInfoForm.appendChild(newElement); */

/* const phoneNumberElement = document.createElement('div');
phoneNumberElement.classList.add('space-y-3');
phoneNumberElement.innerHTML = `
            <h1 class="font-bold text-base">Phone Number*</h1>
            <input class="font-medium text-base p-6 rounded-lg w-full border-2" type="text" name="" id=""
              placeholder="Enter your phone number">
`;
passengerInfoForm.appendChild(phoneNumberElement);
 */


const passengerInfoForm = document.getElementById('passenger-info-form');

const formInfo = [
    {
        title: 'Passenger Name*',
        placeholder: 'name',
    },
    {
        title: 'Phone Number*',
        placeholder: 'phone number',
    },
    {
        title: 'Email ID',
        placeholder: 'email id',
    }
]



function addElemToForm(title, placeholder){
    const newElement = document.createElement('div');
    newElement.classList.add('space-y-3');
    newElement.innerHTML = `
            <h1 class="font-bold text-base">${title}</h1>
            <input class="font-medium text-base p-6 rounded-lg w-full border-2" type="text" name="" id=""
              placeholder="Enter your ${placeholder}">
`;
    passengerInfoForm.appendChild(newElement);
}



for (let elemInfo of formInfo) {
    /* const newElement = document.createElement('div');
    newElement.classList.add('space-y-3');
    newElement.innerHTML = `
            <h1 class="font-bold text-base">${elemInfo.title}</h1>
            <input class="font-medium text-base p-6 rounded-lg w-full border-2" type="text" name="" id=""
              placeholder="Enter your ${elemInfo.placeholder}">
`;
    passengerInfoForm.appendChild(newElement); */
    addElemToForm(elemInfo.title, elemInfo.placeholder);
}



