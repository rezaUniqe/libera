"use client";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@workspace/ui/components/dialog";
import { ReactNode } from "react";
import AddBookForm from "@/components/forms/add-book-form";

const AddBookModal = ({ children }: { children: ReactNode }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent onInteractOutside={(e) => e.preventDefault()}>
        <DialogTitle></DialogTitle>
        <AddBookForm />
      </DialogContent>
    </Dialog>
  );
};

export default AddBookModal;
