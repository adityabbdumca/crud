import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { END_POINT, httpClient } from "../api/httpClient";

import { addStudent,deleteStudent,upDateStudent } from "../api/apiStudent";


export const useStudent = () => {
  return useQuery({
    queryKey: ["students"],
    queryFn: () => httpClient.get(END_POINT).then((res) => res.data),
  });
};


export const useAddStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addStudent,
    onSuccess: () => queryClient.invalidateQueries(["students"]),
  });
};


export const useUpdateStudents = () => {
  const queryClient = useQueryClient();
  return useMutation({
    // mutationFn: upDateStudent,
      mutationFn: ({ id, ...updatedStudent }) => upDateStudent(id, updatedStudent),
    onSuccess: () => queryClient.invalidateQueries(["students"]),
  });
};


export const useDeleteStudent = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteStudent,
    onSuccess: () => queryClient.invalidateQueries(["students"]),
  });
};
