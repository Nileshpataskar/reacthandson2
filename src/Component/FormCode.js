import React, { Component } from 'react'
import "./form.css"
export class FormCode extends Component {

state = {
  name:"",
  department: "",
  rating:"",
  data:[]
} ;


goChange=(event)=>{
  this.setState({[event.target.name]:event.target.value})
  this.setState({[event.target.department]:event.target.value})
  this.setState({[event.target.rating]:event.target.value})
}

click(){
  const obj={
    name:this.state.name,
    department:this.state.department,
    rating:this.state.rating
  }
  this.state.data.push(obj);
  this.setState({data:this.state.data,name:"",department:"",rating:""});

}

  render() {
    return (
<>
      <div className='main'>
      <h1>Employee Feedback Form</h1>

      <label className='lab'>Name :    <input type='text' placeholder='Enter Name' name='name' onChange={this.goChange} className='inputbox' value={this.state.name}></input></label>

      
      <label className='lab'>Dept  :   <input type='text' name='department' onChange={this.goChange} placeholder='Enter Department' className='inputbox' value={this.state.department}></input></label>

      
      <label className='lab'>Rating : <input type='number' name='rating' placeholder='Enter Name' onChange={this.goChange} className='inputbox' value={this.state.rating}></input></label>


    <button className='submit' onClick={this.click.bind(this)}>Submit</button>'
    </div>

<div className='divcontainer'>
  <div className='bigBox'>
     {
      this.state.data.map((item)=>{
        return(<h3 >Name: {item.name } || Department:{item.department} || Rating:{item.rating}</h3>)
      })
     }
  </div>
  </div>
</>

     )
  }
}

export default FormCode