
var user_credits = document.getElementById("user-credits");

fetch("user_data.json")
    .then(function(user_data) {
        return user_data.json;  
    })
    .then(function(user_data) {
        return;
    })

user_credits.innerHTML = 10000;