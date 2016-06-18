Meteor.startup(function () {
    AccountsEntry.config({
      homeRoute: '/' ,                   
      dashboardRoute: '/' ,
      passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
    });
  });
  
  
 ProfileImages = new FS.Collection('ProfileImages', {
    store: [new FS.Store.gridFS('ProfileImages')]
    
  });
    
  UserImages = new Mongo.Collection('UserImages');