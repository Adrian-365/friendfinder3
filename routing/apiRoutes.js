var friends = require('../data/friends');

module.exports = function(app) {
    // A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // A POST routes /api/new. This will be used to handle incoming survey results. 
    app.post("/api/new", function(req, res) {

        //display the newFriend as a JSON in the console.
        // res.json(req.body);


        //This route will also be used to handle the compatibility logic.
        var friendsCompare = [];
        // for each item in the "friends" array,{
        for (var i = 0; i < friends.length; i++) {
            var sum = 0;
            var existFriendsScores = friends[i].scores;
            console.log(existFriendsScores);
            // 	for each item in the friends[i].score array {
            for (var j = 0; j < existFriendsScores.length; j++) {
                // 	Subtract that score from corresponding score in the newFriend.score array.
                // 	Return the absolute value of that difference
                // 	Add the absolute values of all of those differences together together to get the total variance for this item in the friends array.
                //  Math.abs() returns the absolute value

                sum = sum + Math.abs(parseInt(req.body.scores[j]) - parseInt(existFriendsScores[j]));
            };
            // push the total variance for this item of the friends array into a new "friendsCopmare" array so that we can capture the variance for each friend.
            friendsCompare.push(sum);
        };
        console.log(friendsCompare);

        // Get the index of the lowest number in the "friendsCompare" array.  (What if there is a tie?)
        var index = 0;
        var value = friendsCompare[0];
        for (var k = 1; k < friendsCompare.length; k++) {
            if (friendsCompare[k] < value) {
                value = friendsCompare[k];
                index = k;
            }
        }
        // That index is the index from the "friends" array of the newBestie.
        var newBestie = friends[index];
        console.log(newBestie);
        res.json(newBestie);


        //-----------------------------------------------------------
        //-------------------------------------------------------------
        //push the newFriend into the friends array for future users to find.
        friends.push(req.body);


    });




};