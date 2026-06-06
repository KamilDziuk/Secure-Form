import { contactSchema } from "../Form/contactSchema ";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

type ContactSchema = z.infer<typeof contactSchema>;

export default function useContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactSchema) => {
    try {
      await axios.post("/form.php", data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return {
    handleSubmit,
    register,
    isSubmitting,
    onSubmit,
    errors,
  };
}
