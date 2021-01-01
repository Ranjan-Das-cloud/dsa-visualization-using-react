import React, { Component } from 'react';

class VisualBox extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <div class="card card-spacing-visual" style={{width: 1200,height: 450}}>
                    <div class="card-body">
                        <h5 class="card-title text-md-center mt-2 mb-5">{this.props.title}</h5>
                        <div className="row">
                            <div className="col-md-12 text-md-center">Here We go !!</div>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default VisualBox;