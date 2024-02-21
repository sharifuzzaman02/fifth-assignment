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
        addToCart(e.target.id, e.target.innerText);
    }
    else {
        ticket.classList.remove('bg-[#1DD100]', 'text-white'); // removing the green bg color and white font color
        ticket.classList.add('bg-[#F7F8F8]'); // adding prev bg color
        const idx = selectedSeats.indexOf(e.target.id);
        selectedSeats.splice(idx, 1);

        // remove seat from the cart list
        removeSeatFromCart(e.target.id);
    }
}

// function to add seat to cart
function addToCart(id, value) {
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
function removeSeatFromCart(id){
    const seatIdOnCart = `cart_${id}`;
    const cartList = document.getElementById('cartList');

    const seatInfoElemOnCart = document.getElementById(seatIdOnCart);
    cartList.removeChild(seatInfoElemOnCart);
    
}





// seat blocks
const seatBlocks = ['A', 'B', 'C', 'D']

// add event listener for user click on each seat
for (let seatBlock of seatBlocks) {
    for (let i = 1; i < 5; i++) {
        const seatId = `${seatBlock}${i}`;
        const seat = document.getElementById(seatId);
        seat.addEventListener('click', buyTicket);
    }
}
