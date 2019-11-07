var httpRequest = new XMLHttpRequest(); 

var searchBtn;
const url = "https://5853811f13b3468db0ae9f014813fc21.vfs.cloud9.us-east-1.amazonaws.com/superheroes.php";
window.onload = function (){
    searchBtn = document.getElementsByClassName("btn")[0];
    searchBtn.addEventListener("click", superheroes); 
    
    httpRequest.open('GET', url);
    httpRequest.send();
    function superheroes(click) {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
            var response = httpRequest.responseText;
            alert(response);
            }
        }
    }
}