import API from 'api';
import {useMutation, useQueryClient} from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useCreateUser() {
  const cache = useQueryClient();

  return useMutation(
    values => API.post('/users', values).then(res => res.data),
    {
      onSuccess: value => {
        console.log(value);
        try {
          AsyncStorage.setItem('@token', value.user.token);
        } catch (e) {
          // saving error
        }
        return cache.refetchQueries();
      },
    },
  );
}
