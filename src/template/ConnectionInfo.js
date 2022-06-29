import { Button, Heading, Text } from "@chakra-ui/react"
import { useEVM } from "../react-ethers/hooks/useEVM"

const ConnectionInfo = () => {
  const { connectionType, methods, network, autoRefreshActive } = useEVM()

  return (
    <>
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
          <Button>WalletConnect</Button>
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
    </>
  )
}

export default ConnectionInfo
