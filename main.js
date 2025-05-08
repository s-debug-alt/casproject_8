const Oceanview = new room("Oceanview", "(350-450)"); //create room
const adventure = new room("adventure", "(250-350)"); // create room

function handleBooking() { // function to deal with the booking process
	// const name = document.getElementById("name").value; // get name
	// const email = document.getElementById("email").value; //get email
	// const room = document.getElementById("room").value; // get room
	// const date = document.getElementById("date").value; // get date
	let name = $("#name").val()
	let email = $("#email").val()
	let room = $("#room").val()
	let date = $("#date").val()

	const newcustomer = new customer(name, email); // create new obj using name and email
	let selectedr; //variable to hold obj
	if (room === "Oceanview") selectedr = Oceanview; // to math the obj and word
	else if (room === "adventure") selectedr = adventure;
	const reservation = new Booking(newcustomer, selectedr, date); // create a booking obj
	const result = reservation.confirm(); // call the method to book room
	document.getElementById("result").innerText = result; // display results
}
