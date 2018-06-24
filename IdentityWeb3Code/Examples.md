# IssueToken
``` javascript
//function issueToken (bytes32 _userID, uint16 _position, bytes32 _issueIDTo, string _verifiedHASH, string _encryptedIPFSLink, uint16 _validity, bytes16 tokenID) 


//bob@aol.com, 0x12341234123412341234123412341234
IdentityContract.issueToken("0x12341234123412341234123412341234", 0, "0x2345234523452345234523452345236", "b1946ac92492d2347c6235b4d2611184", "TEST", 1, "0x0123456789123456", function(err, result){console.log(result)})

//sarah@yahoo.com, 0x2345234523452345234523452345236
IdentityContract.issueToken("0x2345234523452345234523452345236", 0, "0x12341234123412341234123412341234", "591785b794601e212b260e25925636fd", "TEST", 1, "0x0123456789123456", function(err, result){console.log(result)})

//Look up IDCredentials, bob@aol.com
IdentityContract.IndividualCredentials("0x12341234123412341234123412341234", 0, function(err, result){console.log(result[0]),console.log(result[1])})

//Loop up IDCredentials, sarash@yahoo.com
IdentityContract.IndividualCredentials("0x2345234523452345234523452345236", 0, function(err, result){console.log(result[0]),console.log(result[1])})

//Verify Credential
IdentityContract.identityToken("0x12341234123412341234123412341234", "0x2345234523452345234523452345236", "0x0123456789123456", function(err, result){console.log(result[0]),console.log(result[1])})

//Verify Credential
IdentityContract.identityToken("0x2345234523452345234523452345236", "0x12341234123412341234123412341234", "0x0123456789123456", function(err, result){console.log(result[0]),console.log(result[1])})

