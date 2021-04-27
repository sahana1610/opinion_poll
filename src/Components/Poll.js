import React, { Component } from 'react';

class Poll extends Component {

    constructor(props) {
        super(props);
        this.state = {
            yes: 0,
            no: 0
        };
    }

    incrementYesCount = () => {
        this.setState({ yes: this.state.yes + 1 })
    }

    incrementNoCount = () => {
        this.setState({ no: this.state.no + 1 })
    }

    render() {
        const { yes, no } = this.state
        return (
            <div className="vertical-center">
                <h2 class="text-center">
                    Are we confident and ready to take up this initiative?
                </h2>
                <div class="justify-content-between mt-4">
                    <button class="btn btn-success mr-3" onClick={this.incrementYesCount}>YES</button>
                    <button class="btn btn-danger ml-3" onClick={this.incrementNoCount}>NO</button>
                </div>
                <div class="mt-5">
                    <h4>Yes count : {yes}</h4>
                    <h4>No count : {no}</h4>
                </div>
            </div>
            // <div>
            //     <p class="text-center">
            //         This is a Bootstrap 5 example
            //     </p>
            //     <div class="row justify-content-around">
            //         <div class="col">
            //             <button class="btn btn-success " onClick={this.yesCount}>YES</button>
            //         </div>
            //         <div class="col">
            //             <button class="btn btn-danger" onClick={this.noCount}>No</button>
            //         </div>

            //     </div>

            //     <div class="mt-5">
            //         <h4>Yes count : {yes}</h4>
            //         <h4>No count : {no}</h4>
            //     </div>

            // </div>
        );
    }
}

export default Poll;