import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/home'
import AboutPage from './pages/about'


const routes = {
 'home': HomePage(),
 'about': AboutPage(),
 'developers': null
}

const hiddenRoutes={
 'viewdevs': null
}

ReactDOM.render(HomePage(),document.getElementById("content")
 )
 
 
 function navigate (route){
  const page = routes[route]?route:NaN
  
 }
 
 
for (const x in routes){
 const btn = document.querySelector(`a[data-route=${x}]`)
 if (btn!=null&&routes[x]!=null){
  btn.onclick=()=>{
   ReactDOM.render(routes[x],document.getElementById('content'))
   navigate(x)
  }
 } else {
  console.error(`a[data-route=${x}] not found in navigation`)
 }
}
 
feather.replace()