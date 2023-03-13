import { auth } from "@/firebase/clientApp";
import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";

const Navbar: React.FC = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Flex
      bg="white"
      height="44px"
      padding="6px 12px"
      justify={{ md: "space-between" }}
    >
      <Flex
        align="center"
        width={{ base: "40px", md: "auto" }}
        mr={{ base: 2, md: 2 }}
      >
        <Image src="/images/redditFace.svg" alt="Reddit" height="30px" />
        <Image
          src="/images/redditText.svg"
          alt="Reddit"
          height="46px"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>

      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};
export default Navbar;
