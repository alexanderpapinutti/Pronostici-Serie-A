var app = new Vue({
    el: '#app',
    data: {
        currentView: 'login',
        user: '',
        password: '',
    },
    created() {


    },

    methods: {
        login: function () {
            var email = document.getElementsByTagName("input")[0].value;
            var password = document.getElementsByTagName("input")[1].value;
            firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
                app.setCurrentView('schedule');
                app.getGamesSchedule();
            }).catch(function (error) {
                var errorMessage = error.message;
                swal(errorMessage);
            });
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
        
        getGamesSchedule: function() {
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
