import React from 'react';

class DropDown extends React.Component {
    state = {
        values: []
    }
    componentDidMount() {
       fetch('json.json')
        .then(function(res) {
            return res.json();
        }).then(function(json) {
            this.setState({
               values: json
            })
        });
    }
    render(){
        return <div className="drop-down">
            <p>I would like to render a dropdown here from the values object</p>
              <select>{
                 this.state.values.map((obj) => {
                     return <option value={obj.id}>{obj.name}</option>
                 })
              }</select>
            </div>;
    }
}

export default DropDown;