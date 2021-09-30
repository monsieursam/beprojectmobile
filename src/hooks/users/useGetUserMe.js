import {useQuery} from 'react-query';
import API from 'api';

export default function useGetProjects() {
  return useQuery('user', () => API.get('user').then(res => res.data));
}
