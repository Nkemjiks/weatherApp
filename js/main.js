$(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(imagination);
		
	} else {
		console.log("Geolocation not avaliable");
	}
	function imagination(position) {
		console.log("Location is avaliable");
		let lat = position.coords.latitude;
		let lon = position.coords.longitude;
		$.getJSON(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&APPID=707d4cde32ac20e8e5a0955cb43cfacb`, function(data) {
			console.log(data);
		});

	}

});
