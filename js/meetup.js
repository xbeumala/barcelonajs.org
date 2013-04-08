function MeetupCtrl ($scope, $http) {
    $http.get('data/meetup.json').then(function (res) {
        $scope.meetup = res.data;
    });
}