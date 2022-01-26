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
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";

export function Form({
  id,
  errors,
  register,
  validate,
  required,
  label,
  helperText,
}) {
  return (
    <>
      <FormControl id={id} isInvalid={errors[id]} py={3}>
        <FormLabel htmlFor={id}>{label}</FormLabel>
        <Input
          type="text"
          {...register(id, {
            required,
            validate,
          })}
        />
        {helperText && <FormHelperText fontSize={"xs"}>{helperText}</FormHelperText>}
        <FormErrorMessage fontWeight={700}>
          {errors[id]?.message}
        </FormErrorMessage>
      </FormControl>
    </>
  );
}
