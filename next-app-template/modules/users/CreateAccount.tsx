"use client";

import { useCreateUser } from "@api/users/hooks";
import { Button, Field, Heading, Input, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInput>();

  const { mutate } = useCreateUser();

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    mutate(
      {
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {},
      }
    );
  };

  return (
    <Stack as="form" width="lg" mt="10vh" justifySelf="center" onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h1" textAlign="center">
        Create an account
      </Heading>
      <Field.Root invalid={!!errors.fullName?.message}>
        <Field.Label>Full Name</Field.Label>
        <Input
          placeholder="Enter your full name"
          {...register("fullName", {
            required: "Full name is required",
          })}
        />
        <Field.ErrorText>{errors.fullName?.message}</Field.ErrorText>
      </Field.Root>
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
      <Field.Root invalid={!!errors.confirmPassword?.message}>
        <Field.Label>Confirm Password</Field.Label>
        <Input
          type="password"
          placeholder="Enter your password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) => value === getValues("password") || "Passwords do not match",
          })}
        />
        <Field.ErrorText>{errors.confirmPassword?.message}</Field.ErrorText>
      </Field.Root>
      <Button type="submit" justifySelf="center" mt="md">
        Submit
      </Button>
    </Stack>
  );
};

export default CreateAccount;
