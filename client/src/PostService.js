import axios from 'axios';

const url = 'api/posts/';

class PostService {
    // Get Posts
    static getPosts() {
            return new Promise((resolve, reject) => {
                axios.get(url).then((res) => {
                        const data = res.data;
                        resolve(
                            data.map(post => ({
                                ...post,
                                createdAt: new Date(post.createdAt)
                            }))
                        );
                    })
                    .catch((err) => {
                        reject(err);
                    })

            });
        }
        // Create Post
    static insertPost(name, text) {
            return axios.post(url, {
                name,
                text
            });
        }
        // Update Posts
    static updatePost(id, name, text) {
        return axios.put(`${url}${id}`, {
            name,
            text
        });
    }

    // Delete Post
    static deletePost(id) {
        return axios.delete(`${url}${id}`);
    }


}

export default PostService;