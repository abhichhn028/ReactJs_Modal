import React, {Component} from 'react';
import  './Home.css';
import Modal from './Modal';

class Home extends Component {
    state={showModal:false};

    openModel=()=>{
        this.setState({showModal:true});
    };

    closeModel=()=>{
        this.setState({showModal:false});
    };
    render(){
    return (
        <div>
        {this.state.showModal && <Modal closeModel={this.closeModel}/>}
        <div className="main-div">
                <button className="btns" onClick={this.openModel}>Open Modal</button>
        </div>
        </div>
    )
    }
}

export default Home
