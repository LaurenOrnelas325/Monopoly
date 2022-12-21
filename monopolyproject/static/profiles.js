const app = Vue.createApp({
    delimiters: ['[[', ']]'],
    data(){
        return{
            message: 'hello world',

            currentUser: {},
            csrfToken: '',
           
        }
    },
    methods: {
        loadCurrentUser(){
            axios({
                method: 'get',
                url: '/usersapp/currentuser/'
            }).then(response => {
                console.log('CU', response.data)
                this.currentUser = response.data
            })
        }

    },
    created: function() {
       this.loadCurrentUser()
    },
    mounted(){
        this.csrfToken = document.querySelector("input[name=csrfmiddlewaretoken]").value

       
    }
})