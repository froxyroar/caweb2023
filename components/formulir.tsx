'use client'
import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  faculty: string;
  batch: string;
  department: string;
  nim: string;
  class: string;
  fileLink: string;
}

export default function GeneralQuestionForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <div>
            <header className="flex items-center">
        FORM PENDAFTARAN
      </header>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm w-full">
        <div className="mb-4">
          <Label htmlFor="name">Nama</Label>
          <Input
            type="text"
            id="name"
            placeholder="SUGIONO UZUMAKI"
            {...register("name", { required: "Please enter your name" })}
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div className="mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            placeholder="sugionouzu@gmail.com"
            {...register("email", { required: "Please enter your email" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div className="flex mb-4">
          <div className="mr-4">
            <Label htmlFor="phone">No. WhatsApp</Label>
            <Input
              className="size-20px"
              type="tel"
              id="phone"
              placeholder="0869420666"
              {...register("phone", {
                required: "Please enter your phone number",
              })}
            />
            {errors.phone && <span>{errors.phone.message}</span>}
          </div>
          <div>
            <Label htmlFor="gender">Jenis Kelamin</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Jenis Kelamin</SelectLabel>
                  <SelectItem value="male">Laki - laki</SelectItem>
                  <SelectItem value="female">Perempuan</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.gender && <span>{errors.gender.message}</span>}
          </div>
        </div>

        {/* Faculty and Batch */}
        <div className="flex mb-4">
          <div className="mr-4">
            <Label htmlFor="faculty">Fakultas</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="FTE">Teknik Elektro</SelectItem>
                  <SelectItem value="FRI">Rekayasa Industri</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor="batch">Angkatan</Label>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select an Option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="2021">2021</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="mr-4">
            <Label htmlFor="department">Jurusan</Label>
            <Input type="text" id="department" placeholder="Contoh : S1 Teknik Telekomunikasi" />
          </div>
        <div className="flex mb-4">
          <div className="mr-4">
            <Label htmlFor="nim">NIM</Label>
            <Input type="text" id="nim" placeholder="Contoh : 1101213950" />
          </div>
          <div>
            <Label htmlFor="class">Kelas</Label>
            <Input type="text" id="class" placeholder="Contoh : TT-45-02" />
          </div>
        </div>

        {/* File Link */}
        <div className="mb-4">
          <Label htmlFor="fileLink">Link Berkas</Label>
          <Input
            type="text"
            id="fileLink"
            placeholder="Contoh : https://drive.google.com/file/d/1gDxBrP6Pogot_oNEt7wz6WON/view/"
          />
        </div>

        <Button className="mt-4" color="blue" type="submit">
          Submit
        </Button>
      </form>
    </div>
    </div>
  );
}
