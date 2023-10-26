//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Dappazon {

    address public owner;

   struct Item {
    uint256 id;
    string name;
    string description;
    string image;
    uint256 costs;
    uint256 ratings;
    uint256 stock;
   }

   struct Order{
    uint256 time;
    Item item;
   }

   event Buy(address buyer, uint256 orderId, uint256 itemId);
   event List(string name ,uint256 costs, uint256 quantity);

   mapping (uint256 => Item)public Items;
   mapping (address =>uint256)public orderCount;
   mapping(address =>mapping(uint256=>Order))public orders;

   modifier onlyOwner(){
    require(msg.sender==owner);
    _;
   }
    constructor(){
      
        owner=msg.sender;
    }

    function list(uint256 _id, 
    string memory _name, 
    string memory _description, 
    string memory _image,
    uint256 _costs,
    uint256 _ratings,
    uint256 _stock
    )public onlyOwner() {
        

Item memory item = Item(
    _id,
    _name,
_description,
_image,
_costs,
_ratings,
_stock);
Items[_id]=item;
//save the item struct to the blockchain

//emit the event
emit List(_name, _costs,_stock);
    }

    function buy(uint256 _id)public payable{
       
//fetch item
       Item memory item =Items[_id];
       require(msg.value >= item.costs);
      // create an order
Order memory order = Order(block.timestamp,item);
        
      //  save order to the chain
        orderCount[msg.sender]++;
        orders[msg.sender][orderCount[msg.sender]]=order;
        

      //  substract stock
        Items[_id].stock=item.stock-1;

      //  emit event
        emit Buy(msg.sender,orderCount[msg.sender],item.id);
    }

    function withDraw()public onlyOwner{
        (bool success,)=owner.call{value:address(this).balance}("");
        require(success);
    }


}
