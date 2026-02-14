const images = [
    "Images/1_NoahWyle.jpg",
    "Images/2_GerranHowell.jpg",
    "Images/3_IsaBriones.jpg", 
    "Images/4_ShabanaAzeez.jpg",
    "Images/5_TaylorDearden.jpg"
];

const descriptions = [
    "Descriptions/1_NoahWyle.txt",
    "Descriptions/2_GerranHowell.txt",
    "Descriptions/3_IsaBriones.txt", 
    "Descriptions/4_ShabanaAzeez.txt",
    "Descriptions/5_TaylorDearden.txt"
];

let currentIndex = 0;


function loadContent() {
    // Update image source for the id=actor element
    $("#actor").attr("src", images[currentIndex]);
    
    // Update the description for the id=actor-desc element.
    // Use ajax to load text from teh current text file and update the element's attribute.
    $.ajax({
        url: descriptions[currentIndex],
        success: function(data) {
            $("#actor-desc").text(data);
        },
        error: function() {
            $("#actor-desc").text("Error loading description.");
        }
    })

    currentIndex = (currentIndex + 1) % images.length;
}


$(document).ready(function() {
    // Document will call loadContent() function every 2 seconds, cycling through images
    loadContent();
    setInterval(loadContent, 2000);
})