const receipts = [
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
  },
  {
    person: 'Mark',
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
  },
  {
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
]

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
        receipts:receipts
    }
    render () {
      console.log(receipts)
      console.log(receipts[0])
      console.log(receipts[1])
      console.log(receipts[2])

        return (
            <div>
                <h1>KORILLA</h1>
                <div className="main">
                  {this.state.receipts.map(receipt => receipt.paid ? '' : <Receipt receipt={receipt}/>)}

                </div>
            </div>
        )
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector(".container")
)