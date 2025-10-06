import React, { useState } from "react";
import { useAddStudent, useUpdateStudents } from "../hooks/useStudent";
import StudentForm from "../component/StudentForm";
import StudentTable from "../component/StudentTable";

export default function StudentPage() {
  const [editData, setEditData] = useState(null);
  const createMutation = useAddStudent();
  const updateMutation = useUpdateStudents();

  const handleCreate = (studentData) => {
    createMutation.mutate(studentData);
  };

  const handleUpdate = (id, studentData) => {
    updateMutation.mutate({ id, ...studentData });
    setEditData(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Student Management</h1>

      <StudentForm
        onSubmit={editData ? handleUpdate : handleCreate}
        initialData={editData}
      />

      <StudentTable onEdit={(student) => setEditData(student)} />
    </div>
  );
}
