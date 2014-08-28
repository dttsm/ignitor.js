"use strict";
Object.defineProperties(exports, {
  StringUtilities: {get: function() {
      return StringUtilities;
    }},
  __esModule: {value: true}
});
var Inflection = require('inflection');
var StringUtilities = {
  formatKey: function(key) {
    return key.toLowerCase().trim();
  },
  pluralize: function(val) {
    return Inflection.pluralize(val.toLowerCase());
  }
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdGllcy5qcyIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci81IiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzMiLCJAdHJhY2V1ci9nZW5lcmF0ZWQvVGVtcGxhdGVQYXJzZXIvMCIsIkB0cmFjZXVyL2dlbmVyYXRlZC9UZW1wbGF0ZVBhcnNlci8xIiwiQHRyYWNldXIvZ2VuZXJhdGVkL1RlbXBsYXRlUGFyc2VyLzQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxLQUFLLGlCQUFpQixBQUFDLENBQUMsT0FBTTtpQkNBOUIsRUFBQyxHQUFFLFlDQXFCO0FBQUUsNEJBQXdCO0lBQUUsQURBOUIsQ0FBQztBRUF2QixXQUFTLENDQVQsRUFBQyxLQUFJLENEQU8sS0FBRyxBQ0FTLENBQUM7Q0pBeUIsQ0FBQztBREFuRCxBQUFJLEVBQUEsQ0FBQSxVQUFTLEVBQUksQ0FBQSxPQUFNLEFBQUMsQ0FBQyxZQUFXLENBQUMsQ0FBQztBQUUvQixBQUFJLEVBQUEsQ0FBQSxlQUFjLEVBQUk7QUFDM0IsVUFBUSxDQUFSLFVBQVUsR0FBRSxDQUFHO0FBQ2IsU0FBTyxDQUFBLEdBQUUsWUFBWSxBQUFDLEVBQUMsS0FBSyxBQUFDLEVBQUMsQ0FBQztFQUNqQztBQUVBLFVBQVEsQ0FBUixVQUFVLEdBQUUsQ0FBRztBQUNiLFNBQU8sQ0FBQSxVQUFTLFVBQVUsQUFBQyxDQUFDLEdBQUUsWUFBWSxBQUFDLEVBQUMsQ0FBQyxDQUFDO0VBQ2hEO0FBQUEsQUFDRixDQUFDO0FBQUEiLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIEluZmxlY3Rpb24gPSByZXF1aXJlKCdpbmZsZWN0aW9uJyk7XG5cbmV4cG9ydCB2YXIgU3RyaW5nVXRpbGl0aWVzID0ge1xuICBmb3JtYXRLZXkoa2V5KSB7XG4gICAgcmV0dXJuIGtleS50b0xvd2VyQ2FzZSgpLnRyaW0oKTtcbiAgfSxcblxuICBwbHVyYWxpemUodmFsKSB7XG4gICAgcmV0dXJuIEluZmxlY3Rpb24ucGx1cmFsaXplKHZhbC50b0xvd2VyQ2FzZSgpKTtcbiAgfVxufTsiLCJPYmplY3QuZGVmaW5lUHJvcGVydGllcyhleHBvcnRzLCAkX19wbGFjZWhvbGRlcl9fMCk7Iiwie2dldDogJF9fcGxhY2Vob2xkZXJfXzB9IiwiZ2V0ICRfX3BsYWNlaG9sZGVyX18wKCkgeyByZXR1cm4gJF9fcGxhY2Vob2xkZXJfXzE7IH0iLCJfX2VzTW9kdWxlOiB0cnVlIiwie3ZhbHVlOiAkX19wbGFjZWhvbGRlcl9fMH0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=