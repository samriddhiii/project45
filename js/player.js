class Player
{
    constructor(){
        this.name=""
        this.x=1
        this.y=0
        this.index=null
        this.rank=0
    }

    getCount(){
      var dbref= database.ref("playerCount")
      dbref.on("value", function(data){
        playerCount = data.val()
      })
    }

    update(){
        var playerIndex = "Players/player" + this.index
        if(this.x===1)
        {
          if (this.index===1)
          {
            this.x = 400

          }
          else if(this.index===2)
          {
            this.x = 625
          }
          else if(this.index===3)
          {
            this.x = 875
          }
          else
          {
             this.x = this.index * 275
          }
        }
     database.ref(playerIndex).set({
      name:this.name,
      x:this.x,
      y:this.y,
      rank:this.rank
     })
    }

    updateCount(count){
     database.ref("/").update({playerCount:count})
    }

    static updateFinishedCars(count){
      database.ref("/").update({finishedCars:count})
      var dbref = database.ref("finishedCars")
      dbref.on("value", (data)=>{
        FinishedCars= data.val()
      })
    }

    getFinishedCarsCount(){
      var dbref= database.ref("finishedCars")
      dbref.on("value", (data)=>{
        this.rank= data.val()
      })
    }

    static getAllPlayersInfo()
    {
        var dbref= database.ref("Players") //player1 - name, distance, player2 - name, distance
      dbref.on("value", (data)=>{
          allPlayers = data.val()
      })
    }
}