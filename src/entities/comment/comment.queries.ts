import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { createComment, getComments } from './comment.api';
import { toast } from 'react-toastify';

const keys = {
  root: () => ['comment'],
  getComments: (id: number) => [...keys.root(), 'byId', id] as const,
  createComment: (id: number) => [...keys.root(), 'create', id] as const,
  updateComment: (id: number) => [...keys.root(), 'update', id] as const,
  deleteComment: (id: number) => [...keys.root(), 'delete', id] as const,
};

export function useGetCommentsQuery(id: number) {
  return useQuery({
    queryKey: keys.getComments(id),
    queryFn: () => getComments(id),
  });
}

export function useCreateCommentMutation(id: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: keys.createComment(id),
    mutationFn: createComment,
    onMutate: async () => {
      await queryClient.cancelQueries({
        queryKey: keys.createComment(id),
      });
      await queryClient.cancelQueries({ queryKey: keys.root() });
    },
    onSuccess: async () => {
      toast.success('Комментарий успешно создан');
    },
    onError: async () => {
      toast.error('При отправке произошла ошибка!');
    },
    onSettled: async () => {
      await queryClient.invalidateQueries({
        queryKey: keys.getComments(id),
      });
    },
  });
}
