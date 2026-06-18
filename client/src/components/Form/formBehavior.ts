import { contactSchema } from "./contactSchema";
import axios from "axios";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

type ContactSchema = z.infer<typeof contactSchema>;

export default function useContactForm() {
  const [sent, setSent] = useState(false);
  const [sentFailed, setSentFailed] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactSchema) => {
    try {
      await axios.post("/form.php", data);

      reset();

      setSent(true);

      setTimeout(() => {
        setSent(false);
      }, 3000);
    } catch (error) {
      setSentFailed(true);
      setTimeout(() => {
        setSentFailed(false);
      }, 3000);
      console.error(error);
    }
  };

  return {
    handleSubmit,
    register,
    isSubmitting,
    onSubmit,
    sent,
    sentFailed,
    errors,
  };
}
