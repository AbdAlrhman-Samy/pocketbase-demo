import useSWR from 'swr'
import { pb } from '../Pocketbase.config';

export default function useUser() {

    async function getUser() {
        if (pb.authStore.isValid)
			return await pb.collection("users").getOne(pb.authStore.model?.id);
    }
    

    return useSWR("users", getUser)
    
}