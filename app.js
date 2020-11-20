const ipNumber = document.getElementById("stat-number");
const locationName = document.getElementById("location");
const timezoneStat = document.getElementById("timezone");
const ispStat = document.getElementById("isp");





const map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 16
});

const myIcon = L.icon({
    iconUrl: 'images/icon-location.svg',
    iconSize: [40, 50],
    iconAnchor: [20,50],
   
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'}).addTo(map);
const marker = L.marker([51.505, -0.09] ,{icon: myIcon}).addTo(map);



async function initialize(url){
    const result = await fetch(url);
    const data = await result.json();
    const lat = data.location.lat;
    const lng = data.location.lng;


    marker.setLatLng([lat, lng]);
    map.setView([lat,lng], 16);

    ipNumber.innerHTML = data.ip;
    locationName.innerHTML = ` ${data.location.country}, ${data.location.city}`;
    timezoneStat.innerHTML = data.location.timezone;
    ispStat.innerHTML = data.isp;

}

function Submit(){
    let input = document.getElementById("text-input").value;
    console.log(input);
    initialize(`https://geo.ipify.org/api/v1?apiKey=at_OmkDkxIJ4Ayu8F9Ava8rCYMNDYVfd&ipAddress=${input}`);
}


initialize("https://geo.ipify.org/api/v1?apiKey=at_OmkDkxIJ4Ayu8F9Ava8rCYMNDYVfd&ipAddress=");