"use client";
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
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { Checkbox } from "@/components/ui/checkbox";

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
    <div style={{ backgroundColor: "#F4F4F4" }}>
    <div className="container mx-auto p-4 mb-8">
      <header className="flex items-center justify-center text-xl font-bold mb-20">
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
        <div>
            <Card
              style={{ marginLeft: "0" }}
              className="mr-55 mt-40 p-1 bg-red-500 rounded-md"
            >
              <CardHeader>
                <CardTitle className="text-center text-white">DATA DIRI</CardTitle>
              </CardHeader>
            </Card>
          
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm w-full">
          <div className="mb-8 mt-8">
            <Label htmlFor="name">Nama</Label>
            <Input
              type="text"
              id="name"
              placeholder="Example : Bill Gates"
              {...register("name", { required: "Please enter your name" })}
            />
            {errors.name && <span>{errors.name.message}</span>}
          </div>

          <div className="mb-8">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              placeholder="Example : cps@gmail.com"
              {...register("email", { required: "Please enter your email" })}
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="flex mb-8">
            <div className="mr-10">
              <Label htmlFor="phone">No. WhatsApp</Label>
              <Input
                className="size-20px"
                type="tel"
                id="phone"
                placeholder="Example : 0869420666"
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
          <div className="flex mb-8">
            <div className="mr-8">
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
                <SelectTrigger className="w-[170px]">
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
          <div>
            <Card
              style={{ marginLeft: "0" }}
              className="mr-55 mt-12 p-1 bg-red-500 rounded-md"
            >
              <CardHeader>
                <CardTitle className="text-center text-white">DATA MAHASISWA</CardTitle>
              </CardHeader>
            </Card>
          </div>
          <div className="mt-8">
            <Label htmlFor="department">Jurusan</Label>
            <Input
              type="text"
              id="department"
              placeholder="Example : S1 Teknik Telekomunikasi"
            />
          </div>
          <div className="flex mb-8 mt-8">
            <div className="mr-8">
              <Label htmlFor="nim">NIM</Label>
              <Input type="text" id="nim" placeholder="Example : 1101213950" />
            </div>
            <div>
              <Label htmlFor="class">Kelas</Label>
              <Input type="text" id="class" placeholder="Example : TT-45-01" />
            </div>
          </div>
          <div className="mb-8">
            <Label htmlFor="fileLink">Link Berkas</Label>
            <Input
              type="text"
              id="fileLink"
              placeholder="Example : https://drive.google.com/file/d/test/"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}/>
            <Label htmlFor="terms">
              Data yang saya isi sudah benar, saya ingin submit
            </Label>
          </div>
          <div className="flex justify-center">
            <Button className="mt-8 mb-8 item" color="blue" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
    </div>
    </div>
  );
}
