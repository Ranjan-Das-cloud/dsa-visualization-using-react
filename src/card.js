import React, { Component } from 'react';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="card" style={{width: 300,height: 450}}>
                <img class="card-img-top" src={this.props.pic} style={{height: 200}} alt="Card image cap"></img>
                <div class="card-body">
                    <h5 class="card-title">{this.props.title}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
         );
    }
}
 
export default Card;