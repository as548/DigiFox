import { Alert, AlertIcon, Box } from "@chakra-ui/react";
import React from "react";

const Error = ({ message }) => {
  return (
    <>
    <Box bgColor={'blackAlpha.900'} w={'full'} h={'90vh'}>
      
    </Box>
      <Alert
        status="error"
        position={"fixed"}
        bottom={"4"}
        left={"50%"}
        transform={"translateX(-50%)"}
        w={"container.lg"}
      >
        <AlertIcon />
        {message}
      </Alert>
    </>
  );
};

export default Error;
