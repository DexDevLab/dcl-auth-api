import {
  Box,
  Button,
  Center,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { Form } from "components/Form";
import { FormPassword } from "components/FormPassword";
import { StyleButton } from "components/StyleButton";

import { useForm } from "react-hook-form";

export default function CriarUsuario() {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <Center>
      <Box p={10} mt={10} shadow="md" borderWidth="2px" w={"25em"}>
        <Heading pb={2}>Cadastrar Jogador</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form
            id="email"
            errors={errors}
            register={register}
            required="Obrigatório"
            label="Email"
            helperText="Você usará este email somente para recuperação de senha."
            validate={(value) =>
              /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}$/i.test(value) ||
              "Insira um endereço de email válido."
            }
          />
          <FormPassword
            id="senhaFirst"
            errors={errors}
            register={register}
            required="Obrigatório"
            label="Senha (PIN)"
            helperText="Digite sua senha de 4 dígitos. Ela será utilizada no DexCraft Launcher e nos servidores."
            validate={(value) =>
              /^[0-9]{4,4}$/i.test(value) ||
              "Crie um PIN de 4 dígitos. Apenas números são aceitos."
            }
          />
          <FormPassword
            id="senhaSecond"
            errors={errors}
            register={register}
            required="Obrigatório"
            label="Redigite a senha (PIN)"
            helperText="Redigite a senha."
            validate={(value) =>
              value === getValues("senhaFirst") ||
              "As senhas não conferem. Verifique a senha utilizada."
            }
          />
          <StyleButton mt={6} type="submit" buttonText="Cadastrar" />
        </form>
      </Box>
    </Center>
  );
}
