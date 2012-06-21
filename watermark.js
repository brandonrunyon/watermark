var watermark = {
	_getInputs : function () {
		var all_inputs = document.getElementsByTagName("input");
		var count_i = all_inputs.length;
		var i = 0;
		var text_inputs = Array();
		
		if (all_inputs) {
			for (i; i<count_i; i++) {
				//TODO: add method to set what input types get watermarked, then loop through it here
				if (all_inputs[i].type=="text" || all_inputs[i].type=="email") {
					var val = all_inputs[i].value;
					var name = all_inputs[i].name;
					var id = all_inputs[i].id;
					var cur_input = {"id": id, "name" : name, "value" : val};
					text_inputs.push(cur_input);
				}
			}
		}
		return text_inputs;
	},
	
	_inputs : function() {return this._getInputs();},
	
	init : function () {
		var inputs = this._inputs();
		var j = inputs.length;
		if (inputs) {
			for (var f=0; f<j; f++) {
				
				var theName = inputs[f].name;
				var theVal =  inputs[f].value;
				var theId =  inputs[f].id;
				var temp_input = document.getElementById(theId);
				
				function focuser(obj, val) {
					obj.onfocus = function () {
						if (obj.value==val) {
							obj.value = "";
						} 
					}
				}
				function blurer(obj, val) {
					obj.onblur = function () {
						if (obj.value=="") {
							obj.value = val;
						}
					}
				}
				
				focuser(temp_input, theVal);
			    blurer(temp_input, theVal);
			}
		}
	}
}