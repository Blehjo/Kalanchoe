export default {
    user(url = baseUrl + 'user/') {
        return {
            fetchAll: () => axios.get(url),
            fetchById: id => axios.get(url + id),
            create: newUser => axios.post(url, newUser),
            update: (id, updateUser) => axios.put(url + id, updateUser),
            delete: id => axios.delete(url + id)
        }
    }
}