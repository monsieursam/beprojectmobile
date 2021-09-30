import {useQuery} from 'react-query';
import API from 'api';

export default function useGetTags() {
  return useQuery('tags', () => API.get('/tags').then(res => res.data));
}
