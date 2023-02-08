import useSWRMutation from 'swr/mutation'
import { pb } from '../Pocketbase.config';

export default function useSignup() {

    async function signup(key, {arg}) {

        const {email, password, passwordConfirm, name, username, avatarURL } = arg
        return await pb.collection(key).create({
            email,
            password,
            passwordConfirm,
            name,
            username,
            avatarURL
        });

    }    
    
    return useSWRMutation('users', signup)
    
};
