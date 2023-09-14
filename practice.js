let mainheading  = document.getElementById("mainheading");
let secondheading = document.getElementById("secondheading");
let divelem  = document.createElement("div");
let text = document.createTextNode("This is a text node");
divelem.appendChild(text);
document.body.insertBefore(divelem, secondheading);

divelem.addEventListener("click", function(){
    let nooftextarea = document.getElementsByTagName("textarea").length
    if(nooftextarea == 0){
   let html  = divelem.innerHTML;
    divelem.innerHTML = `<textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea">${html}</textarea>`;
    }

    let textarea = document.querySelector(".form-control");
    textarea.addEventListener("blur", function(){
        divelem.innerHTML = textarea.value;
    })
})