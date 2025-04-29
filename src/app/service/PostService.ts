import { object } from 'framer-motion/client';
import RepositoryFactory from '../repositories/RepositoryFactory';
import PostType from '../types/PostTypes';

class PostService{
    static async getList(): Promise<PostType[]> {
        try{
            const res = await RepositoryFactory.post.getList();
            return res.data
        } catch {
            return [];
        }
    }
}

export default PostService