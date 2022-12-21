const app = Vue.createApp({
    delimiters: ["[[", "]]"],
    data() {
        return {
            currentUser: {},
            csrfToken: '',
            gameovermessage: '',
            hotelError: '',
            monopolyerror: '',
            nextplayermessage: '',
            errorMessage: '',
            rentmessage: '',
            buymessage: '',
            monopolyMessage: '',
            monopolyapp: [],
            newScore: {
                "winner": "",
                "rounds": ""
                
            },
            board: [
                {
                    id: 0
                },
                {
                    id: 1,
                    spacename: 'Mediterranean Avenue',
                    family: 'brown',
                    price: 60,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 2,
                    setrent: 4,
                    house1rent: 10,
                    house2rent: 30,
                    house3rent: 90,
                    house4rent: 160,
                    hotelrent: 250,
                    housecost: 50,
                    hotelcost: 350

                },
                {
                    id: 2,
                    spacename: 'income Tax',

                },
                {
                    id: 3,
                    spacename: 'Baltic Avenue',
                    family: 'brown',
                    price: 60,
                    hotel: 0,
                    houses: 0,
                    owner: 'None',
                    rent: 4,
                    setrent: 8,
                    house1rent: 20,
                    house2rent: 60,
                    house3rent: 180,
                    house4rent: 320,
                    hotelrent: 450,
                    housecost: 50,
                    hotelcost: 350
                },
                {
                    id: 4,
                    spacename: 'Oriental Avenue',
                    family: 'lightblue',
                    price: 100,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 6,
                    setrent: 12,
                    house1rent: 30,
                    house2rent: 90,
                    house3rent: 270,
                    house4rent: 400,
                    hotelrent: 550,
                    housecost: 50,
                    hotelcost: 350
                },
                {
                    id: 5,
                    spacename: 'chance'
                },
                {
                    id: 6,
                    spacename: 'Vermont Avenue',
                    family: 'lightblue',
                    price: 100,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 6,
                    setrent: 12,
                    house1rent: 30,
                    house2rent: 90,
                    house3rent: 270,
                    house4rent: 400,
                    hotelrent: 550,
                    housecost: 50,
                    hotelcost: 350
                },
                {
                    id: 7,
                    spacename: 'Connecticut Avenue',
                    family: 'lightblue',
                    price: 120,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 8,
                    setrent: 16,
                    house1rent: 40,
                    house2rent: 100,
                    house3rent: 300,
                    house4rent: 450,
                    hotelrent: 600,
                    housecost: 50,
                    hotelcost: 350
                },
                {
                    id: 8,
                    spacename: 'Jail'
                },
                {
                    id: 9,
                    spacename: 'St Charles Place',
                    family: 'pink',
                    price: 140,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 10,
                    setrent: 20,
                    house1rent: 50,
                    house2rent: 150,
                    house3rent: 450,
                    house4rent: 625,
                    hotelrent: 750,
                    housecost: 100,
                    hotelcost: 500
                },
                {
                    id: 10,
                    spacename: 'States Avenue',
                    family: 'pink',
                    price: 140,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 10,
                    setrent: 20,
                    house1rent: 50,
                    house2rent: 150,
                    house3rent: 450,
                    house4rent: 625,
                    hotelrent: 750,
                    housecost: 100,
                    hotelcost: 500
                },
                {
                    id: 11,
                    spacename: 'Virginia Avenue',
                    family: 'pink',
                    price: 160,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 12,
                    setrent: 24,
                    house1rent: 60,
                    house2rent: 180,
                    house3rent: 500,
                    house4rent: 700,
                    hotelrent: 900,
                    housecost: 100,
                    hotelcost: 500
                },
                {
                    id: 12,
                    spacename: 'Community Chest'
                },
                {
                    id: 13,
                    spacename: 'St. James Place',
                    family: 'orange',
                    price: 180,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 14,
                    setrent: 28,
                    house1rent: 70,
                    house2rent: 200,
                    house3rent: 550,
                    house4rent: 750,
                    hotelrent: 950,
                    housecost: 100,
                    hotelcost: 500
                },
                {
                    id: 14,
                    spacename: 'Tennessee Avenue',
                    family: 'orange',
                    price: 180,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 14,
                    setrent: 28,
                    house1rent: 70,
                    house2rent: 200,
                    house3rent: 550,
                    house4rent: 750,
                    hotelrent: 950,
                    housecost: 100,
                    hotelcost: 500
                },
                {
                    id: 15,
                    spacename: 'New York Avenue',
                    family: 'orange',
                    price: 200,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 16,
                    setrent: 32,
                    house1rent: 80,
                    house2rent: 220,
                    house3rent: 600,
                    house4rent: 800,
                    hotelrent: 1000,
                    housecost: 100,
                    hotelcost: 500
                },
                {
                    id: 16,
                    spacename: 'Free Parking'
                },
                {
                    id: 17,
                    spacename: 'Kentucky Avenue',
                    family: 'red',
                    price: 220,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 18,
                    setrent: 36,
                    house1rent: 90,
                    house2rent: 250,
                    house3rent: 700,
                    house4rent: 875,
                    hotelrent: 1000,
                    housecost: 150,
                    hotelcost: 750
                },
                {
                    id: 18,
                    spacename: 'Illinois Avenue',
                    family: 'red',
                    price: 240,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 20,
                    setrent: 40,
                    house1rent: 100,
                    house2rent: 300,
                    house3rent: 750,
                    house4rent: 925,
                    hotelrent: 1100,
                    housecost: 150,
                    hotelcost: 750
                },
                {
                    id: 19,
                    spacename: 'Indiana Avenue',
                    family: 'red',
                    price: 220,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 18,
                    setrent: 36,
                    house1rent: 90,
                    house2rent: 250,
                    house3rent: 700,
                    house4rent: 875,
                    hotelrent: 1050,
                    housecost: 150,
                    hotelcost: 750

                },
                {
                    id: 20,
                    spacename: 'chance'
                },
                {
                    id: 21,
                    spacename: 'Atlantic Avenue',
                    family: 'yellow',
                    price: 260,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 22,
                    setrent: 44,
                    house1rent: 110,
                    house2rent: 330,
                    house3rent: 800,
                    house4rent: 975,
                    hotelrent: 1150,
                    housecost: 150,
                    hotelcost: 750
                },
                {
                    id: 22,
                    spacename: 'Ventor Avenue',
                    family: 'yellow',
                    price: 260,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 22,
                    setrent: 44,
                    house1rent: 110,
                    house2rent: 330,
                    house3rent: 800,
                    house4rent: 975,
                    hotelrent: 1150,
                    housecost: 150,
                    hotelcost: 750
                },
                {
                    id: 23,
                    spacename: 'Marvin Gardens',
                    family: 'yellow',
                    price: 260,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 24,
                    setrent: 48,
                    house1rent: 120,
                    house2rent: 360,
                    house3rent: 850,
                    house4rent: 1025,
                    hotelrent: 1200,
                    housecost: 150,
                    hotelcost: 750
                },
                {
                    id: 24,
                    spacename: 'Go to Jail',
                },
                {
                    id: 25,
                    spacename: 'Pensylvania Avenue',
                    family: 'green',
                    price: 320,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 28,
                    setrent: 56,
                    house1rent: 150,
                    house2rent: 450,
                    house3rent: 1000,
                    house4rent: 1200,
                    hotelrent: 1400,
                    housecost: 200,
                    hotelcost: 1000
                },
                {
                    id: 26,
                    spacename: 'Community Chest'
                },
                {
                    id: 27,
                    spacename: 'Pacific Avenue',
                    family: 'green',
                    price: 300,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 26,
                    setrent: 52,
                    house1rent: 130,
                    house2rent: 390,
                    house3rent: 900,
                    house4rent: 1100,
                    hotelrent: 1275,
                    housecost: 200,
                    hotelcost: 1000
                },
                {
                    id: 28,
                    spacename: 'North Carolina Avenue',
                    family: 'green',
                    price: 300,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 26,
                    setrent: 52,
                    house1rent: 130,
                    house2rent: 390,
                    house3rent: 900,
                    house4rent: 1100,
                    hotelrent: 1275,
                    housecost: 200,
                    hotelcost: 1000
                },
                {
                    id: 29,
                    spacename: 'Boardwalk',
                    family: 'darkblue',
                    price: 400,
                    houses: 0,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 50,
                    setrent: 100,
                    house1rent: 200,
                    house2rent: 600,
                    house3rent: 1400,
                    house4rent: 1700,
                    hotelrent: 2000,
                    housecost: 200,
                    hotelcost: 1000
                },

                {
                    id: 30,
                    spacename: 'Luxury Tax',
                    fee: 75
                },
                {
                    id: 31,
                    spacename: 'Park Place',
                    family: 'darkblue',
                    price: 350,
                    houses: 0,
                    hotel: 0,
                    owner: 'None',
                    rent: 35,
                    setrent: 70,
                    house1rent: 175,
                    house2rent: 500,
                    house3rent: 1100,
                    house4rent: 1300,
                    hotelrent: 1500,
                    housecost: 200,
                    hotelcost: 1000
                },


            ],


            player1: {
                location: 0,
                name: '',
                bank: 1500,
                turn: 0,
                playerTurn: false,
                gocollection: false,
                properties: [],
                monopolies: []
            },
            player2: {
                location: 0,
                name: 'Sara',
                bank: 1500,
                turn: 0,
                playerTurn: false,
                gocollection: false,
                properties: [],
                monopolies: []

            }



        }


    },
    methods: {
        
        loadCurrentUser(){
            axios({
                method: 'get',
                url: '/usersapp/currentuser/'
            }).then(response => {
                this.currentUser = response.data
                console.log('CU', response.data)
                
            })
        },



        assignplayer1(){
            {
                console.log('test')
                axios({
                    method: 'get',
                    url: '/usersapp/currentuser/'
                }).then(response => {
                    this.player1.name = response.data.username
                    console.log('CU', response.data)
                    
                })
            }
    
        },

        movePlayerTwo() {
            this.gameOver()
            this.hotelError = ''
            this.monopolyerror = ''
            this.buymessage = ''
            this.nextplayermessage = ''
            this.monopolyMessage = ''
            this.rentmessage = ''
            this.errorMessage = ''
            this.player2.playerTurn = true
            this.player1.playerTurn = false
            this.player2.diceroll = this.rolldice()
            this.player2.location = this.player2.location + this.player2.diceroll
            this.player2.turn += 1
            if (this.player2.location >= 32) {
                this.player2.location -= 32
                this.player2.gocollection = true
            }
            this.payRent()
            this.buyprompt()


        },


        movePlayerOne() {
            this.gameOver()
            this.hotelError = ''
            this.monopolyerror = ''
            this.monopolyMessage = ''
            this.nextplayermessage = ''
            this.rentmessage = ''
            this.errorMessage = ''
            this.buymessage = ''
            this.player1.playerTurn = true
            this.player2.playerTurn = false
            this.player1.diceroll = this.rolldice()
            this.player1.location = this.player1.location + this.player1.diceroll
            this.player1.turn += 1
            if (this.player1.location >= 32) {
                this.player1.location -= 32
                this.player1.gocollection = true
            }
            this.payRent()
            this.buyprompt()
        },

        rolldice() {
            // return Math.floor(Math.random() * (6 - 1) + 1)
            return 1

        },

        collectP2GoMoney() {
            this.player2.bank = this.player2.bank += 50
            this.player2.gocollection = false
        },
        collectP1GoMoney() {
            this.player1.bank = this.player1.bank += 50
            this.player1.gocollection = false
        },

        buyprompt() {
            if (this.board[playerIndex].owner == 'None') {
                this.buymessage = `This property is unowned, would you like to purchase for ${this.board[playerIndex].price} ?`
            }
        },
        buy() {
            if (this.player2.playerTurn == true) {
                playerIndex = this.player2.location
                if (this.board[playerIndex].owner == 'None') {
                    this.player2.bank -= this.board[playerIndex].price
                    this.board[playerIndex].owner = this.player2.name
                    this.nextplayermessage = 'Player 1 roll!'
                    this.buymessage = ''
                    this.rentmessage = ''
                    this.player2.properties.push(this.board[playerIndex].spacename)
                    this.checkForP2Monopoly()
                    
                    
                }
            }

            if (this.player1.playerTurn == true) {
                playerIndex = this.player1.location
                if (this.board[playerIndex].owner == 'None') {

                    this.player1.bank -= this.board[playerIndex].price
                    this.board[playerIndex].owner = this.player1.name
                    this.nextplayermessage = 'Player 2 roll!'
                    this.buymessage = ''
                    this.rentmessage = ''
                    this.player1.properties.push(this.board[playerIndex].spacename)
                    this.checkForP1Monopoly()
                    
                }
                
            }
            this.gameOver()


        },
        payRent() {
            this.gameOver()
            this.rentIncrease()
            if (this.player1.playerTurn == true) {
                playerIndex = this.player1.location
                if (this.board[playerIndex].owner == this.player2.name) {
                    this.player1.bank -= this.board[playerIndex].rent
                    this.nextplayermessage = 'Player 2 roll!'
                    this.buymessage = ''
                    this.rentmessage = `You landed on your opponents property. Time to pay rent! -${this.board[playerIndex].rent}`
                }
            }
            if (this.player2.playerTurn == true) {
                playerIndex = this.player2.location
                if (this.board[playerIndex].owner == this.player1.name) {
                    this.player2.bank -= this.board[playerIndex].rent
                    this.nextplayermessage = 'Player 1 roll!'
                    this.buymessage = ''
                    this.rentmessage = `You landed on your opponents property. Time to pay rent! -${this.board[playerIndex].rent}`
                }
            }
        },
        rentprompt() {
            if (this.board[playerIndex].owner == this.player1.name) {
                this.rentmessage = `You landed on your opponents property. Time to pay rent! -${this.board[playerIndex].rent}`
            }
            if (this.board[playerIndex].owner == this.player2.name) {
                this.rentmessage = `You landed on your opponents property. Time to pay rent! -${this.board[playerIndex].rent}`
            }


        },
        checkForP1Monopoly(){
            const redMon = ['Illinois Avenue', 'Indiana Avenue',  'Kentucky Avenue']
            const brownMon = ['Baltic Avenue', 'Mediterranean Avenue']
            const lightblueMon = ['Connecticut Avenue', 'Oriental Avenue',  'Vermont Avenue']
            const pinkMon = ['States Avenue', 'St Charles Place',  'Virginia Avenue']
            const orangeMon = ['New York Avenue', 'St. James Place',  'Tennessee Avenue']
            const yellowMon = ['Atlantic Avenue', 'Marvin Gardens',  'Ventor Avenue']
            const greenMon = ['North Carolina Avenue', 'Pacific Avenue',  'Pensylvania Avenue']
            const darkblueMon = ['Boardwalk', 'Park Place']
           
            
            // check if red monopoly
            if(this.player1.properties.includes(redMon[0])){
                if(this.player1.properties.includes(redMon[1])){
                    if(this.player1.properties.includes(redMon[2])){
                       this.player1.monopolies.push('red')
                    }
                }   
            }
            // if red monopoly, increase rent
            if (this.player1.monopolies.includes('red')){
                this.board[18].rent = this.board[18].setrent
                this.board[19].rent = this.board[19].setrent
                this.board[17].rent = this.board[17].setrent

                // if red monopoly on player 1 and you are on those spaces
                if(this.player1.location > 16 && this.player1.location < 20){
                    this.monopolyMessage = 'You own all red properties. You can now buy houses and rent will double for your opponent!'
                }           
             }


            // check if red monopoly
            if(this.player1.properties.includes(brownMon[0])){
                if(this.player1.properties.includes(brownMon[1])){
                    this.player1.monopolies.push('brown')
                    }
                }   
            
            // if red monopoly, increase rent
            if (this.player1.monopolies.includes('brown')){
                this.board[1].rent = this.board[1].setrent
                this.board[3].rent = this.board[3].setrent

                // if red monopoly on player 1 and you are on those spaces
                if(this.player1.location > 0 && this.player1.location < 4){
                    this.monopolyMessage = 'You own all brown properties. You can now buy houses and rent will double for your opponent!'
                }           
            }



            if(this.player1.properties.includes(lightblueMon[0])){
                if(this.player1.properties.includes(lightblueMon[1])){
                    if(this.player1.properties.includes(lightblueMon[2])){
                       this.player1.monopolies.push('lightblue')
                    }
                }   
            }
            // if red monopoly, increase rent
            if (this.player1.monopolies.includes('lightblue')){
                this.board[4].rent = this.board[4].setrent
                this.board[6].rent = this.board[6].setrent
                this.board[7].rent = this.board[7].setrent

                // if red monopoly on player 1 and you are on those spaces
                if(this.player1.location > 3 && this.player1.location < 8){
                    this.monopolyMessage = 'You own all light blue properties. You can now buy houses and rent will double for your opponent!'
                }           
             }



             if(this.player1.properties.includes(pinkMon[0])){
                if(this.player1.properties.includes(pinkMon[1])){
                    if(this.player1.properties.includes(pinkMon[2])){
                       this.player1.monopolies.push('pink')
                    }
                }   
            }
            // if red monopoly, increase rent
            if (this.player1.monopolies.includes('pink')){
                this.board[10].rent = this.board[10].setrent
                this.board[9].rent = this.board[9].setrent
                this.board[11].rent = this.board[11].setrent

                // if red monopoly on player 1 and you are on those spaces
                if(this.player1.location > 8 && this.player1.location < 12){
                    this.monopolyMessage = 'You own all pink properties. You can now buy houses and rent will double for your opponent!'
                }           
             }
           



             if(this.player1.properties.includes(orangeMon[0])){
                if(this.player1.properties.includes(orangeMon[1])){
                    if(this.player1.properties.includes(orangeMon[2])){
                       this.player1.monopolies.push('orange')
                    }
                }   
            }
            // if red monopoly, increase rent
            if (this.player1.monopolies.includes('orange')){
                this.board[15].rent = this.board[15].setrent
                this.board[13].rent = this.board[13].setrent
                this.board[14].rent = this.board[14].setrent

                // if red monopoly on player 1 and you are on those spaces
                if(this.player1.location > 12 && this.player1.location < 16){
                    this.monopolyMessage = 'You own all orange properties. You can now buy houses and rent will double for your opponent!'
                }           
             }



             if(this.player1.properties.includes(yellowMon[0])){
                if(this.player1.properties.includes(yellowMon[1])){
                    if(this.player1.properties.includes(yellowMon[2])){
                       this.player1.monopolies.push('yellow')
                    }
                }   
            }
            // if red monopoly, increase rent
            if (this.player1.monopolies.includes('yellow')){
                this.board[21].rent = this.board[21].setrent
                this.board[23].rent = this.board[23].setrent
                this.board[22].rent = this.board[22].setrent

                // if red monopoly on player 1 and you are on those spaces
                if(this.player1.location > 20 && this.player1.location < 24){
                    this.monopolyMessage = 'You own all yellow properties. You can now buy houses and rent will double for your opponent!'
                }           
             }



            
             if(this.player1.properties.includes(greenMon[0])){
                if(this.player1.properties.includes(greenMon[1])){
                    if(this.player1.properties.includes(greenMon[2])){
                       this.player1.monopolies.push('green')
                    }
                }   
            }
            console.log(this.player1.properties)
            // if red monopoly, increase rent
            if (this.player1.monopolies.includes('green')){
                this.board[28].rent = this.board[28].setrent
                this.board[27].rent = this.board[27].setrent
                this.board[25].rent = this.board[25].setrent

                // if red monopoly on player 1 and you are on those spaces
                if(this.player1.location > 24 && this.player1.location < 29){
                    this.monopolyMessage = 'You own all green properties. You can now buy houses and rent will double for your opponent!'
                }           
             }



             if(this.player1.properties.includes(darkblueMon[0])){
                if(this.player1.properties.includes(darkblueMon[1])){
                       this.player1.monopolies.push('darkblue')
                    }
                }   
            
            // if red monopoly, increase rent
            if (this.player1.monopolies.includes('darkblue')){
                this.board[29].rent = this.board[29].setrent
                this.board[31].rent = this.board[31].setrent

                // if red monopoly on player 1 and you are on those spaces
                if(this.player1.location === 29 || this.player1.location === 31){
                    this.monopolyMessage = 'You own all dark blue properties. You can now buy houses and rent will double for your opponent!'
                }           
             }
        
        

            
    
        },

        checkForP2Monopoly(){
            const redMon = ['Illinois Avenue', 'Indiana Avenue',  'Kentucky Avenue']
            const brownMon = ['Baltic Avenue', 'Mediterranean Avenue']
            const lightblueMon = ['Connecticut Avenue', 'Oriental Avenue',  'Vermont Avenue']
            const pinkMon = ['States Avenue', 'St Charles Place',  'Virginia Avenue']
            const orangeMon = ['New York Avenue', 'St. James Place',  'Tennessee Avenue']
            const yellowMon = ['Atlantic Avenue', 'Marvin Gardens',  'Ventor Avenue']
            const greenMon = ['North Carolina Avenue', 'Pacific Avenue',  'Pensylvania Avenue']
            const darkblueMon = ['Boardwalk', 'Park Place']
          
            

            // check if red monopoly
            if(this.player2.properties.includes(redMon[0])){
                if(this.player2.properties.includes(redMon[1])){
                    if(this.player2.properties.includes(redMon[2])){
                        this.player2.monopolies.push('red')
                    }
                }   
            }
            // if red monopoly, increase rent
            if (this.player2.monopolies.includes('red')){
                this.board[18].rent = this.board[18].setrent
                this.board[19].rent = this.board[19].setrent
                this.board[17].rent = this.board[17].setrent

                            // if red monopoly on player 1 and you are on those spaces
                            if(this.player2.location > 16 && this.player2.location < 20){
                                this.monopolyMessage = 'You own all red properties. You can now buy houses and rent will double for your opponent!'
                            }           
                         }
            
            
                        // check if red monopoly
                        if(this.player2.properties.includes(brownMon[0])){
                            if(this.player2.properties.includes(brownMon[1])){
                                this.player2.monopolies.push('brown')
                                }
                            }   
                        
                        // if red monopoly, increase rent
                        if (this.player2.monopolies.includes('brown')){
                            this.board[1].rent = this.board[1].setrent
                            this.board[3].rent = this.board[3].setrent
            
                            // if red monopoly on player 1 and you are on those spaces
                            if(this.player2.location > 0 && this.player2.location < 4){
                                this.monopolyMessage = 'You own all brown properties. You can now buy houses and rent will double for your opponent!'
                            }           
                        }
            
            
            
                        if(this.player2.properties.includes(lightblueMon[0])){
                            if(this.player2.properties.includes(lightblueMon[1])){
                                if(this.player2.properties.includes(lightblueMon[2])){
                                   this.player2.monopolies.push('lightblue')
                                }
                            }   
                        }
                        // if red monopoly, increase rent
                        if (this.player2.monopolies.includes('lightblue')){
                            this.board[4].rent = this.board[4].setrent
                            this.board[6].rent = this.board[6].setrent
                            this.board[7].rent = this.board[7].setrent
            
                            // if red monopoly on player 1 and you are on those spaces
                            if(this.player2.location > 3 && this.player2.location < 8){
                                this.monopolyMessage = 'You own all light blue properties. You can now buy houses and rent will double for your opponent!'
                            }           
                         }
            
            
            
                         if(this.player2.properties.includes(pinkMon[0])){
                            if(this.player2.properties.includes(pinkMon[1])){
                                if(this.player2.properties.includes(pinkMon[2])){
                                   this.player2.monopolies.push('pink')
                                }
                            }   
                        }
                        // if red monopoly, increase rent
                        if (this.player2.monopolies.includes('pink')){
                            this.board[10].rent = this.board[10].setrent
                            this.board[9].rent = this.board[9].setrent
                            this.board[11].rent = this.board[11].setrent
            
                            // if red monopoly on player 1 and you are on those spaces
                            if(this.player2.location > 8 && this.player2.location < 12){
                                this.monopolyMessage = 'You own all pink properties. You can now buy houses and rent will double for your opponent!'
                            }           
                         }
                       
            
            
            
                         if(this.player2.properties.includes(orangeMon[0])){
                            if(this.player2.properties.includes(orangeMon[1])){
                                if(this.player2.properties.includes(orangeMon[2])){
                                   this.player2.monopolies.push('orange')
                                }
                            }   
                        }
                        // if red monopoly, increase rent
                        if (this.player2.monopolies.includes('orange')){
                            this.board[15].rent = this.board[15].setrent
                            this.board[13].rent = this.board[13].setrent
                            this.board[14].rent = this.board[14].setrent
            
                            // if red monopoly on player 1 and you are on those spaces
                            if(this.player2.location > 12 && this.player2.location < 16){
                                this.monopolyMessage = 'You own all orange properties. You can now buy houses and rent will double for your opponent!'
                            }           
                         }
            
            
            
                         if(this.player2.properties.includes(yellowMon[0])){
                            if(this.player2.properties.includes(yellowMon[1])){
                                if(this.player2.properties.includes(yellowMon[2])){
                                   this.player2.monopolies.push('yellow')
                                }
                            }   
                        }
                        // if red monopoly, increase rent
                        if (this.player2.monopolies.includes('yellow')){
                            this.board[21].rent = this.board[21].setrent
                            this.board[23].rent = this.board[23].setrent
                            this.board[22].rent = this.board[22].setrent
            
                            // if red monopoly on player 1 and you are on those spaces
                            if(this.player2.location > 20 && this.player2.location < 24){
                                this.monopolyMessage = 'You own all yellow properties. You can now buy houses and rent will double for your opponent!'
                            }           
                         }
            
            
            
                        
                         if(this.player2.properties.includes(greenMon[0])){
                            if(this.player2.properties.includes(greenMon[1])){
                                if(this.player2.properties.includes(greenMon[2])){
                                   this.player2.monopolies.push('green')
                                }
                            }   
                        }
                        // if red monopoly, increase rent
                        if (this.player2.monopolies.includes('green')){
                            this.board[28].rent = this.board[28].setrent
                            this.board[27].rent = this.board[27].setrent
                            this.board[25].rent = this.board[25].setrent
            
                            // if red monopoly on player 1 and you are on those spaces
                            if(this.player2.location > 24 && this.player2.location < 29){
                                this.monopolyMessage = 'You own all green properties. You can now buy houses and rent will double for your opponent!'
                            }           
                         }
            
            
            
                         if(this.player2.properties.includes(darkblueMon[0])){
                            if(this.player2.properties.includes(darkblueMon[1])){
                                   this.player2.monopolies.push('darkblue')
                                }
                            }   
                        
                        // if red monopoly, increase rent
                        if (this.player2.monopolies.includes('darkblue')){
                            this.board[29].rent = this.board[29].setrent
                            this.board[31].rent = this.board[31].setrent
            
                            // if red monopoly on player 1 and you are on those spaces
                            if(this.player2.location === 29 || this.player2.location === 31){
                                this.monopolyMessage = 'You own all dark blue properties. You can now buy houses and rent will double for your opponent!'
                            }           
                         }
                    
                    
            
                        
                
                    },
        buyhouses(){
            this.monopolyMessage = ''
            if(this.player1.playerTurn === true){
                playerIndex = this.player1.location
            }
            else{
                playerIndex = this.player2.location
            }
            if(this.player1.monopolies.includes('red') || this.player2.monopolies.includes('red')){
                this.board[playerIndex].houses += 1
                this.player1.bank -= this.board[playerIndex].housecost
                if(this.player2.playerTurn === true){
                    this.player2.bank -= this.board[playerIndex].housecost
                }
               
                
                }   
            else if(this.player1.monopolies.includes('brown') || this.player2.monopolies.includes('brown')){
                this.board[playerIndex].houses += 1
                this.player1.bank -= this.board[playerIndex].housecost
                if(this.player2.playerTurn === true){
                    this.player2.bank -= this.board[playerIndex].housecost
                }
            }   
            else if(this.player1.monopolies.includes('lightblue') || this.player2.monopolies.includes('lightblue')){
                this.board[playerIndex].houses += 1
                this.player1.bank -= this.board[playerIndex].housecost
                if(this.player2.playerTurn === true){
                    this.player2.bank -= this.board[playerIndex].housecost
                }
            } 
            else if(this.player1.monopolies.includes('pink') || this.player2.monopolies.includes('pink')){
                this.board[playerIndex].houses += 1
                this.player1.bank -= this.board[playerIndex].housecost
                if(this.player2.playerTurn === true){
                    this.player2.bank -= this.board[playerIndex].housecost
                }
            } 
             else if(this.player1.monopolies.includes('orange') || this.player2.monopolies.includes('orange')){
                this.board[playerIndex].houses += 1
                this.player1.bank -= this.board[playerIndex].housecost
                if(this.player2.playerTurn === true){
                    this.player2.bank -= this.board[playerIndex].housecost
                }
            } 
            else if(this.player1.monopolies.includes('yellow') || this.player2.monopolies.includes('yellow')){
                this.board[playerIndex].houses += 1
                this.player1.bank -= this.board[playerIndex].housecost
                if(this.player2.playerTurn === true){
                    this.player2.bank -= this.board[playerIndex].housecost
                }
            } 
            else if(this.player1.monopolies.includes('green') || this.player2.monopolies.includes('green')){
                this.board[playerIndex].houses += 1
                this.player1.bank -= this.board[playerIndex].housecost
                if(this.player2.playerTurn === true){
                    this.player2.bank -= this.board[playerIndex].housecost
                }
            } 
            else if(this.player1.monopolies.includes('darkblue') || this.player2.monopolies.includes('darkblue')){
                this.board[playerIndex].houses += 1
                this.player1.bank -= this.board[playerIndex].housecost
                if(this.player2.playerTurn === true){
                    this.player2.bank -= this.board[playerIndex].housecost
                }
            } 
            else{
               this.monopolyerror = 'You must own all spaces of this color to purchase a house' 
            }
            this.gameOver()
            
            
            
        },

        buyHotel(){
            this.gameOver()
            if(this.player1.playerTurn === true){
                playerIndex = this.player1.location
            }
            else{
                playerIndex = this.player2.location
            }
            if(this.board[playerIndex].houses === 4){
                this.board[playerIndex].hotel += 1 
                this.player1.bank -= this.board[playerIndex].hotelcost
                if(this.player2.playerTurn === true){
                    this.player2.bank -= this.board[playerIndex].hotelcost
                }
            }
            else{
                this.hotelError = 'You must own 4 houses before buying a hotel'
            }
            
        
        
        },
    

        rentIncrease(){
            if(this.player1.playerTurn === true){
                playerIndex = this.player1.location
            }
            else{
                playerIndex = this.player2.location
            }
            if(this.board[playerIndex].houses === 1){
                this.board[playerIndex].rent = this.board[playerIndex].house1rent
            }
            if(this.board[playerIndex].houses === 2){
                this.board[playerIndex].rent = this.board[playerIndex].house2rent
            }
            if(this.board[playerIndex].houses === 3){
                this.board[playerIndex].rent = this.board[playerIndex].house3rent
            }
            if(this.board[playerIndex].houses === 4){
                this.board[playerIndex].rent = this.board[playerIndex].house4rent
            }
            if(this.board[playerIndex].hotel === 1){
                this.board[playerIndex].houses = 0
                this.board[playerIndex].rent = this.board[playerIndex].hotelrent
            }
            
        },

        gameOver(){
            if(this.player1.bank < 1){
                this.gameovermessage = 'You went bankrupt, game over!'
                this.nextplayermessage = ''
                if(confirm("game over, would you like to play again")){
                    location.reload();
                }
            }
            else if(this.player2.bank < 1){
                this.gameovermessage = 'You went bankrupt, game over!'
                this.nextplayermessage = ''
                if(confirm("game over, would you like to play again")){
                    location.reload();
                }
            }
            
               
            
                
            },
            
            
        
        
        displayScore() {
            axios({
                method: 'post',
                url: '/api/v1/monopolyapp/',
                headers: {
                    'X-CSRFToken': this.csrfToken
                },
                data: {
                    "winner": 1,
                    "rounds": 1
                }
            }).then( response => {
                console.log(response.data)
            }).catch(error => {
                console.log(error.response)
             
            })
           
           

        },
    
       
        
        

    
        

    
},




    mounted() {
        this.csrfToken = document.querySelector("input[name=csrfmiddlewaretoken]").value

        this.loadCurrentUser()
        this.assignplayer1()
    }
    
})
    