// intersection

// type z = string & number 

type Colorful = {
    color: string
}

type Circle = {
    radius: number
}

type ColorfulCircle = Colorful & Circle 

function draw (circle: ColorfulCircle) {
    console.log(`Color is ${circle.color}`)
    console.log(`Radius is ${circle.radius}`)
}
draw({color: "blue", radius: 14})