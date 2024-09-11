import React from 'react'
import ReactDOM from 'react-dom'
import HomePage from './home'
import navigate from '/app'


class APage extends React.Component{
 
 render (){
  const cardstyle = {
   margin:'5px'
  }
  return (
   <div>
   <div style={cardstyle} className="card">
   <div className="card-body">
   <h3 className="card-title">{this.props.tit}</h3>
   <p className="card-text">{this.props.txt}</p>
   </div>
   </div>
   <button style={{margin:'5px'}} onClick={
   function (){
   navigate('home')
   }
   } className="btn btn-danger" >Go to home<i data-feather='home'>home</i></button>
   </div>
   )
 }
}

export default function AboutPage() {
 return (
  <APage tit='Test title' txt='Sup?'/>
  )
}