import useSWRMutation from 'swr/mutation'
import { pb } from '../Pocketbase.config';

export default function useLogin() {

    async function login(key, {arg}) {
        return await pb.collection(key).authWithPassword(arg.email, arg.password);
    }    
    
    return useSWRMutation('users', login)
    
};
