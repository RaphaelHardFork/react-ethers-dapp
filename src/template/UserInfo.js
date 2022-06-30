import { Button, Heading, Text } from "@chakra-ui/react"
import { useEVM } from "../react-ethers/hooks/useEVM"

const UserInfo = () => {
  const { methods, account, connectionType, haveWebExtension } = useEVM()

  return (
    <>
      <Heading>User Info</Heading>
      <Text>Have web extensions? {`${haveWebExtension}`}</Text>

      {/* LOG AN ACCOUNT */}
      {connectionType === "injected" ? (
        <>
          <Button
            disabled={account.isLogged}
            onClick={() => methods.loginToInjected()}
          >
            {account.isLogged ? "Logged" : "Login"}
          </Button>
        </>
      ) : (
        ""
      )}

      {/* CREATE VOID SIGNER (WATCH-ONLY) */}
      {connectionType !== "not initialized" ? (
        <Button
          onClick={() =>
            methods.createVoidSigner(
              "0xe5cc7a18b29a090c4Cc72eC7270C4ee1498F73aF"
            )
          }
        >
          Use "watch-only" account
        </Button>
      ) : (
        ""
      )}

      {/* ACCOUNT INFO */}
      {account.isLogged && account.walletType !== "metamask" ? (
        <>
          <Button onClick={() => methods.deleteVoidSigner()}>
            Delete void signer
          </Button>
        </>
      ) : (
        ""
      )}
      {account.isLogged ? (
        <>
          <Text>Address: {account.address}</Text>
          <Text>Wallet type: {account.walletType}</Text>
          <Text>Balance: {account.balance}</Text>
          <Button onClick={() => console.log(account.signer)}>
            Log signer
          </Button>
        </>
      ) : (
        ""
      )}
    </>
  )
}

export default UserInfo
