import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createArticleMutation,
  favoriteArticleQuery,
  getArticleDetailsQuery,
  getArticleQuery,
  likeArticleQuery,
  updateViewQuery,
} from './article.api';
import { toast } from 'react-toastify';

const keys = {
  root: () => ['article'],
  article: (id: number) => [...keys.root(), 'byId', id] as const,
  createArticle: () => [...keys.root(), 'create'] as const,
  updateArticle: (id: number) => [...keys.root(), 'update', id] as const,
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
      queryClient.invalidateQueries(keys.likeArticle());
    },
  });
}

export function useFavoriteArticle(id: number) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: keys.favArticle(id),
    mutationFn: () => favoriteArticleQuery(id),
    onSuccess: () => {
      queryClient.invalidateQueries(keys.favArticle()); 
    },
  });
}

export function useCreateArticleMutation() {
  return useMutation({
    mutationKey: keys.root(),
    mutationFn: createArticleMutation,
    onSuccess: async () => {
      toast.success('Статья успешна отправлена на модерацию');
      localStorage.setItem('editorContent', '');
      localStorage.setItem('savedImage', null);
    },
    onError: (error) => {
      const errorMessage = error
        ? error?.response?.data.detail
        : 'Ошибка при выполнении запроса';
      toast.error(errorMessage);
    },
  });
}
