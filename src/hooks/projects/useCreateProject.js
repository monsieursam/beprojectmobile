import API from 'api';
import {useMutation, queryCache} from 'react-query';

export default function useCreateProject() {
  return useMutation(
    values => API.project('/projects', values).then(res => res.data),
    {
      onSuccess: () => queryCache.refetchQueries('projects'),
    },
  );
}
