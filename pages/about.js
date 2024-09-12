import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './home'
import navigate from '/app'


class APage extends React.Component{
 
 render (){
  const AboutPageStyle = {
   padding:'0px'
  }
  return (
   <div style={AboutPageStyle}>
   <div className="m-2 card">
   <div className="card-body">
   <h3 className="card-title">{this.props.tit}</h3>
   <p className="card-text">{this.props.txt}</p>
   </div>
   </div>
   <div className="m-2 border rounded card-body">
   <h3 className="card-title">Luloy's storage</h3>
   <div className="progress bg-dark">
   <div style={{width:'23%'}} className="progress-bar progress-bar-striped progress-bar-animated">23%</div>
   </div>
   </div>
   <button onClick={
   function (){
   navigate('home')
   }
   } className="m-2 btn btn-danger" >Go to home</button>
   </div>
   )
 }
}

export default function AboutPage() {
 return (
  <APage tit='Test title' txt='Sup Kneegas'/>
  )
}