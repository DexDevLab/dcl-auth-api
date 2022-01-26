import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import React from "react";
import { IconButton } from "@chakra-ui/react";
import { SearchIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export function FormPassword({
  id,
  errors,
  register,
  validate,
  required,
  label,
  helperText,
}) {
  const [show, setShow] = React.useState(false);
  const handleShow = () => setShow(true);
  const handleHide = () => setShow(false);
  const handleToggle = () => setShow(!show);
  return (
    <>
      <FormControl id={id} isInvalid={errors[id]} py={3}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <InputGroup size="md" onMouseLeave={handleHide}>
          <Input
            type={show ? "text" : "password"}
            {...register(id, {
              required,
              validate,
            })}
          />
          <InputRightElement>
            <Button
              onMouseEnter={handleShow}
              onMouseLeave={handleHide}
              onClick={handleToggle}
            >
              {show ? (
                <IconButton
                  variant="outline"
                  colorScheme="blue"
                  icon={<ViewIcon />}
                />
              ) : (
                <IconButton
                  variant="outline"
                  colorScheme="white"
                  icon={<ViewOffIcon />}
                />
              )}
            </Button>
          </InputRightElement>
        </InputGroup>
        {helperText && <FormHelperText fontSize={"xs"}>{helperText}</FormHelperText>}
        <FormErrorMessage fontWeight={700}>
          {errors[id]?.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}
