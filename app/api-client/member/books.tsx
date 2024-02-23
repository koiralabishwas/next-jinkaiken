import { FieldValues } from "react-hook-form";

export const getAvailableBooks = async () => {
  const response = await fetch("/api/dbBooks");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getBorrowedBooks = async (studentId: string) => {
  const response = await fetch(`/api/bookTransaction/loadBurrows/${studentId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const getTransactions = async (studentId: string) => {
  const response = await fetch(`/api/bookTransaction/userHistory/${studentId}`);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
};

export const borrowBook = async (formData: FieldValues) => {
  const response = await fetch("/api/bookTransaction/burrow/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};

export const returnBook = async (bookId: string) => {
  const response = await fetch(`/api/bookTransaction/return/${bookId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};
