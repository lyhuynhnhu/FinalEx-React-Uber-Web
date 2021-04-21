const otpSubmitService = otp => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            var flag = 1 === 1
            flag ? resolve(otp) : reject('Error')
        }, 1000);
    })
}
export default otpSubmitService