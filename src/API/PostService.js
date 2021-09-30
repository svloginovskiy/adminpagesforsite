export default class PostService {
    static async getPage(limit = 14, page = 1) {
        let options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        const response = await fetch('/json/posts?limit=' + limit + '&page=' + page, options);
        return response;
    }

    static async deletePost(id) {
        await fetch(`/admin/posts/${id}/delete`, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    }

    static async savePost(post) {
        await fetch(`/newadmin/posts/${post.id}/edit`, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams(post)
        })
    }
}