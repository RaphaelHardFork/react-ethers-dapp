import { Button, Heading, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useEVM } from "../react-ethers/hooks/useEVM"

const UserInfo = () => {
  const { methods, account, connectionType } = useEVM()
  const [webExtension, setWebExtension] = useState(false)

  useEffect(() => {
    const main = async () => {
      setWebExtension(await methods.haveWebExtension())
    }
    main()
  }, [methods, account])
  return (
    <>
      <Heading>User Info</Heading>
      <Text>Have web extensions? {`${webExtension}`}</Text>

      {/* LOG AN ACCOUNT */}
      {connectionType === "injected" ? (
        <Button
          disabled={account.isLogged}
          onClick={() => methods.loginToInjected()}
        >
          {account.isLogged ? "Logged" : "Login"}
        </Button>
      ) : (
        ""
      )}

      {/* ACCOUNT INFO */}
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
