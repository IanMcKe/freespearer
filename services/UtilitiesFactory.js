freespearer.factory('UtilitiesFactory', function() {
  return {
    findById: function(collection, id) {
      for(var i = 0; i < collection.length; i++){
        return collection[i];
      }
    }
    return null;
  };
});
