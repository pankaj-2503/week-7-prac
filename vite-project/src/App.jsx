// import { lazy,Suspense } from "react";
// import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
// import './App.css'

// const Dashboard = lazy(() => import('./components/Dashboard'))
// const Landing = lazy(() => import('./components/Landing'))

// function App() {
  
//   // Suspense API use to fetch asynchronously data
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//             <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard /></Suspense>} />
//             <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense>} />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   )
// }
// //use navigae should be inside browserRouter component that is what is done here
// function Appbar() {
//   const navigate = useNavigate();

//   return <div>
//       <div>
//         <button onClick={() => {
//           navigate("/");
//         }}>Landing page</button>

//         <button onClick={() => {
//           navigate("/dashboard");
//         }}>Dashboard</button>

//       </div>
//   </div>
// }

// export default App

import React, { useState } from 'react'
import { CountContext } from '../../context';

const App = () => {
  const [count, setcount] = useState(0);
  //wrap anyone who wants to use the teleported value inside provider
  return (
    <div>
      <CountContext.Provider value={count}>
         <Count setcount={setcount}/>
      </CountContext.Provider>
      
      
    </div>
  )
}

function Count({setcount}) {
  return <div>
    <CountRenderer/>
    <Buttons setcount={setcount}/>
  </div>
}

function Buttons({count,setcount}) {
  return <div>
    <button onClick={() => {
       setcount(count+1)
    }}>Increase</button>

    <button onClick={() => {
       setcount(count-1)
    }}>Decrease</button>
  </div>
}

export default App