'use strict';

angular.module('bleuItApp')
  .controller('PostController', [PostController]);

function PostController() {
  var vm = this;
  vm.postList = [];
  vm.submitPost = submitPost;
  vm.submitComment = submitComment;

  vm.submitPost({
    'title': 'Erik Johnson plans to return to Avalanche lineup Friday or Saturday',
    'author': 'Ian Smith',
    'image_url': 'http://extras.mnginteractive.com/live/media/site36/2016/0105/20160105_011459_erik-johnson.jpg',
    'description': 'Avalanche defenseman Erik Johnson, who has missed the last seven games with a lower body injury, skated hard among a group of teammates Thursday at Family Sports Center and afterwards said he would return to the lineup Friday at home against St. Louis or Saturday on the road against Dallas.',
    'comments': [{
      'author': 'Jenny Smith',
      'text': 'This story blows.'
    }, {
      'author': 'Phil Thomas',
      'text': 'I\'m hungry'
    }, {
      'author': 'Billy Bob',
      'text': 'I loved this story!'
    }, {
      'author': 'Han Solo',
      'text': 'I\'m old...'
    }]
  });
  vm.submitPost({
    'title': 'Colorado\'s Soderberg stepping out as Avalanche start rolling',
    'author': 'Ian Smith',
    'image_url': 'http://a.fssta.com/content/dam/fsdigital/fscom/NHL/images/2016/01/21/012116-NHL-Colorado-Avalanche-Carl-Soderberg-PI-JE.vadapt.980.high.61.jpg',
    'description': 'When the Boston Bruins signed Carl Soderberg from the top Swedish hockey league in 2013, the hope was that he would flourish as a top forward in Boston. But he did not pan out in two full seasons with the Bruins. Although he totaled over 40 points in each season, Soderberg was an inconsistent player, and with the Bruins tight on cap space, it was difficult to justify keeping him.',
    'comments': [{
      'author': 'John Doe',
      'text': 'This story sucks!'
    }, {
      'author': 'Billy Bob',
      'text': 'I loved this story!'
    }, {
      'author': 'William Turner',
      'text': 'I\m a pirate!'
    }]
  });
  vm.submitPost({
    'title': '3 Players the Avs Should Move by the Deadline',
    'author': 'Ian Smith',
    'image_url': 'http://3951-presscdn-28-25.pagely.netdna-cdn.com/wp-content/uploads/2013/11/Alex-Tanguay-770x470.jpg',
    'description': 'At one point, it seemed very likely that the Avalanche would be throwing a fire sale and blowing up the roster; fast forward to today and the situation is something completely different. Rather than making moves to lay the foundation for another rebuild, the Avalanche should be looking at what they can do to boost their roster for a playoff push.',
    'comments': [{
      'author': 'Esmerelda Jones',
      'text': 'This story kicked booty!'
    }, {
      'author': 'Jerry Cat',
      'text': 'I like turtles.'
    }]
  });

  function submitPost(post) {
    post.date = new Date();
    post.votes = 0;
    // post.comments = [];
    post.addComment = false;
    post.viewComments = false;
    vm.postList.push(post);
    vm.post = {};
    vm.submission = false;
  }
  function submitComment(post, comment) {
    post.addComment = false;
    post.viewComments = true;
    post.comments.push(comment);
    vm.post.comments = {};
  }
}
