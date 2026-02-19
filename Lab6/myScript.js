

function loadCar(filename) {
    $.ajax({
        url: filename,
        success: function(data) {
    
            document.getElementById("name-col").innerText = data.name;
            document.getElementById("year-col").innerText = data.year;
            document.getElementById("engine-type-col").innerText = data.engine.type;
            document.getElementById("engine-size-col").innerText = data.engine.size;
            document.getElementById("engine-config-col").innerText = data.engine.configuration;
            document.getElementById("car-image").src =  data.imageURL;
        },
        error: function() {
            alert("Error loading car details.");
        }
    });
}



function clearGrid() {
    document.getElementById("name-col").innerHTML = "CAR NAME";
    document.getElementById("year-col").innerHTML = "YEAR";
    document.getElementById("engine-type-col").innerHTML = "ENGINE TYPE";
    document.getElementById("engine-size-col").innerHTML = "ENGINE SIZE";
    document.getElementById("engine-config-col").innerHTML = "ENGINE CONFIG";
    document.getElementById("car-image").src = "no_car.png";
}