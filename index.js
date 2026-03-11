
document.querySelector(".go").addEventListener('click', () => {
    var firstname = document.querySelector(".firstname");
    var surname = document.querySelector(".surname");
    var image = document.querySelector(".image");
    var birthdate = document.querySelector(".birthdate");
    var pesel = document.querySelector(".pesel");


    var params = new URLSearchParams();
    params.set("firstname", firstname.value);
    params.set("surname", surname.value);
    params.set("image", image.value);
    location.href = "id.html?" + params;
    params.set("birthdate", date.value);
    params.set("pesel", number.value);
});


