//feet to Mile
function feetToMile(feet){
    if(feet<0){
        return "Opps!! Enter a positive value.";
    }
    else{
        var mile = feet/5280;
        return mile;
    }
}

//Wood Calculator
function woodCalculator(chair, table, bed){
    var woodForChair = chair*1;
    var woodForTable = table*3;
    var woodForBed = bed*5;
    var totalWoodNeed = woodForChair + woodForTable + woodForBed;
    return totalWoodNeed;
}

//Brick Calculator
function brickCalculator(buildingHeight){
    if(buildingHeight > 0 && buildingHeight <=10){
        var brickNeed = (15*buildingHeight)*1000;
        return brickNeed;
    }
    else if(buildingHeight > 10 && buildingHeight <=20){
        var brickNeed = (15*10*1000) + (((buildingHeight-10)*12)*1000);
        return brickNeed;
    }
    else if(buildingHeight > 20){
        var brickNeed = (15*10*1000) + (12*10*1000) + (((buildingHeight-20)*10)*1000);
        return brickNeed;
    }
    else{
        return "Sorry!! Enter a valid value";
    }
}

//tiny Friend
function tinyFriend(friendList){
    var tinyOne = friendList[0].length;
    for(var i=0; i < friendList.length; i++){
        if(friendList[i].length < tinyOne){
            tinyOne = friendList[i];
        }
    }
    return tinyOne;
}