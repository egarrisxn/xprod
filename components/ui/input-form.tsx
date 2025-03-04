import * as React from "react";
import { Control, FieldValues } from "react-hook-form";
import { cn } from "@/lib/utils";
import { Input } from "./input";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./form";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  containerClassName?: string;
  description?: string;
  control?: Control<FieldValues>;
}

const InputForm = React.forwardRef<HTMLInputElement, InputProps>(
  ({ containerClassName, name, label, control, description, ...props }, ref) => (
    <FormField
      control={control}
      name={name!}
      render={({ field, formState }) => (
        <FormItem className={cn("w-full space-y-1", containerClassName)}>
          {label && (
            <FormLabel htmlFor={name}>
              {label} {props?.required && <span className="text-destructive">*</span>}
            </FormLabel>
          )}

          <FormControl>
            <Input {...field} ref={ref} {...props} name={name} disabled={formState.isSubmitting} />
          </FormControl>

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage />
        </FormItem>
      )}
    />
  ),
);

InputForm.displayName = "InputForm";

export { InputForm };
