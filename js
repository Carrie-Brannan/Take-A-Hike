const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://trailapi-trailapi.p.rapidapi.com/trails/%7Bid%7D/maps/');
xhr.setRequestHeader('X-RapidAPI-Key', 'SIGN-UP-FOR-KEY');
xhr.setRequestHeader('X-RapidAPI-Host', 'trailapi-trailapi.p.rapidapi.com');

xhr.send(data);