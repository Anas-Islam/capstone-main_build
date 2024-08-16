const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');
const nathan = document.getElementById('Nathan');
const secret_button = document.getElementById('secret_button');
const profile_boxes = document.getElementsByClassName('profile-box');
const profile_info = document.getElementsByClassName('profile-info');
const dark_mode_button = document.getElementById('dark_mode');
const text = document.getElementsByClassName('short_desc')

function secretClick(){
    window.open("https://www.youtube.com/watch?v=xvFZjo5PgG0", "_blank");
}

function dark_mode(){
    document.body.style.backgroundColor = "#00041A";
    for(i = 0; i < profile_boxes.length; i++){
        profile_boxes[i].style.border = "2px solid gray";
        profile_boxes[i].style.backgroundColor = "black";
        profile_info[i].style.color = "white";
        text[i].style.color = "white";
    }
}

dark_mode_button.onclick = dark_mode;
secret_button.onclick = secretClick;




