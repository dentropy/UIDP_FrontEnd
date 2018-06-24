var CredentialsObject = [];

function GetIdentities() {
    for (var i = 0; i < 7; i++) {
        console.log(i);
        try {
            IdentityContract.publicKeyToIdentity(web3.eth.coinbase, i, function (err, result) {
                if (!err) {
                    CredentialsObject.push({
                        id: result
                    })
                    GetMetaData(i, result)
                    LookupCredentials(i, result);
                }
                console.log(result);
            })
        } catch (err) {
            console.log(err);
            console.log("Caught the Error")
        }
    }
}

function GetMetaData(tmpi, tmpID) {
    setTimeout(function () {
        try {
            //your code to be executed after 1 second
            console.log("Getting Metadata")
            IdentityContract.email(tmpID, function (err, result) {
                console.log(result)
                CredentialsObject[tmpi].email = result
            })
        } catch (err) {
            console.log(err);
            console.log("Caught the Error")
        }
        try {
            //your code to be executed after 1 second
            console.log("Getting Metadata")
            IdentityContract.IPFSDomain(tmpID, function (err, result) {
                console.log(result)
                CredentialsObject[tmpi].IPFSDomain = result
            })
        } catch (err) {
            console.log(err);
            console.log("Caught the Error")
        }
    }, 1000);
}




function GetMetaData(tmpi, tmpID) {
    setTimeout(function () {
        try {
            //your code to be executed after 1 second
            console.log("Getting Metadata")
            IdentityContract.email(tmpID, function (err, result) {
                console.log(result)
                CredentialsObject[tmpi].email = result
            })
        } catch (err) {
            console.log(err);
            console.log("Caught the Error")
        }
        try {
            //your code to be executed after 1 second
            console.log("Getting Metadata")
            IdentityContract.IPFSDomain(tmpID, function (err, result) {
                console.log(result)
                CredentialsObject[tmpi].IPFSDomain = result
            })
        } catch (err) {
            console.log(err);
            console.log("Caught the Error")
        }
    }, 1000);
}