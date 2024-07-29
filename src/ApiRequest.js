const ApiRequest = async (url = '' , optionsObj = null , errMsg = null) => {
    
    try {

        const response =  fetch(url, optionsObj)
        if(!response.ok) throw Error("could not fetch the data")
        
    }
    catch (err) {
        errMsg = err.message;
    } finally{
        return errMsg
    }
}

export default ApiRequest