class Player{
    constructor(){
this.index = null;
this.distance = 0
this.name = null;
    }

   update(){
var playerIndex = "players/player"+playerCount
    database.ref(playerIndex).set({name:this.name , distance:this.distance})

   }
   getCount(){

    database.ref('playerCount').on("value",(data)=>{
        playerCount = data.val();
    })
   }

updateCount(count){

    database.ref('/').update({

        playerCount: count

    })

}
static getPlayerInfo(){

    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value" , (data)=>{
        allPlayers = data.val();
    })
}
}