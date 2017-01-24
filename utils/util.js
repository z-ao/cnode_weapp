


var headUrl = "https://cnodejs.org/api/v1";
var topicUrl = "/topics";
var topicId = "/topic/";
var user = "/user/"


function obj2uri (obj) {
    return Object.keys(obj).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(obj[k]);
    }).join('&');
}



module.exports = {
    getUrl: function (obj) {
            return headUrl + topicUrl + '?' + obj2uri(obj);
        },
    getId: function (id) {
            return headUrl + topicId + id ;
        },
    getUser: function(name) {
        return headUrl + user + name;
    }

}
