import Repository from './Repository';

class PostRepository {
    static getList(){
        return Repository(`query NewQuery {
        items {
            edges {
                node {
                    queryACF {
                        itemCate
                        itemPrice
                        itemImg {
                            node {
                                filePath
                            }
                        }
                    }
                    title
                }
            }
        }
        }`).getWp();
    }
}

export default PostRepository
