let messageApp = angular.module('messageApp', [])
    .run(function() {
        console.log('In client.js / messageApp  ');

    });
messageApp.controller('MessageController', function($http) {

    let self = this;
    let messages = [];
    class Message {
        constructor(name, message) {
            this.name = name;
            this.message = message;

        }

    }
    self.addMessage = function() {
        let newMessage = new Message(self.name, self.message);
        messageApp.postMessages('messages').then(function(result) {

            console.log('success in addMessage');
        });
    };
    self.clearInputs = function() {
        self.name = '';
        self.message = '';

    };
    self.displayMessage = function() {

    }

    self.getAllSongs = function() {
        return $http({
            method: 'GET',
            url: '/messages'
        }).then(function(response) {
            console.log(`in GET response=`, response);
            self.allMessages = response.data;

        }).catch(function(error) {
            console.log(error);
        });
    };

    self.addMessage = function(newSong) {
        console.log(`in addSong in Service`);
        return $http({
            method: 'POST',
            url: '/messages',
            data: newMessage
        }).then(function(response) {
            console.log(`back from POST with response`, response);

        }).catch(function(error) {
            console.log(`back from POST with an error`, error);
        });

    };





});