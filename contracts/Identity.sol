pragma solidity ^0.4.23;

contract Identity {


    //Structs
    struct identityTokenStruct {
        string verifiedHASH;
        string encryptedIPFSLink;
        uint16 validity;
        bool ownerAccepts;
    }
    struct identityAddress {
        address accountAddress;
        bool valid;
    }


    //Mappings
    mapping (address => bytes32[]) public publicKeyToIdentity;
    mapping (bytes32 => string) public email;
    mapping (bytes32 => string) public IPFSDomain;
    mapping (bytes32 => bool) public validIdentityKeys;
    mapping (bytes32 => identityAddress[]) public identities;

    //User, Issuer, Certification ID
    mapping (bytes32 => mapping(bytes32 => mapping(bytes16 => identityTokenStruct))) public identityToken;


    /*
        Add the ability to look up credentials easily from a 
    */
    struct IndividualCredential {
        bytes32 from;
        bytes16 name;
    }
    mapping (bytes32 => IndividualCredential[]) public IndividualCredentials;


    //This stuct maps to metadata or IPFS hash that explains what the token is about for people who do not know what the token is
    mapping (bytes32 => mapping(bytes16 => string)) public tokenMetadata;


    address public admin;
    constructor() public {
        admin = msg.sender;
    }

    
    function createIdentity (bytes32 _identityKey) 
        public returns (bool) {
        if(validIdentityKeys[_identityKey] == false){
            validIdentityKeys[_identityKey] = true;
            identities[_identityKey].push(identityAddress(msg.sender, true));
            publicKeyToIdentity[msg.sender].push(_identityKey);
            return(true);
        }
        else{
            return(false);
        }
    }


    function addPublicKey (bytes32 _userID, uint16 _position, address newPublicKey) 
        public returns(bool) {
        if(identities[_userID][_position].accountAddress == msg.sender && identities[_userID][_position].valid == true){
            identities[_userID].push(identityAddress(newPublicKey, true));
            publicKeyToIdentity[msg.sender].push(_userID);
            return(true);
        }
        else {
            return(false);
        }
    }


    function addIPFSDomain (bytes32 _userID, uint16 _position, string _IPFSDomain) 
        public returns (bool) {
        if(identities[_userID][_position].accountAddress == msg.sender && identities[_userID][_position].valid == true){
            IPFSDomain[_userID] = _IPFSDomain;
            return (true);
        }
        else {
            return(false);
        }
    }


    function issueToken (bytes32 _userID, uint16 _position, bytes32 _issueIDTo, string _verifiedHASH, string _encryptedIPFSLink, uint16 _validity, bytes16 tokenID) 
        public returns (bool) {
        if(identities[_userID][_position].accountAddress == msg.sender && identities[_userID][_position].valid == true){
            identityToken[_issueIDTo][_userID][tokenID] = identityTokenStruct(_verifiedHASH, _encryptedIPFSLink, _validity, false);
            IndividualCredentials[_userID].push(IndividualCredential(_issueIDTo, tokenID)); 
            return true;
        }
        return false;
    }


    function revokeIssuedToken (bytes32 _userID, uint16 _position, bytes32 _issueIDTo, uint16 _validity, bytes16 tokenID) 
        public returns (bool) {
        if(identities[_userID][_position].accountAddress == msg.sender && identities[_userID][_position].valid == true){
            identityToken[_issueIDTo][_userID][tokenID].validity = _validity;
        }
    }


    function acceptToken (bytes32 _userID, uint16 _position, bytes32 _issuerID, bytes16 _certID) 
        public returns (bool) {
        if(identities[_userID][_position].accountAddress == msg.sender && identities[_userID][_position].valid == true){
            identityToken[_userID][_issuerID][_certID].ownerAccepts = true;
            return true;
        }
        return false;
    }


    function revokeToken (bytes32 _userID, uint16 _position, bytes32 _issuerID, bytes16 _certID) 
        public returns (bool) {
        if(identities[_userID][_position].accountAddress == msg.sender && identities[_userID][_position].valid == true){
            identityToken[_userID][_issuerID][_certID].ownerAccepts = false;
            return true;
        }
        return false;
    }


    function addTokenMetaData (bytes32 _userID, uint16 _position, bytes16 _certID, string _metaData) 
        public returns (bool) {
        if(identities[_userID][_position].accountAddress == msg.sender && identities[_userID][_position].valid == true){
            tokenMetadata[_userID][_certID] = _metaData;
            return true;
        }
        return false;
    }


    function setEmail (bytes32 _userID, uint16 _position, string _email) 
        public returns (bool) {
        if(identities[_userID][_position].accountAddress == msg.sender && identities[_userID][_position].valid == true){
            email[_userID] = _email;
            return true;
        }
        return false;
    }
}