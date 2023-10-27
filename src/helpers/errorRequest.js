const errorRequest = (error) => {
    console.error('Произошла ошибка при запросе:', error);
    alert(error);
}

export default errorRequest;