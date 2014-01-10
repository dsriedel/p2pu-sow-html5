
var matchtheartist = new function () {

	var me = this;
	var myDraggableImageNodes, currentlyDraggedNode;



	me.init = function () {
		if (EventHelpers.hasPageLoadHappened(arguments)) {
			return;
		}

		myDraggableImagesNodes = cssQuery('[draggable=true]');

		for (var i=0; i<myDraggableImagesNodes.length; i++) {
			EventHelpers.addEvent(myDraggableImagesNodes[i], 'dragstart', userDragStartEvent);
			EventHelpers.addEvent(myDraggableImagesNodes[i], 'dragend', userDragEndEvent);
		}

		imageHolderNodes = cssQuery('.imageContainers');
		for (var i=0; i<imageHolderNodes.length; i++) {
			var imageHolderNode = imageHolderNodes[i];
			EventHelpers.addEvent(imageHolderNode, 'dragover', userDragOverListEvent);
			EventHelpers.addEvent(imageHolderNode, 'dragleave', userDragLeaveListEvent);
			EventHelpers.addEvent(imageHolderNode, 'drop', userDropListEvent);
		}

			var imageBarNode = document.getElementById("imageBar");
			EventHelpers.addEvent(imageBarNode, 'dragover', userDragOverListEvent);
			EventHelpers.addEvent(imageBarNode, 'dragleave', userDragLeaveListEvent);
			EventHelpers.addEvent(imageBarNode, 'drop', userDropListEvent);

	}

	function userDragStartEvent(e) {
		currentlyDraggedNode = this;
		currentlyDraggedNode.className = 'draggedImage';
	}


	function userDragEndEvent(e) {
		currentlyDraggedNode.className = '';
	}


	function userDragLeaveListEvent(e){
	}

	function userDropListEvent(e) {

		currentlyDraggedNode.parentNode.removeChild(currentlyDraggedNode);
		this.appendChild(currentlyDraggedNode);
		EventHelpers.preventDefault(e);
		userDragEndEvent(e);
	}

	function userDragOverListEvent(e) {

		EventHelpers.preventDefault(e);
	}



}

DragDropHelpers.fixVisualCues=true;
EventHelpers.addPageLoadEvent('matchtheartist.init');
