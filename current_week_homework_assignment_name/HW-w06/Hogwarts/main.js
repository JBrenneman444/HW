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

let $h5 = $('<h5>')
$h5.text('Spring 2020')
$container.append($h5)

let $table = $('<table>')
$container.append($table)

let $thead = $('<thead>')
$table.append($thead)

let $tableRow1 = $('<tr>')
$thead.append($tableRow1)

let $th1 = $('<th>')
$th1.text("Day")
$tableRow1.append($th1)

let $th2 = $('<th>')
$th2.text("Classes")
$tableRow1.append($th2)

let $tbody = $('<tbody>')
$table.append($tbody)

let $tableRow2 = $('<tr>')
$tbody.append($tableRow2)

let $td1 = $('<td>')
$td1.text("Monday")
$tableRow2.append($td1)

let $td2 = $('<td>')
$td2.text("Herbology, Divination, History of Magic, Charms")
$tableRow2.append($td2)

let $tableRow3 = $('<tr>')
$tbody.append($tableRow3)

let $td3 = $('<td>')
$td3.text("Tuesday")
$tableRow3.append($td3)

let $td4 = $('<td>')
$td4.text("Potions, Transfiguration")
$tableRow3.append($td4)

let $tableRow4 = $('<tr>')
$tbody.append($tableRow4)

let $td5 = $('<td>')
$td5.text("Wednesday")
$tableRow4.append($td5)

let $td6 = $('<td>')
$td6.text("Defense Against the Dark Arts")
$tableRow4.append($td6)

let $tableRow5 = $('<tr>')
$tbody.append($tableRow5)

let $td7 = $('<td>')
$td7.text("Thursday")
$tableRow5.append($td7)

let $td8 = $('<td>')
$td8.text("Charms")
$tableRow5.append($td8)

let $tableRow6 = $('<tr>')
$tbody.append($tableRow6)

let $td9 = $('<td>')
$td9.text("Friday")
$tableRow6.append($td9)

let $td10 = $('<td>')
$td10.text("Quidditch Practice")
$tableRow6.append($td10)


// <p>Simple table with header</p>
// <table>
//   <tr>
//     <th>First name</th>
//     <th>Last name</th>
//   </tr>
//   <tr>
//     <td>John</td>
//     <td>Doe</td>
//   </tr>
//   <tr>
//     <td>Jane</td>
//     <td>Doe</td>
//   </tr>
// </table>



})