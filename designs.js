
// When size is submitted by the user, call makeGrid()
function makeGrid() {

	// Your code goes here!
	// var colorPicker, inputHeight, inputWidth, grid, rows, box, submitBtn;

	// Select size input
	let inputHeight = $('#input_height').val();
	let inputWidth = $('#input_width').val();

	const grid = $('#pixel_canvas');

	// reset the grid
	grid.children().remove();


	// create by height
	for(i = 0; i < inputHeight; i++) {
		grid.append('<tr></tr>');
	}

 // set rows to the created table rows
	let rows = $('tr');

	// create by width
	for(j = 0; j < inputWidth; j++){
		rows.append('<td></td>');
	}

	let box = grid.find('td');

	//change color of selected box
	box.on('click', function() {
		let colorPicked = $('#colorPicker').val();
		$(this).css('background-color', colorPicked);
	});
}



// update grid (call makeGrid()) when submit is clicked
$(document).ready(function(){
	let submitBtn = $('input[type="submit"]');
	submitBtn.click(function(e) {
		e.preventDefault();
		makeGrid();
	});

});
