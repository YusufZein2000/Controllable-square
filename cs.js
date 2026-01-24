let square = document.getElementById("MySquare")
let x = 0
let y = 0
let z = 0
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
        y -= 10
    }
    else if (event.key === "ArrowDown") {
        y += 10
    }
    else if (event.key === "ArrowRight") {
        x += 10
    }
    else if (event.key === "ArrowLeft") {
        x -= 10
    }
    else if (event.key === "b"){
        z += 10
    }
    else if (event.key === "f"){
        z -= 10
    }
    square.style.transform = `translate(${x}px, ${y}px)`
})