import React, { Component, Select } from 'react';
import { Link, Route } from 'react-router-dom';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";




class Home extends Component {
	
	constructor(props){
		super(props);
		 this.state = {
		 	height: '',
		 	width: '',
		 	type: "",
		 	fabric_code: '',
		 	fabric_price: '',
		 	sewing_price: '',
		 	track_price: '',
		 	tiebelt_price: '',
		 	install_price: '',
		 	transport_price: '',
		 	total: '0'
		 }
	
	}

	handleSubmit(event){

	}


	handleChange(event){
		this.setState({ [event.target.name] : event.target.value });
	}

	



		
	render() {
		
		return (
		
		<Form>
			<select name="type" value={this.state.type} onChange={this.handleChange.bind(this)} >
				<option value="" selected disabled hidden>Choose fabric here</option>
				<option value ="cloth">Cloth</option>
				<option value ="cloth2">Cloth 2</option>
				<option value ="sheer">Sheer</option>
				<option value ="sheer2">Sheer 2</option>
				<option value ="snake">Snake </option>
				<option value ="snake2">Snake 2</option>
				<option value ="eyelet">Eyelet</option>
				<option value ="eyelet2">Eyelet 2</option>
			</select>
  			
  			<Form.Group controlId="height">
    			<Form.Label>Height: </Form.Label>
    			<input name="height" value={this.state.height} type="number" step='0.01' placeholder="Enter Height" onChange={this.handleChange.bind(this)} />
  			</Form.Group>

  			<Form.Group controlId="width">
    			<Form.Label>Width: </Form.Label>
    			<input name="width" value={this.state.width} type="number" step='0.01'placeholder="Enter Width" onChange={this.handleChange.bind(this)}/>
  			</Form.Group>

  			<Form.Group controlId="fabric_code">
   		 		<Form.Label>Fabric Code: </Form.Label>
    			<input name="fabric_code" value={this.state.fabric_code} type="number" placeholder="Enter Fabric Code" onChange={this.handleChange.bind(this)}/>
  			</Form.Group>

   			<Form.Group controlId="fabric_price">
   		 		<Form.Label>Fabric Price: </Form.Label>
    			<input name="fabric_price" value={this.state.fabric_price} type="number" step='0.01' placeholder="Enter Fabric Price" onChange={this.handleChange.bind(this)}/>
  			</Form.Group>

  			<Form.Group controlId="sewing_price">
   		 		<Form.Label>Sewing Price: </Form.Label>
    			<input name="sewing_price" value={this.state.sewing_price} type="number" step='0.01' placeholder="Enter Sewing Price" onChange={this.handleChange.bind(this)}/>
  			</Form.Group>

  			<Form.Group controlId="track_price">
   		 		<Form.Label>Track Price: </Form.Label>
    			<input name="track_price" value={this.state.track_price} type="number" step='0.01' placeholder="Enter Track Price" onChange={this.handleChange.bind(this)}/>
  			</Form.Group>
  			<Form.Group controlId="tiebelt_price">
   		 		<Form.Label>Tiebelt Price: </Form.Label>
    			<input name="tiebelt_price" value={this.state.tiebelt_price} type="number" step='0.01' placeholder="Enter Tiebelt Price" onChange={this.handleChange.bind(this)}/>
  			</Form.Group>
  			 
  			 <Form.Group controlId="install_price">
   		 		<Form.Label>Install Price: </Form.Label>
    			<input name="install_price" value={this.state.install_price} type="number" step='0.01' placeholder="Enter Install Price" onChange={this.handleChange.bind(this)}/>
  			</Form.Group>

  			<Form.Group controlId="transport_price">
   		 		<Form.Label>Transport Price: </Form.Label>
    			<input name="transport_price" value={this.state.transport_price} type="number" step='0.01' placeholder="Enter Transport Price" onChange={this.handleChange.bind(this)}/>
  			</Form.Group>

  			<Button variant="primary" type="submit" onClick={this.handleSubmit}>
    			Submit
  			</Button>

  			<h1>SHOW DATA </h1>
  			<p>Height: {this.state.height} </p>
  			<p>Width: {this.state.width} </p>
  			<p>Type: {this.state.type} </p>
  			<p>Fabric Code: {this.state.fabric_code} </p>
  			<p>Fabric Price:{this.state.fabric_price} </p>
  			<p>Sewing Price:{this.state.sewing_price} </p>
  			<p>Track Price: {this.state.track_price} </p>
  			<p>Tiebelt Price: {this.state.tiebelt_price} </p>
  			<p>Install Price: {this.state.install_price} </p>
  			<p>Transport: {this.state.transport_price}</p>

  			<p>TOTAL : {this.state.total}</p>
		</Form>
		);
	}
}
export default Home;
