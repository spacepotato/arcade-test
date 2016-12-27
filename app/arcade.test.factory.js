(function(){
  'use strict';

  angular
    .module('arcade.test')
    .factory('TestFactory', TestFactory);

  function TestFactory(){
    var getUsers = function(){
      var users = [
        {
          id: 1,
          firstname: "Fergus",
          lastname: "McLaren",
          age: 25
        },

        {
          id: 2,
          firstname: "Alex",
          lastname: "Darling",
          age: 31
        },

        {
          id: 3,
          firstname: "Sheree",
          lastname: "Wood",
          age: 23
        },

        {
          id: 4,
          firstname: "Adam",
          lastname: "Harris",
          age: 24
        }
      ];

      return users;
    };

    return {
      getUsers: getUsers
    }
  }
})
