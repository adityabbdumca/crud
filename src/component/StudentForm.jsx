import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function StudentForm({ onSubmit, initialData }) {
  const { register, handleSubmit, reset } = useForm({
    defaultValues: initialData || {},
  });

  
  useEffect(() => {
    reset(initialData || {});
  }, [initialData, reset]);

const handleFormSubmit = (data) => {
    const payload =  {
      Name: data.Name,
      CollageName: data.CollageName,
      RollNo: data.RollNo,
      Address: data.Address
    }
   onSubmit(payload);
    reset();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-2">
        {initialData ? "Update Student" : "Add Student"}
      </h1>

      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-2">
        <input {...register("Name", { required: true })} placeholder="Name" className="border" />
        <input
          {...register("CollageName", { required: true })}
          placeholder="College Name" className="border m-2"
        />
        <input {...register("RollNo", { required: true })} placeholder="Roll No" className="border m-2" />
        <input {...register("Address", { required: true })} placeholder="Address"  className="border m-2"/>

        <button
          type="submit"
          className="m-3 px-4 py-2 bg-blue-600 text-white rounded"
        >
          {initialData ? "Update" : "Create"} Student
        </button>
      </form>
    </div>
  );
}

export default StudentForm;
