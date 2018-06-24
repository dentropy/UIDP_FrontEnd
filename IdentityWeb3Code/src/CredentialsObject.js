var CredentialsObject = [];

function GetIdentities() {
    IdentityContract.publicKeyToIdentity(web3.eth.coinbase, 0, function (err, result) {
        if (!err) {
            CredentialsObject.push({
                id: result.substring(0, result.length - 33)
            })
            GetMetaData(result)
            LookupCredentials(result);
        }
        console.log("ID is " + result);
    })
}

function GetMetaData(tmpID) {
    //your code to be executed after 1 second
    console.log("Getting Metadata")
    IdentityContract.email(CredentialsObject[0].id, function (err, result) {
        console.log(result)
        CredentialsObject[0].email = result
    })
    //your code to be executed after 1 second
    console.log("Getting Metadata")
    IdentityContract.IPFSDomain(CredentialsObject[0].id, function (err, result) {
        console.log(result)
        CredentialsObject[0].IPFSDomain = result
    })
}