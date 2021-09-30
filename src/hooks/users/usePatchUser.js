import API from 'api';
import {useMutation, useQueryClient} from 'react-query';

export default function useCreateProject() {
  const cache = useQueryClient();

  return useMutation(values => API.put('/user', values).then(res => res.data), {
    onSuccess: data => cache.refetchQueries(),
  });
}
