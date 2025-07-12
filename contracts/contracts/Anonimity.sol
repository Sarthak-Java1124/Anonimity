
pragma solidity ^0.8.28;

contract Anonimity {
    struct Messages {
        string messages;
        uint256 messageTimestamp;
    }

    mapping(uint256 => Messages) public Content;
    uint256 public id = 0;
   
   function sendMessage(string memory _message) public  {
         require(bytes(_message).length < 290);
         
         Messages storage newMessage = Content[id];
         newMessage.messages = _message;
         newMessage.messageTimestamp = block.timestamp;
         id++;
   }

   function getMessages(uint _id) public view returns(string memory) {
       return Content[_id].messages;
   }

   function getTotalMessages() public view returns (Messages[] memory){
        uint256 length = id;
         Messages[] memory allMessages = new Messages[](id);

         for(uint256 i = 0 ; i<length ; i++){
            Messages memory items = Content[i];
            allMessages[i] = items;
         }
         return allMessages;
   }

   function getLatestMessage() public view returns(string memory){
                   
                   
   }


}
