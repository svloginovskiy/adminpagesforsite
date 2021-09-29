export default class PostService {
    static async getPage(limit = 14, page = 1) {
        let options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        const response = await fetch('/json/posts?limit=' + limit + '&page='+ page, options);
        if (response && response.ok) {
            return response;
        } else {
            return null;
        }
    }
}