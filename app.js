var list = document.getElementById("list");
var anim = document.querySelector("#animation");
var input = document.getElementById("inp")
function sendmsg() {
    var val = event.target.value;
    if(event.keyCode === 13)
        {
            list.innerHTML += `<div style="display: flex;"><i style="margin-top: 8px;" class="fa-solid fa-robot"></i>
            <li id="send">${val}</li></div>`;
            anim.style.display = "block";
            if(['hi', 'hey', 'kiya hal ha'].indexOf(val.toLowerCase()) !== -1)
                {
                    setTimeout(function () {
                        list.innerHTML += `<li id="receive">hello</li>`                    
                        anim.style.display = "none";
                    }, 2000)
                }
                input.value = "";
        }       
}