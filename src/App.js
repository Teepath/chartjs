import React, { Component } from 'react'

import './App.css'

import LineChart from "./components/Line";
import BarChart from "./components/Bar";
import PieChar from "./components/Pie";
import Composite from "./components/Composite";
import Table from "./components/Tables";
import axios from 'axios';

const url = "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub";
const body = { "angular_test": "angular-developer" }


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: "",
      first: [],
      second: [],
      third: [],
      fourth: [],
      collections: [],
      load:false
    }
  }


  handleState = (e) => {
    const {name, value } = e.target;
    console.log(value)
    this.setState({
      [name]: value
    })
  }

 async componentDidMount() {
   const obj = await axios.post(url, body)
   console.log("my obj", obj.data)
   let data = obj.data;
      setTimeout(() => {
        this.setState({
          collections:data,
          load:true
        })
      }, 200)    
  }

  render() {
    const { input, collections, first , second, third, fourth} = this.state;
    console.log("collections", this.state)
    

    
    

  const dataResult = input !== "" && collections.filter((result) => 
  result["Country"].trim().toLowerCase().includes(input.toLowerCase()) ||
    result["City"].trim().toLowerCase().includes(input.toLowerCase()) || result["Customer Name"].trim().toLowerCase().includes(input.toLowerCase())||
  result["Order ID"].toLowerCase().includes(input.toLowerCase()) || result["Order Date"].toLowerCase().includes(input.toLowerCase()) ||
  result["Product Name"].toLowerCase().includes(input.toLowerCase())
);
    if (this.state.load) {
      return (
        <div className="App">
          <div style={{
            width: "100%",
            height: "60px",
            paddingTop:"20px", 
             backgroundColor: "tomato",
             color: "white",
             fontSize: "20px",
             fontWeight: 400,
             textAlign: "center"
          }}>
              Dashboard
              </div>
          <div className="chart">
           
            <div>
               <LineChart collections={collections} /> 
              <BarChart collections={collections}/> 
              </div>
            <br />
            <div>
              <PieChar collections={collections}/>
            <br />
              <Composite collections={collections}/>
              <br/>
            </div> 
          
          </div>
          <div>
  
            <div className="table"><input type="text" name="input" placeholder="search: by city, customer, product, orderID, orderDate" onChange={ (e)=> this.handleState(e)}/> </div>
            {
              dataResult.length > 0 ?
                <Table collections={dataResult} /> :
                <Table collections={collections} />
            }
           
          </div>
          </div>
         
      )
    } else {
      return <div> Loading...</div>;
    } 
  
   
  }
}



export default App;
