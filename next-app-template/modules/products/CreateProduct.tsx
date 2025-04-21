"use client";

import { useCreateProduct} from "@api/products/hooks";
import { Button, Field, Heading, Input, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";

type FormInput = {
  name: string;
  description: string;
  price: number;
};

const CreateAccount = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormInput>();

  const { mutate } = useCreateProduct();

  const onSubmit: SubmitHandler<FormInput> = (data: FormInput) => {
    mutate(
      {
        name: data.name,
        description: data.description,
        price: data.price,
      },
      {
        onSuccess: () => { },
      }
    );
  };

  return (
    <Stack as="form" width="lg" mt="10vh" justifySelf="center" onSubmit={handleSubmit(onSubmit)}>
      <Heading as="h1" textAlign="center">
        Create product
      </Heading>
      <Field.Root invalid={!!errors.name?.message}>
        <Field.Label>Name</Field.Label>
        <Input
          placeholder="Enter product name"
          {...register("name", {
            required: "Product is required",
          })}
        />
        <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
      </Field.Root>
      <Field.Root invalid={!!errors.description?.message}>
        <Field.Label>description</Field.Label>
        <Input
          placeholder="Enter product description"
          {...register("description", {
            required: "Product description is required"
          })}
        />
        <Field.ErrorText>{errors.description?.message}</Field.ErrorText>
      </Field.Root>
      <Field.Root invalid={!!errors.price?.message}>
        <Field.Label>Price</Field.Label>
        <Input
          type="number"
          placeholder="Enter product price"
          {...register("price", {
            required: "Product price is required"
          })}
        />
        <Field.ErrorText>{errors.price?.message}</Field.ErrorText>
      </Field.Root>
      <Button type="submit" justifySelf="center" mt="md">
        Submit
      </Button>
    </Stack>
  );
};

export default CreateAccount;
