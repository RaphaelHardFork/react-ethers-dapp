import { Box, Flex, Heading, Image } from "@chakra-ui/react"
import logo from "../react-ethers.svg"
import ConnectionInfo from "./ConnectionInfo"
import UserInfo from "./UserInfo"

const ReactEthers = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        justifyContent="space-between"
        fontSize="lg"
      >
        <Box shadow="lg" borderRadius="20" m="6" p="8" bg="#ffa793">
          <UserInfo />
        </Box>
        <Box shadow="lg" borderRadius="20" m="6" p="8" bg="#c082c9">
          <ConnectionInfo />
        </Box>
      </Flex>

      <Box my="10">
        <Heading textAlign="center" my="10" fontSize="50">
          React Ethers dApp
        </Heading>
        <Image mx="auto" height="30rem" alt="logo of react ethers" src={logo} />
      </Box>
    </>
  )
}

export default ReactEthers
