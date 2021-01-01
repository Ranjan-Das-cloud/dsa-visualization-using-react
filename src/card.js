import React, { Component } from 'react';
import Radio from './radio';

class Card extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="card card-spacing" style={{width: 300,height: 450}}>
                <div class="card-body">
                    <h5 class="card-title text-md-center mt-2 mb-5">{this.props.title}</h5>
                    <ul>
                        <Radio name="Linear Search" type="ls"/>
                        <Radio name="Binary Search" type="bs"/>
                        <Radio name="Bubble Sort" type="bsort"/>
                        <Radio name="Insertion Sort" type="isort"/>

                    </ul>
                </div>
            </div>
         );
    }
}
 
export default Card;