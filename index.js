document.body.onload = function(){
    let userChose = 0;
    document.getElementById('rock').onclick = function(){
        userChose = 0;
        Check(userChose)}
    document.getElementById('paper').onclick = function(){
        userChose = 1;
        Check(userChose)}
    document.getElementById('scissors').onclick = function(){
        userChose = 2;
        Check(userChose)}}

function Check(userChose) {
    const random = Math.floor(Math.random()*3);
switch (random){
    case 0:
        switch (userChose) {
            case 0:
                tie();
            break;
            case 1:
                won();
            break;
            case 2:
                lost();
            break;
        }break;
    case 1:
        switch (userChose) {
            case 0:
                lost();
            break;
            case 1:
                tie();
            break;
            case 2:
                won();
            break;
        }break;
    case 2:
        switch (userChose) {
            case 0:
                won();
            break;
            case 1:
                lost();
            break;
            case 2:
                tie();
            break;
        }break;}}

const content = document.getElementById('content');
const hiden = document.getElementById('hiden');
function lost() {
    content.innerHTML = '&#10006;<h3 id="hiden-text">U Lost</h3>';
    hiden.style.display = "block";
    content.style.color = "red";
    document.getElementById('hiden-text').style.color = "red";}

function won() {
    content.innerHTML = '&#127942;<h3 id="hiden-text">U won</h3>';
    hiden.style.display = "block";}

function tie() {
    content.innerHTML = '&#129309;<h3 id="hiden-text">Tie</h3>';
    hiden.style.display = "block";
    document.getElementById('hiden-text').style.color = "#008C8C";}

hiden.onclick = function(){
    hiden.style.display = "none";}