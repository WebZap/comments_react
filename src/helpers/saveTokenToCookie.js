const saveToken = (token) => {
    debugger
    document.cookie = `token=${token}; Session;`
}
export default saveToken