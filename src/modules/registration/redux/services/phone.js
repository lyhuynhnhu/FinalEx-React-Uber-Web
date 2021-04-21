const phoneSubmitService = phone => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var flag = 1 === 1
            flag ? resolve(phone) : reject('Error')
        }, 1000);
    })
}
export default phoneSubmitService