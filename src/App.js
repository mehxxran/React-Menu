import React from 'react';

class DropDown extends React.Component {
    state = {
        values: []
    }
    componentDidMount() {
       fetch('https://gist.githubusercontent.com/keeguon/2310008/raw/bdc2ce1c1e3f28f9cab5b4393c7549f38361be4e/countries.json')
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
           
              <select>{
                 this.state.values.map((obj) => {
                     return <option value={obj.name}>{obj.code}</option>
                 })
              }</select>
            </div>;
    }
}

export default DropDown;