const app = Vue.createApp({
    delimiters: ["[[", "]]"],
    data(){
        return{
            board: [
                {
                    id:0
                },
                {  
                    id: 1 ,
                    price: 30,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 2,
                    price: 50,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 3,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 4,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 5,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 6,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 7,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 7,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 8,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 9,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 10,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 11,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 12,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 13,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                },
                {
                    id: 14,
                    price: 20,
                    owner: 'None',
                    rent: 5,
                }


            ],

            player1: {
                location:0,
                name:'Bob',
                bank: 500,
                turn: 0,
                playerTurn: false,
                gocollection: false,
                properties: [],
                currentProperty: ""
            }, 
            player2: {
                location: 0,
                name: 'Sara',
                bank: 500,
                turn: 0,
                playerTurn: false,
                gocollection: false,
                properties: [],
                currentProperty: ""

            }



        }
    },
    methods: {
        movePlayerTwo(){
            this.player2.playerTurn = true
            this.player1.playerTurn = false
            this.player2.diceroll = this.rolldice()
            // console.log(this.player2.location)
            this.player2.location = this.player2.location + this.player2.diceroll
            // console.log("location after update")
            // console.log(this.player2.location)
            this.player2.turn += 1
            if (this.player2.location >= 14){
                this.player2.location -= 14
                this.player2.gocollection = true
            }
          
        },


        movePlayerOne(){
            this.player1.playerTurn = true
            this.player2.playerTurn = false
            this.player1.diceroll = this.rolldice()
            this.player1.location = this.player1.location + this.player1.diceroll
            this.player1.turn += 1
            console.log(this.player1.turn)
            if (this.player1.location >= 14){
                this.player1.location -= 14
                this.player1.gocollection = true
            }
          console.log(this.player1.location)
        },

        rolldice() {
            return  Math.floor(Math.random() * (6 - 1) + 1)
            
            },

        collectP2GoMoney(){
            this.player2.bank = this.player2.bank += 50
            this.player2.gocollection = false
        },
        collectP1GoMoney(){
            this.player1.bank = this.player1.bank += 50
            this.player1.gocollection = false
        },
        buy(){
           const propertyIndex= this.player1.location
           this.board[propertyIndex -1].owner = this.player1.name
        }
        
    },
    mounted(){
    }
})