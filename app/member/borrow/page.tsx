"use client";

import React, { useState, FormEvent } from "react";
import { UnderDevelopmentAlert } from "@/app/components/underDevelopmentAlert";
import { LoadBooks } from "./loadBooks";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const schema = z.object({
  studentId: z
    .string()
    .min(9)
    .max(9, { message: "student ID must be 9 digits" }),
  bookId: z.string(),
});

type FormData = z.infer<typeof schema>;

const RentReturnForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({resolver : zodResolver(schema) })

  const [formdata, setFormData] = useState<FormData>({
    studentId: "",
    bookId: "",
  });

  // loads for select options booknames
  const books = LoadBooks();

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   setFormData({ ...formdata, [e.target.name]: e.target.value });
  // };

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();
  //   const response = await fetch("/api/bookTransaction/burrow/", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(formdata),
  //   });

  //   const data = await response.json();
  //   if (response.ok) {
  //     console.log("registration Success !!!", data);
  //   } else {
  //     console.log("Failed registration !!!", data);
  //   }
  // };

  // load options to render as select book to rent
  const options: JSX.Element[] = [];
  books.forEach((book) =>
    options.push(
      <option className="w-2" key={book.id} value={book.id}>
        {book.title}
      </option>
    )
  );

  return (
    <div className="grid place-items-center pb-16 text-gray-500 text-lg">
      <UnderDevelopmentAlert />
      <form onSubmit={handleSubmit}>
        <div className="py-2">
          <label htmlFor="studentId">学籍番号</label>
          <input
          {...register('studentId')}
            id="studentId"
            name="studentId"
            type="text"
            className="input input-bordered w-full max-w-xs"
            
          />
        </div>
        <div className="py-2">
          <label htmlFor="bookName">本のタイトル</label>
          <br />
          <select
          {...register("bookId")}
            name="bookId"
            id="BookId"
            value={formdata.bookId}
            className="select select-bordered w-full max-w-xs align-middle"
            
          >
            <option>本を選択</option>
            {options}
          </select>
        </div>
        <div className="py-4 grid grid-cols-2 gap-2">
          <button type="reset" className="btn">
            リセット
          </button>
          <button type="submit" className="btn btn-primary">
            送信
          </button>
        </div>
      </form>
    </div>
  );
};

export default RentReturnForm;
