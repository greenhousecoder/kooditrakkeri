import React from 'react';

import './itemform.css';

class ItemForm extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
        data: {
            koodityyppi: "css",
            pvm: undefined,
            kooditunnit: "2h",
            tehot: undefined,
        }
    
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
      
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
           
         data:{ 
            ...this.state.data, 
            [name]: value

        }}
        );
      }
     
      handleSubmit(event){    // Kun painaa lähetä nappia add.js :ssä tämä käynnistyy
        event.preventDefault();
        console.log("handleSubmit");
      
        this.props.onFormSubmit(this.state.data);
    }

render()
{
    return(   


        <form onSubmit={this.handleSubmit}>
        <label for name="koodityyppi">Koodityyppi</label>
        
        
        <select name="koodityyppi" value={this.state.data.koodityyppi}  onChange={this.handleInputChange}>
        <option value="html">html</option>
        <option value="css">css</option>
        <option value="js">js</option>
        <option value="react">react</option>
        <option value="php">php</option>

        </select>
        <br/>
        
        <label for name="pvm">Päivämäärä</label>
        <input type="date" name="pvm"  value={this.state.data.pvm}  onChange={this.handleInputChange}>
        </input>
        <br/>
        <label for name="kooditunnit">Kooditunnit</label>
        <select name="kooditunnit" value={this.state.data.kooditunnit}  onChange={this.handleInputChange}>
        <option value="1h">1h</option>
        <option value="2h">2h</option>
        <option value="3h">3h</option>
        <option value="4h">4h</option>
        <option value="5h">5h</option>
        <option value="6h">6h</option>
        <option value="7h">7h</option>
        <option value="8h">8h</option>
        </select>
        <br/>
        <label for name="tehot">tehot</label>
        <select name="tehot" value={this.state.data.tehot}  onChange={this.handleInputChange}>
        <option value="0%">0%</option>
        <option value="10%">10%</option>
        <option value="20%">20%</option>
        <option value="30%">30%</option>
        <option value="40%">40%</option>
        <option value="50%">50%</option>
        <option value="60%">60%</option>
        <option value="70%">70%</option>
        <option value="80%">80%</option>
        <option value="90%">90%</option>
        <option value="100%">100%</option>
        
        
        </select>
        <br /><br/>

        <button primary type="submit">Lisää</button>
        <button>Peruuta</button>
      </form>
        ); //return end

}
}

export default ItemForm;