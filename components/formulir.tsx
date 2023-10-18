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
import userImage from "@/public/userid.png";
import mahasiswaImage from "@/public/dataMahasiswaP.png";
import Image from "next/image";

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
    <div className="min-h-screen mt-5 md:mt-7 lg:mt-10" style={{ backgroundColor: "#F4F4F4" }}>
      <div>
        {/* <header className="flex items-center justify-center text-[28px] font-bold font-forest-road mt-8 mb-9 drop-shadow-md md:text-[45px] md:mt-12 md:mb-12 lg:text-[55px] lg:mt-10 lg:mb-12"
        style={{color: "#91914d"}}>
          FORM PENDAFTARAN
        </header> */}
      </div>
      <div className="flex flex-col gap-2">
        <div className="w-1/2 md:w-56 lg:w-64">
          <div>
            <Card className=" bg-red-700">
              <CardHeader className="flex flex-row justify-center gap-1 md:gap-2 lg:gap-3">
                <CardTitle
                  className="flex font-forest-road tracking-wider mt-[19px] ml-2 md:mt-5 md:ml-0"
                  style={{ color: "#F4F4F4" }}
                >
                  DATA DIRI
                </CardTitle>
                <Image
                  className="w-14 md:w-16"
                  src={userImage}
                  alt="Background Image"
                  loading="eager"
                  priority={true}
                />
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="flex mx-auto p-3 mb-20 md:scale-125 md:p-10 lg:scale-150 lg:p-24 lg:mb-24">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-sm w-full lg:scale-110"
          >
            <div className="mb-8 mt-8">
              <Label htmlFor="name">
                Nama
              </Label>
              <Input
                type="text"
                id="name"
                placeholder="Ex : Bill Gates"
                {...register("name", { required: "Please enter your name" })}
                style={{ color: "#231f20" }}
              />
              {errors.name && (
                <span style={{ color: "#BA2025" }}>{errors.name.message}</span>
              )}
            </div>

            <div className="mb-8">
              <Label htmlFor="email">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Ex : cps@gmail.com"
                {...register("email", {
                  required: "Please enter your email",
                })}
                style={{ color: "#231f20" }}
              />
              {errors.email && (
                <span style={{ color: "#ba2025" }}>{errors.email.message}</span>
              )}
            </div>

            <div className="flex mb-8">
              <div className="mr-5">
                <Label htmlFor="phone">
                  No. WhatsApp
                </Label>
                <Input
                  className="size-20px"
                  type="tel"
                  id="phone"
                  placeholder="Ex : 0869420666"
                  {...register("phone", {
                    required: "Please enter your phone number",
                  })}
                  style={{color: "#231f20"}}
                  />
                {errors.phone && (
                  <span style={{ color: "#ba2025" }}>
                    {errors.phone.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="gender">
                  Jenis Kelamin
                </Label>
                <Select>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select an Option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="male">LAKI - LAKI</SelectItem>
                      <SelectItem value="female">PEREMPUAN</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.gender && (
                  <span style={{ color: "#ba2025" }}>
                    {errors.gender.message}
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>

        <div className="w-72 -mt-10 md:w-80 lg:w-96 lg:mt-2">
          <div>
            <Card className="bg-red-700 p-1">
              <CardHeader className="flex flex-row justify-center gap-2 md:gap-3">
                <CardTitle
                  className="font-forest-road tracking-wider mt-4 -ml-1 md:mt-5"
                  style={{ color: "#F4F4F4" }}
                >
                  DATA MAHASISWA
                </CardTitle>
                <Image
                  className="w-12 md:w-14 lg:w-16"
                  src={mahasiswaImage}
                  alt="Background Image"
                  loading="eager"
                  priority={true}
                />
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="flex mx-auto p-3 md:scale-125 md:p-20 md:mb-20 lg:scale-150 lg:p-44 lg:mb-56">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-sm w-full lg:scale-110"
          >
            {/* Faculty and Batch */}
            <div className="flex mb-8 mt-8">
              <div className="mr-5">
                <Label htmlFor="faculty">Fakultas</Label>
                <Select>
                  <SelectTrigger className="w-[167px] md:w-[193px]">
                    <SelectValue placeholder="Select an Option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="FTE">TEKNIK ELEKTRO</SelectItem>
                      <SelectItem value="FRI">REKAYASA INDUSTRI</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {errors.faculty && (
                  <span style={{ color: "#ba2025" }}>
                    {errors.faculty.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="batch">Angkatan</Label>
                <Select>
                  <SelectTrigger className="w-[167px] md:w-[193px]">
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
                {errors.batch && (
                  <span style={{ color: "#ba2025" }}>
                    {errors.batch.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-8 mt-8">
              <Label htmlFor="department">Jurusan</Label>
              <Input
                type="text"
                id="department"
                placeholder="Ex : S1 Teknik Telekomunikasi"
                {...register("department", {
                  required: "Please enter your department",
                })}
                style={{ color: "#231f20" }}
              />
              {errors.department && (
                  <span style={{ color: "#ba2025" }}>
                    {errors.department.message}
                  </span>
                )}
            </div>
            <div className="flex mb-8 mt-8">
              <div className="mr-5">
                <Label htmlFor="nim">NIM</Label>
                <Input
                  type="text"
                  id="nim"
                  placeholder="Ex : 1101213950"
                  {...register("nim", { required: "Please enter your NIM" })}
                  style={{ color: "#231f20" }}
                />
                {errors.nim && (
                  <span style={{ color: "#ba2025" }}>
                    {errors.nim.message}
                  </span>
                )}
              </div>
              <div>
                <Label htmlFor="class">Kelas</Label>
                <Input
                  type="text"
                  id="class"
                  placeholder="Ex : TT-45-01"
                  {...register("class", {
                    required: "Please enter your class",
                  })}
                  style={{ color: "#231f20" }}
                />
                {errors.class && (
                  <span style={{ color: "#ba2025" }}>
                    {errors.class.message}
                  </span>
                )}
              </div>
            </div>
            <div className="mb-8">
              <Label htmlFor="fileLink">Link Berkas</Label>
              <Input
                type="text"
                id="fileLink"
                placeholder="Example : https://drive.google.com/file/d/test/"
                {...register("fileLink", {
                  required: "Please insert your link",
                })}
                style={{ color: "#231f20" }}
              />
              {errors.fileLink && (
                  <span style={{ color: "#ba2025" }}>
                    {errors.fileLink.message}
                  </span>
                )}
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                style={{ boxShadow: "0 2px 4px rgba(0, 0, 0, 0.5)"}}
              />
              <Label htmlFor="terms">
                Data yang saya isi sudah benar, saya ingin submit
              </Label>
            </div>
            <div className="flex justify-center">
              <Button className="mt-8 mb-8 item" type="submit" style={{background: "#ba2025"}}>
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
