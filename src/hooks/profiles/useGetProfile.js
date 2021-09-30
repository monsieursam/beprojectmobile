import {useQuery} from 'react-query';
import API from 'api';

export const fetchProject = username => {
  return API.get(`profile/${username}`).then(res => res.data);
};

export default function useProject(username) {
  return useQuery(['profile', username], () =>
    API.get(`profile/${username}`).then(res => res.data),
  );
}
