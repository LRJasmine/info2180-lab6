var httpRequest;
var dataString;
var response;
var searchBtn;
var url = "https://5853811f13b3468db0ae9f014813fc21.vfs.cloud9.us-east-1.amazonaws.com/superheroes.php";
window.onload = function (){
    httpRequest = new XMLHttpRequest();
    searchBtn = document.getElementsByClassName("btn")[0];
    searchBtn.addEventListener("click", processing); 
    
    function processing(event){
        event.preventDefault();
        dataString = document.getElementById("query").value.trim();
        url += "?query=" + dataString;
        httpRequest.onreadystatechange = forward;
        httpRequest.open('GET', url);
        httpRequest.send();
    }
    function forward(){
        
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                alert(httpRequest.responseText);
                response = httpRequest.responseText;
                document.getElementById("result").innerHTML = response;
                url = "https://5853811f13b3468db0ae9f014813fc21.vfs.cloud9.us-east-1.amazonaws.com/superheroes.php";

            }
        }
    }
}