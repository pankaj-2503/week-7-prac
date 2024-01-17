import react from 'react'
import { countAtom, evenSelector } from './store/atoms/count'
import { RecoilRoot, useRecoilState,useRecoilValue, useSetRecoilState } from 'recoil'


const App = () => {
 
  //wrap anyone who wants to use the teleported value inside provider
  return (
    <div>
      {/* // similar as provider in usecontext for rendering */}
      <RecoilRoot>

         <Count />
      </RecoilRoot>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer/>
    <EvenCountRenderer/>
    <Buttons />
  </div>
}
function CountRenderer(){
  const count=useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function EvenCountRenderer(){
  const count=useRecoilValue(evenSelector);
  return <div>
    {count%2==0?"It is even":null}
  </div>
}

function Buttons() {
  const setcount=useSetRecoilState(countAtom);
  return <div>
    <button onClick={() => {
       setcount(count=>count+1)
    }}>Increase</button>

    <button onClick={() => {
       setcount(count=>count-1)
    }}>Decrease</button>
  </div>
}

export default App