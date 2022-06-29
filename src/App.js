import ReactEthers from "./template/ReactEthers"
import { EVMContext } from "./react-ethers/EVMContext"

const App = () => {
  return (
    <>
      <EVMContext>
        <ReactEthers />
      </EVMContext>
    </>
  )
}

export default App
