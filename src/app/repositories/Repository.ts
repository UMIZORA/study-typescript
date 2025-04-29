import axios from 'axios';

//process.env.WORDPRESS_API_URL　環境変数でのエンドポイント

const repository = axios.create({
    baseURL: 'https://www.yoroi.umizora.co.jp/wp/graphql',
    headers: {
        'Content-Type': 'application/json'
    }
})

const Repository = (query: string, { variables }: Record<string, any> = {}) => {
    const body ={
        query,
        variables
    }
    return {
        getWp() {
            return repository.post('/', body)
        }
    }
}

export default Repository


