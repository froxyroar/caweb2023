'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormData {
  question: string;
}

export default function GeneralQuestionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="question">General Question</Label>
        <Input
          type="text"
          id="question"
          {...register("question", { required: "Please enter your question" })}
        />
        {errors.question && <span>{errors.question.message}</span>}
      </div>

      <Button color="blue" mt={4} type="submit">
        Submit
      </Button>
    </form>
  );
}
