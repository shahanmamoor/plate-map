var plateLayOutWidget = plateLayOutWidget || {};

(function($, fabric) {

  plateLayOutWidget.addDataOnChange = function() {
    // This object is invoked when something in the tab fields change
    return {

      _addData: function(e, boolean) {
        // Method to add data when something changes in the tabs. Its going to be tricky , just starting.
        if(this.allSelectedObjects) {
          var noOfSelectedObjects = this.allSelectedObjects.length;
          for(var objectIndex = 0;  objectIndex < noOfSelectedObjects; objectIndex++) {
            if(this.allSelectedObjects[objectIndex].type == "tile") {
              var wellData = this.allSelectedObjects[objectIndex]["wellData"];
              if(boolean) {
                var boolVal = (e.target.value == "true" || e.target.value == true) ? true : false;
                wellData[e.target.id]
              }
              wellData[e.target.id] = e.target.value;
            }
          }
          this._addColorCircle();
          var data = {
            "value": this.allTiles
          };
          // here we triggergetPlates , so that when ever something change with any of the well, it is fired
          this._trigger("getPlates", null, data);
        }
      },

      _addUnitData: function(e) {
        // This method add/change data when unit of some numeric field is changed
        if(this.allSelectedObjects) {
          var noOfSelectedObjects = this.allSelectedObjects.length;
          for(var objectIndex = 0;  objectIndex < noOfSelectedObjects; objectIndex++) {
            if(this.allSelectedObjects[objectIndex].type == "tile") {
              var unitData = this.allSelectedObjects[objectIndex]["unitData"];
              unitData[e.target.id] = e.target.value;
            }
          }
        }
      },

    };
  }
})(jQuery, fabric)