import {useInfiniteQuery} from 'react-query';
import API from 'api';

export default function useInfiniteProjects() {
  return useInfiniteQuery(
    'infinitePosts',
    (key, nextPageOffset = 0) =>
      API.get('/projects', {
        params: {
          pageSize: 3,
          pageOffset: nextPageOffset,
        },
      }).then(res => res.data),
    {
      getFetchMore: lastResult => lastResult.nextPageOffset,
    },
  );
}
