import React, { Component } from "react";
import Card from "./components/friendCard";
import Wrapper from "./components/wrapper";

import Header from "./components/header";
import friends from "./friends.json";

class App extends Component {

  state = {
    friends,
    chosen: [],
    points: 0,
  };

  shuffleImages = (array) => {
    for (let i = 0; i < array.length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return (array)
}

finishGame = () => {
    if (this.state.points < 11) {
        alert('Try again Loser!')
    }
    else {
        alert('Congrats you are the big winner! Go Again')
    };
    this.state.points = 0;
    this.state.chosen = [];
    //this.render()
    //this.setState({ friends });
}

clickImage = id => {
    if (this.state.points < 11){

        if (this.state.chosen.includes(id)) {
            this.finishGame()
        }
        else {
          var oldChosen = this.state.chosen
          console.log(oldChosen)
          var newChosen = oldChosen.push(id)
          console.log(newChosen, "NewChosen")
          var oldOrder = this.state.friends
          var newOrder = this.shuffleImages(oldOrder)
          this.setState({
            points: this.state.points +1,
            friends: newOrder,
            chosen: newChosen

          })
            //this.state.points ++;
           // this.state.chosen.push(id);
          //   this.shuffleImages()
        }
    }
    else {
        this.finishGame()
    }
}

  render() {
    console.log(this.state)
    return (
      <div><Header>{this.state.points}</Header>
      <div id="cards">
          {this.state.friends.map((image, i) => {
         return ( <Card
              clickImage={this.clickImage}
              id={image.id}
              key={i}
              image={image.image}
            />)
          })}
      </div>
      <Wrapper></Wrapper>
      </div>
    );
  }

  
  
}

export default App;
