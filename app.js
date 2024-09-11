import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/home'
import AboutPage from './pages/about'
import DevsPage from './pages/developers'

const content = document.getElementById('content')

const routes = {
 'home': HomePage(),
 'about': AboutPage(),
 'devs': DevsPage()
}

const hiddenRoutes={
 'viewdevs': null
}

navigate('home')
 
function navigate (route){
 for (const x in routes){
  const btn = document.querySelector(`a[data-route=${x}]`)
  btn.parentElement.classList.remove('active')
 }
 
 const navbtn = document.querySelector(`a[data-route=${route}]`)
 navbtn.parentElement.classList.add('active')
 
 ReactDOM.render(routes[route],content)
 feather.replace()
}

for (const x in routes){
 const btn = document.querySelector(`a[data-route=${x}]`)
 
 if (btn!=null){
  btn.onclick=()=>{
   navigate(x)
  }
 } else {
  console.error(`[${x}] is not a page`)
 }
 
}
 



//exports
export default navigate