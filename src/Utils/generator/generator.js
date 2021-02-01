const GenerateStringId = (str, length) => {
    let result = ""
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;

    for (let i = 0; i < charactersLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * length))
    }

    return result
}

export {GenerateStringId}