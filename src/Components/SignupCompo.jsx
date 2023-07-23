import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  isLoading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Redux/Auth/Actions";
export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    email: "",
    pass: "",
    name: "",
    age: "",
  });
  const dispatch = useDispatch();
  const { auth, loading, error } = useSelector((store) => {
    return store.auth;
  });
    console.log(auth)
  const navigate = useNavigate();
  const handleChange = (event) => {
    setContactInfo({
      ...contactInfo,
      [event.target.name]: event.target.value,
    });
  };

  const postData = async () => {
    console.log(contactInfo);
    await dispatch(signup(contactInfo));
    navigate("/login");
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>Full Name</FormLabel>
                  <Input name="name" onChange={handleChange} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Age</FormLabel>
                  <Input name="age" type="number" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input onChange={handleChange} name="email" type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  name="pass"
                  onChange={handleChange}
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement h={"full"}>
                  <Button
                    variant={"ghost"}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                isLoading={loading}
                onClick={postData}
                loadingText="Submitting"
                size="lg"
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Box display={"flex"} gap={"6px"}>
              <Text>Already Have Account </Text>
              <Link to="/login">
                <Text color={"blue.400"}>
                  {" "}
                  <b>Login</b>
                </Text>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
