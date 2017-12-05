var friendData = require ('../app/data/friends.js');

module.exports = function (app) {
	app.get('/api/friends', function (req, res){
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res){
	var newUser = req.body;


	 var lowestDifference = 50;

  for (var i = 0; i < friendData.length; i++) {

    var currentFriend = friendData[i];
    var difference = 0;


    for (var j = 0; j < 10; j++) {

      difference += Math.abs(
        newUser.scores[j] - currentFriend.scores[j]);

    }
    if (difference <= lowestDifference) {
      lowestDifference = difference;
      bestMatch = currentFriend;
    }

  }

  friendData.push(newUser);

  res.json(bestMatch);
  console.log(bestMatch);

});


};

