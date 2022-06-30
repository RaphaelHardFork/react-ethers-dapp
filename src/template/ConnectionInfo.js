import { Button, Heading, Select, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useEVM } from "../react-ethers/hooks/useEVM"

const ConnectionInfo = () => {
  const { connectionType, methods, network, autoRefreshActive } = useEVM()
  const [destination, setDestination] = useState(4)

  return (
    <>
      <Button onClick={() => methods.launchConnection("injected")}>
        Switch to web extensions
      </Button>
      <Heading>ConnectionInfo</Heading>
      <Text>Connection type: {connectionType}</Text>

      {/* AUTO REFRESH */}
      <Text>Auto refresh</Text>
      <Button
        disabled={autoRefreshActive}
        onClick={() => methods.setAutoRefresh(true)}
      >
        On
      </Button>
      <Button
        disabled={!autoRefreshActive}
        onClick={() => methods.setAutoRefresh(false)}
      >
        Off
      </Button>

      {/* LAUNCH CONNECTION */}
      {connectionType === "not initialized" ? (
        <>
          <Text>Launch a connection</Text>
          <Button onClick={() => methods.launchConnection("endpoints")}>
            Endpoints
          </Button>
          <Button onClick={() => methods.launchConnection("injected")}>
            WebExtension
          </Button>
        </>
      ) : (
        ""
      )}

      {/* CONNECTION INFO */}
      {connectionType !== "not initialized" ? (
        <>
          <Text>Network name: {network.name}</Text>
          <Text>Chain ID: {network.chainId}</Text>
          <Text>Lastest block: {network.blockHeight}</Text>
          <Text>Explorer URL: {network.explorerUrl}</Text>
          <Button onClick={() => console.log(network.publicEndpoints)}>
            Log endpoints
          </Button>
        </>
      ) : (
        ""
      )}

      {/* SWITCH NETWORK */}
      <Text>Select a network</Text>
      <Select bg="white" onChange={(e) => setDestination(e.target.value)}>
        {methods.getNetworkList().map((n) => {
          return (
            <option key={n.chainId.toString(16)} value={n.chainId}>
              {n.name}
            </option>
          )
        })}
      </Select>
      <Button onClick={() => methods.switchNetwork(destination)}>
        Go to {destination}
      </Button>
    </>
  )
}

export default ConnectionInfo
