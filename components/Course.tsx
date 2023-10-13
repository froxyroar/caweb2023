import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Course = () => {
  return (
    <div className="flex justify-around">
        <div>
        <Card className="text-center">
        <CardHeader>
          <CardTitle>Linux</CardTitle>
        </CardHeader>
      </Card>
      <Card className="my-4">
        <CardHeader>
          <CardTitle>Linux</CardTitle>
          <CardDescription>Card Description 1</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content 1</p>
        </CardContent>
      </Card>
      </div>
      <div>
        <Card className="text-center">
        <CardHeader>
          <CardTitle>Linux</CardTitle>
        </CardHeader>
      </Card>
      <Card className="my-4">
        <CardHeader>
          <CardTitle>Linux</CardTitle>
          <CardDescription>Card Description 1</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content 1</p>
        </CardContent>
      </Card>
      </div>
      <div>
        <Card className="text-center">
        <CardHeader>
          <CardTitle>Linux</CardTitle>
        </CardHeader>
      </Card>
      <Card className="my-4">
        <CardContent>
          <p>Card Content 1</p>
        </CardContent>
      </Card>
      </div>
      </div>
  );
};

export default Course;
