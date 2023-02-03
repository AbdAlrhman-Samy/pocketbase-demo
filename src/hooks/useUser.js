// import useSWR from 'swr'
// import { pb } from '../Pocketbase.config';

// const login = async (data) => {

    
//     if(data){
//         console.log(data);

//         try {
//             return await pb.collection('users').create(data);
//         } catch (error) {
//             console.log(error.data);
//             return error.data.data
//         }

//     }

    

// }

// export default function useUser (credentials) {


//     const { data, error } = useSWR(credentials, login)


//     return {
//         user: data,
//         error,
//     }

// }