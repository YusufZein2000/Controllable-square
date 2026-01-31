let square = document.getElementById("MySquare")
let x = 0
let y = 0
let z = 0
let size = 200
let color = 0
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
    else if (event.key === "s"){
        size -= 10
    }
    else if (event.key === "l"){
        size += 10
    }
    else if (event.key === "c"){
        color += 10
    }
    else if (event.key === "-"){
        color -= 10
    }
    square.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`
    square.style.width = `${size}px`
    square.style.height = `${size}px`
    square.style.filter = `hue-rotate(${color}deg)`
})