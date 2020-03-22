class DivOne extends React.Component {
    render() {
      return (
        <div>
          <DivTwo
            changeTardis={this.props.changeTardis}
            tardis={this.props.tardis}
            changeTardis2={this.props.changeTardis2}
            tardis2={this.props.tardis2}
          />
        </div>
      );
    }
  }
  
  class DivTwo extends React.Component {
    render() {
      return (
        <div>
          <DivThree changeTardis={this.props.changeTardis} changeTardis2={this.props.changeTardis2} tardis={this.props.tardis} tardis2={this.props.tardis2}/>
          {/* <DivFour
            changeTardis2={this.props.changeTardis2}
            tardis2={this.props.tardis2} */}
          />
        </div>
      );
    }
  }
  
  class DivThree extends React.Component {
    render() {
      return (
        <div>
            <div className="topTextContainer">
                <h3 onClick={this.props.changeTardis}> {this.props.tardis.name} </h3>
            </div>
            <div className="bottomTextContainer">
                <h3 onClick={this.props.changeTardis2}> {this.props.tardis2.name} </h3>
            </div>
        </div>
      );
    }
  }
  
//   class DivFour extends React.Component {
//     render() {
//       return (
//         <div className="bottomTextContainer">
//           <h3 onClick={this.props.changeTardis2}> {this.props.tardis2.name} </h3>
//         </div>
//       );
//     }
//   }
  
  class App extends React.Component {
    state = {
      tardis: {
        name: "Time and Relative Dimension in Space",
        caps: false
      },
      tardis2: {
        name: "Time and Relative Dimension in Space",
        caps: false
      }
    };
  
    changeTardis = text => {
      let tardis = this.state.tardis.name;
      if (this.state.tardis.caps) {
        this.setState({
          tardis: {
            name: tardis.toLowerCase(),
            caps: false
          }
        });
      } else {
        this.setState({
          tardis: {
            name: tardis.toUpperCase(),
            caps: true
          }
        });
      }
    };
  
    changeTardis2 = text => {
      let tardis2 = this.state.tardis2.name;
      if (this.state.tardis2.caps) {
        this.setState({
          tardis2: {
            name: tardis2.toLowerCase(),
            caps: false
          }
        });
      } else {
        this.setState({
          tardis2: {
            name: tardis2.toUpperCase(),
            caps: true
          }
        });
      }
    };
  
    render() {
      return (
        <div>
          <DivOne
            changeTardis={this.changeTardis}
            tardis={this.state.tardis}
            changeTardis2={this.changeTardis2}
            tardis2={this.state.tardis2}
          />
        </div>
      );
    }
  }
  
ReactDOM.render(
    <App />,
    document.querySelector(".container")
)