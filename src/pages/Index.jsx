import React, { useState } from "react";
import { Box, Button, Container, FormControl, FormLabel, Input, VStack, Heading, useToast, Image } from "@chakra-ui/react";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const response = await fetch("https://backengine-0uh1.fly.dev/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        toast({
          title: "Login Successful",
          description: "You have successfully logged in.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Login Failed",
          description: "Invalid email or password.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleSignup = async () => {
    try {
      const response = await fetch("https://backengine-0uh1.fly.dev/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        toast({
          title: "Signup Successful",
          description: "Your account has been created.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Signup Failed",
          description: "Could not create account.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "An error occurred.",
        description: error.message,
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={8} mt={10}>
        <Heading as="h1" size="xl">
          Welcome to React Casino
        </Heading>
        <Image src="https://images.unsplash.com/photo-1517232115160-ff93364542dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYXNpbm98ZW58MHx8fHwxNzA4NzUyODY1fDA&ixlib=rb-4.0.3&q=80&w=1080" w="300px" h="200px" objectFit="cover" />
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input type="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
        </FormControl>
        <Box d="flex" justifyContent="space-between" w="100%">
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal" onClick={handleLogin}>
            Login
          </Button>
          <Button leftIcon={<FaUserPlus />} colorScheme="orange" onClick={handleSignup}>
            Signup
          </Button>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
