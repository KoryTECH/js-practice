var name = prompt(`Enter your name`)
var password = name.split('')
var guestName = [`Korede`,`kory`,`domnic`,`brian`];
if (guestName.includes(password)){
    alert(`Welcome MR ${password}!`)
}
else {
    alert(`Welcome MR uninvited next time you won't be allowed in`)
}
console.log(guestName);