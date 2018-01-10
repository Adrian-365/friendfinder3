var friends = require('../data/friends');

module.exports = function(app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    // A POST routes /api/new. This will be used to handle incoming survey results. 
    app.post("/api/new", function(req, res) {
        // var newFriend = req.body;
        // newFriend.routeName = newFriend.name.replace(/\s+/g, "");
        // console.log('newFriend: ' + newFriend);

        // //This route will also be used to handle the compatibility logic.
        // var friendsCompare = [];
        // // for each item in the "friends" array,{
        // for (var i = 0; i < friends.length; i++) {
        //     var sum = 0;
        //     // 	for each item in the friends[i].score array {
        //     for (var j = 0; j < friends[i].scores.length; j++) {
        //         // 	Subtract that score from corresponding score in the newFriend.score array.
        //         // 	Return the absolute value of that difference
        //         // 	Add the absolute values of all of those differences together together to get the total variance for this item in the friends array.
        //         //  Math.abs() returns the absolute value
        //         sum = sum + Math.abs(parseInt(newFriend.scores[j]) - parseInt(friends[i].scores[j]));
        //     };
        //     // push the total variance for this item of the friends array into a new "friendsCopmare" array so that we can capture the variance for each friend.
        //     friendsCompare.push(sum);
        // };

        // // Get the index of the lowest number in the "friendsCompare" array.  (What if there is a tie?)
        // var index = 0;
        // for (var k = 1; k < friendsCompare.length; k++) {
        //     if (friendsCompare[k] < value) {
        //         value = friendsCompare[k];
        //         index = k;
        //     }
        // }
        // // That index is the index from the "friends" array of the newBestie.
        // var newBestie = friends[index]
        //     // Display the newBestie as a modal. display both the name and picture of the closest match.
        // $('#newBestieName').html(newBestie.name);
        // $('#newBestiePic').html('<img src="' + newBestie.photo + '" height="42" width="42">');


        // //push the newFriend into the friends array for future users to find.
        // friends.push(newFriend);
        // //display the newFriend as a JSON in the console.
        // res.json(newFriend);

    });

};