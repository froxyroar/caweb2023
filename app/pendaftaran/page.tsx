"use client";
import React from "react";
import Form from "@/components/formulir";
import NavForm from "@/components/navbarform";

const page = () => {
  return (
    <>
      <div className="sticky top-0 z-50">
        <NavForm />
      </div>
      <div>
        <Form />
      </div>
    </>
  );
};

export default page;
