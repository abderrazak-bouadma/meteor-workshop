/**
 * Created with JetBrains WebStorm.
 * User: abderrazak
 * Date: 11/22/13
 * Time: 10:55 AM
 * To change this template use File | Settings | File Templates.
 */

// Full Publish
Meteor.publish("all-fx",function(){
    return ForeignX.find();
});

// Partial Publish - only Europe
Meteor.publish("europe-fx",function(){
    return ForeignX.find({"continent":"Europe"});
});

// Partial Fields Publish -no flags-
Meteor.publish("no-flags-fx",function(){
    return ForeignX.find({},{fields:{
        country:false
    }});
});
