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

let $trunk = $('<ul>')
$trunk.attr('storage','trunk')

let $trunkItem1 = $('<li>')
$trunkItem1.text('butter beer')
$trunk.append($trunkItem1)

let $trunkItem2 = $('<li>')
$trunkItem2.text('invisibility cloak')
$trunkItem2.addClass('secret')
$trunk.append($trunkItem2)

let $trunkItem3 = $('<li>')
$trunkItem3.text('magic map')
$trunkItem3.addClass('secret')
$trunk.append($trunkItem3)

let $trunkItem4 = $('<li>')
$trunkItem4.text('time turner')
$trunkItem4.addClass('secret')
$trunk.append($trunkItem4)

let $trunkItem5 = $('<li>')
$trunkItem5.text('leash')
$trunk.append($trunkItem5)

let $trunkItem6 = $('<li>')
$trunkItem6.text('Bertie Bott\'s Every Flavor [Jelly] Beans')
$trunk.append($trunkItem6)

$container.append($trunk)





})