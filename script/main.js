
var app = new Vue({
    el: '#app',
    data: {
        currentView: 'schedule',
        user: '',
        password: '',


        sortKey: '',

        search: '',

        reverse: false,
        
        columns: ["Nome", "Punti", "Dettagli"],

        players: [
            {
                name: 'John',
                points: 50
            },
            {
                name: 'Jack',
                points: 35
            },
            {
                name: 'Keith',
                points: 28
            },
            {
                name: 'Alain',
                points: 17
            },
            {
                name: 'Neil',
                points: 1
            },
            {
                name: 'Mark',
                points: 72
            },
            {
                name: 'Don',
                points: 47
            },
            {
                name: 'Walter',
                points: 41
            },
            {
                name: 'Jessy',
                points: 33
            },
            {
                name: 'Henck',
                points: 22
            },
            {
                name: 'Sal',
                points: 9
            },
            {
                name: 'Skyler',
                points: 42
            },
            {
                name: 'Holly',
                points: 55
            },
    ],

      

    },
    created() {

    },

    methods: {
        login: function () {
            var email = document.getElementsByTagName("input")[0].value;
            var password = document.getElementsByTagName("input")[1].value;
            firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
                app.setCurrentView('schedule');
                //                app.getGamesSchedule();
            }).catch(function (error) {
                var errorMessage = error.message;
                swal(errorMessage);
            });
        },
        sortBy: function (sortKey) {
            this.reverse = (this.sortKey == sortKey) ? !this.reverse : false;
            this.sortKey = sortKey;
        },

        setCurrentView: function (view) {
            this.currentView = view;
        },

        signOut: function () {
            firebase.auth().signOut().then(function () {
                app.setCurrentView('login');
            }).catch(function (error) {
                // An error happened.
            });
        },

        getGamesSchedule: function () {
            fetch("https://heisenbug-seriea-live-scores-v1.p.rapidapi.com/api/serie-a", {
                    method: "GET",

                    headers: ({
                        "X-RapidAPI-Key": 'd5a424cd16mshcc35a036c74b889p10c3ddjsn670ec6c82ba1',
                    })

                })
                .then(function (response) {
                    return response.json();

                })
                .then(function (data) {
                    console.log(data)
                })
                .catch(error => alert(error));

        },



    }


})
