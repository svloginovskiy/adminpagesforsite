export default class UserService {
    static async getPage(limit = 14, page = 1) {
        let options = {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        };
        const response = await fetch('/json/users?limit=' + limit + '&page='+ page, options);
        return response;
    }

    static async deleteUser(id) {
        await fetch(`/admin/users/${id}/delete`, {method: 'POST', headers: {'Content-Type': 'application/x-www-form-urlencoded'}});
    }

    static async saveUser(user) {
        await fetch(`/newadmin/users/${user.id}/edit`, {
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            body: new URLSearchParams(user)
        });
    }
}