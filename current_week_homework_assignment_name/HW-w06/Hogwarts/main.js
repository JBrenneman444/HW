$(() => {
let $container = $('#container')

let $h1 = $('<h1>')
$h1.text('Filler text')
$container.append($h1)

let $h2 = $('<h2>')
$h2.text('Jake Brenneman')
$container.append($h2)

let $h3 = $('<h3>')
$h3.text('Slytherin')
$container.append($h3)

let $h4Pet = $('<h4>')
$h4Pet.text('Plop')
$h4Pet.addClass('toad')
$container.append($h4Pet)

let $h4Wand = $('<h4>')
$h4Wand.text('Blackthorn Wand')
$container.append($h4Wand)



})