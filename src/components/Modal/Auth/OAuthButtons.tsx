import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";

type OAuthButtonsProps = {};

const OAuthButtons: React.FC<OAuthButtonsProps> = () => {
  return (
    <Flex direction="column" width="100%" mb={4}>
      <Button variant="ouath">
        <Image src="/images/googlelogo.png" height="20px" mr={4} />
        Continue with Google
      </Button>
    </Flex>
  );
};
export default OAuthButtons;
