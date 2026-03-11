
document.querySelector(".go").addEventListener('click', () => {
    var firstname = document.querySelector(".firstname");
    var surname = document.querySelector(".surname");
    var image = document.querySelector(".image");
    var date = document.querySelector(".date");
    var number = document.querySelector(".number");


    var params = new URLSearchParams();
    params.set("firstname", firstname.value);
    params.set("surname", surname.value);
    params.set("image", image.value);
    location.href = "id.html?" + params;
    params.set("date", date.value);
    params.set("number", number.value);
});

