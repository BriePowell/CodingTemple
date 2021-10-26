import React, {Component} from "react";

export default class Kekembas extends Component {
    constructor(props){
        super(props);

        this.state = {
            students: []
        }
    }
    componentDidMount(){
        fetch('https://kekambas-bs.herokuapp.com/kekambas.json') //add the .json?
            .then(res => res.json())
            .then(data => this.setState({
                students: data.MRData.StudentTable.StudentTable[0]
            }))
    }

    render(){
        return(
            {this.state.students.map((s, i) => <li key={i}> {r.Student.givenName}{</li>)}

        )
    }
}