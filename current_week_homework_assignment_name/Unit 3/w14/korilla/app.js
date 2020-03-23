const receipt1 =
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  }
const receipt2 = {
  person: 'Jerrica',
  order: {
    main: 'Rice Bowl',
    protein: 'Ginger Soy Chix',
    rice: 'Sticky Rice',
    sauce: 'Korilla',
    toppings: [
      'Yuzu Pickled Sweet Pepper', 'Kale'
    ],
    drink: 'Korchata',
    cost: 19
  },
  paid: false
}
const receipt3 = {
  person: 'Matt',
  order: {
    main: 'Salad Bowl',
    protein: 'Organic Tofu',
    rice: 'none',
    sauce: "K'lla",
    toppings: [
      'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
    ],
    drink: 'Sparkling Blood Orange Soda',
    cost: 20
  },
  paid: true
}

class Receipt extends React.Component {
    render () {
        return (
            <div>
                <h1>{this.props.receipt.person}</h1>
                <p><span>Main:</span> {this.props.receipt.order.main}</p>
                <p><span>Protein:</span> {this.props.receipt.order.protein}</p>
                <p><span>rice:</span> {this.props.receipt.order.rice}</p>
                <p><span>sauce:</span> {this.props.receipt.order.sauce}</p>
                <p><span>drink:</span> {this.props.receipt.order.drink}</p>
                <p><span>cost:</span> {this.props.receipt.order.cost}</p>
                <p><span>paid?</span> {this.props.receipt.paid ? "YES" : "Not yet"}</p>
            </div>
        )
    }
}
class App extends React.Component {
    state = {
        receipt3: receipt3,
        receipt2: receipt2,
        receipt1: receipt1
    }
    render () {
      console.log(receipt1)
      console.log(receipt2)
      console.log(receipt3)
        return (
            <div>
                <h1>KORILLA</h1>
                <div className="main">
                  {this.state.receipt1.paid ? '' : <Receipt receipt={receipt1}/>}
                  {this.state.receipt2.paid ? '' : <Receipt receipt={receipt2}/>}
                  {this.state.receipt3.paid ? '' : <Receipt receipt={receipt3}/>}
                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector(".container")
)