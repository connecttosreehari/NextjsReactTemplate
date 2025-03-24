"use client";

import { Button, Field, Heading, Input, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  email: string;
  password: string;
};

const AccountLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>();

  const onSubmit: SubmitHandler<FormInput> = (data) => console.log(data);

  return (
    <Stack as="form" width="lg" mt="10vh" justifySelf="center" onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h1" textAlign="center">
        Sign In
      </Heading>
      <Field.Root invalid={!!errors.email?.message}>
        <Field.Label>Email</Field.Label>
        <Input
          placeholder="Enter your email address"
          {...register("email", {
            required: "Email is required",
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
        <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
      </Field.Root>
      <Field.Root invalid={!!errors.password?.message}>
        <Field.Label>Password</Field.Label>
        <Input
          type="password"
          placeholder="Enter your password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 8, message: "Password must be at least 4 characters" },
          })}
        />
        <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
      </Field.Root>
      <Button type="submit" justifySelf="center" mt="md">
        Submit
      </Button>
    </Stack>
  );
};

export default AccountLogin;
