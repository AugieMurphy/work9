var area = document.getElementById("one");


var clearThis = function(e){
    area.removeChild(e.target);
    console.log(this);
    e.stopPropagation();
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    area.appendChild(circle);
    circle.setAttribute("r", 10);
    circle.setAttribute("cx", Math.random()*490);
    circle.setAttribute("cy", Math.random()*490);
    circle.addEventListener("click", changeColor);
}

var changeColor = function(e){
    this.setAttribute("fill", "red");
    e.stopPropagation();
    this.addEventListener("click", clearThis);
}

var clicky = function(e){
    circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    area.appendChild(circle);
    circle.setAttribute("r", 10);
    circle.setAttribute("cx", e.offsetX);
    circle.setAttribute("cy", e.offsetY);
    circle.addEventListener("click", changeColor);
}

area.addEventListener("click", clicky);
