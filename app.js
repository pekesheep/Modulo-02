var hotel = {
    turquesa: {
    name: "Hotel Turquesa",
    location: "Ubicado en Tenerife",
    img: "img/Hotel Turquesa.jpg",
    },
    jardines: {
        name: "Hotel Jardines",
        location: "Ubicado en Menorca",
        img: "img/Hotel Jardines.jpg",
    }
}
var rating = {
    rating1: "<span>🧡</span>",
    rating2: "<span>🧡</span><span>🧡</span>",
    rating3: "<span>🧡</span><span>🧡</span><span>🧡</span>",
    rating4: "<span>🧡</span><span>🧡</span><span>🧡</span><span>🧡</span>",
    rating5: "<span>🧡</span><span>🧡</span><span>🧡</span><span>🧡</span><span>🧡</span>",
};

var eleccionHotel
var checkbox;

eleccionHotel = prompt("Escoge un hotel: turquesa o jardines");


document.getElementById("Hotel-Nombre").innerHTML = hotel[eleccionHotel].name;
document.getElementById("Hotel-Ubicacion").innerHTML = hotel[eleccionHotel].location;
document.getElementById("Hotel-image").src = hotel[eleccionHotel].img;


var stars = prompt("Introduce la puntuación del Hotel (1 - 5)");
document.getElementById("Hotel-Rating").innerHTML = rating["rating" + stars];

checkbox = confirm("¿Quieres que la reseña sea anónima?");
document.getElementById("Checkbox").checked = checkbox;
