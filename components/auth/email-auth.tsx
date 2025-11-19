"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInWithEmail, signUpWithEmail } from "@/app/actions/auth";
import { type FormValueType, authSchema } from "@/utils/schema";
import type { AuthFormProps } from "@/utils/types";
import { Form } from "@/components/ui/form";
import { InputForm } from "@/components/ui/input-form";
import { Button } from "@/components/ui/button";

const defaultValues: FormValueType = {
  email: "",
  password: "",
};

export default function UserAuth({ formType }: AuthFormProps) {
  const form = useForm<FormValueType>({
    resolver: zodResolver(authSchema),
    defaultValues,
  });

  const handleSubmit = formType === "login" ? signInWithEmail : signUpWithEmail;
  const buttonText = formType === "login" ? "Sign In" : "Sign Up";

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSubmit)}
          className="flex w-full flex-col gap-y-4 pb-4"
        >
          <InputForm
            label="Email"
            name="email"
            placeholder="your@email.com"
            description=""
            required
          />
          <InputForm
            type="password"
            label="Password"
            name="password"
            description=""
            required
          />
          <Button
            type="submit"
            className="w-full bg-linear-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600"
          >
            {buttonText}
          </Button>
        </form>
      </Form>
    </>
  );
}
