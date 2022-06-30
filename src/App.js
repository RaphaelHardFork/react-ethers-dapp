import ReactEthers from "./template/ReactEthers"
import { EVMContext } from "./react-ethers/EVMContext"

const App = () => {
  return (
    <>
      <EVMContext
        autoRefresh={false}
        chainId={1313161554}
        customNetworks={[
          {
            name: "Aurora Mainnet",
            chainId: 1313161554,
            blockHeight: 0,
            publicEndpoints: ["https://mainnet.aurora.dev"],
            explorerUrl: "https://aurorascan.dev/",
          },
        ]}
      >
        <ReactEthers />
      </EVMContext>
    </>
  )
}

export default App
