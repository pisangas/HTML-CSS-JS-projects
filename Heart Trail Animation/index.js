const bodyElmnt = document.querySelector("body");

bodyElmnt.addEventListener("mousemove", (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const spanElmnt = document.createElement("span");
    spanElmnt.style.left = x + "px";
    spanElmnt.style.top = y + "px";
    const size = Math.random() * 100;
    spanElmnt.style.width = size + "px";
    spanElmnt.style.height = size + "px";
    bodyElmnt.appendChild(spanElmnt);
    setTimeout(() => {
        spanElmnt.remove();
    }, 3000);
    
})