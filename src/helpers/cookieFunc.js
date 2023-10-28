const cookie = {
    save(name, value) {
        document.cookie = `${name}=${value}`
    },
    take(name) {
        if (document.cookie) {
            return document.cookie
                .split(';')
                .map(item => item.trim().split('='))
                .find(item => item[0] === name)[1]
        }
    },
    delete() {
        const cookieData = document.cookie.split(';')
            .map(item => item.trim().split('='))
        cookieData.forEach(item => {
            document.cookie = `${item[0]}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
        })

    }
}

export default cookie;

