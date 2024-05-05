import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createArticleMutation,
  deleteArticle,
  favoriteArticleQuery,
  getArticleDetailsQuery,
  getArticleQuery,
  getWriterArticles,
  likeArticleQuery,
  updateArticle,
  updateViewQuery,
} from './article.api';
import { toast } from 'react-toastify';
import { CreateArticleDto } from './article.types';

const keys = {
  root: () => ['article'],
  createArticle: () => [...keys.root(), 'create'] as const,
  updateArticle: () => [...keys.root(), 'update'] as const,
  article: (id: number) => [...keys.root(), 'byId', id] as const,
  deleteArticle: (id: number) => [...keys.root(), 'delete', id] as const,
  viewArticle: (id: number) => [...keys.root(), 'view', id] as const,
  favArticle: (id: number) => [...keys.root(), 'favorite', id] as const,
  likeArticle: (id: number) => [...keys.root(), 'like', id] as const,
};

export function useGetArticles() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getArticleQuery,
  });
}

export function useGetArticleDetail(id: number) {
  return useQuery({
    queryKey: keys.article(id),
    queryFn: () => getArticleDetailsQuery(id),
  });
}

export function useGetWriterArticle() {
  return useQuery({
    queryKey: keys.root(),
    queryFn: getWriterArticles,
  });
}

export function useUpdateArticleView(id: number) {
  return useQuery({
    queryKey: keys.viewArticle(id),
    queryFn: () => updateViewQuery(id),
  });
}

export function useLikeArticle(id: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: keys.likeArticle(id),
    mutationFn: () => likeArticleQuery(id),
    onSuccess: () => {
      queryClient.invalidateQueries(keys.likeArticle(id));
    },
  });
}

export function useFavoriteArticle(id: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: keys.favArticle(id),
    mutationFn: () => favoriteArticleQuery(id),
    onSuccess: () => {
      queryClient.invalidateQueries(keys.favArticle(id));
    },
  });
}

export function useDeleteArticleQuery(id: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: keys.deleteArticle(id),
    mutationFn: () => deleteArticle(id),
    onSuccess: () => {
      queryClient.invalidateQueries(keys.deleteArticle(id));
      toast.info('Статья успешно удалена!');
    },
  });
}

export function useCreateArticleMutation() {
  return useMutation({
    mutationKey: keys.root(),
    mutationFn: createArticleMutation,
    onSuccess: async () => {
      toast.success('Статья успешна отправлена на модерацию');
      localStorage.setItem('savedImage', null);
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        Object.keys(errors).forEach((field) => {
          toast.error(`${field}: ${errors[field]}`);
        });
      } else {
        toast.error('Ошибка при выполнении запроса');
      }
    },
  });
}

export function useUpdateArticle() {
  return useMutation({
    mutationKey: keys.updateArticle(),
    mutationFn:updateArticle,
    onSuccess: async () => {
      toast.success('Статья успешна отправлена на модерацию');
      localStorage.setItem('savedImage', null);
    },
    onError: (error) => {
      if (error.response && error.response.data) {
        const errors = error.response.data;
        Object.keys(errors).forEach((field) => {
          toast.error(`${field}: ${errors[field]}`);
        });
      } else {
        toast.error('Ошибка при выполнении запроса');
      }
    },
  });
}
