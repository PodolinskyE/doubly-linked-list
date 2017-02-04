class Node {

	constructor(data = null, prev = null, next = null) {
		this.data = data;
		this.prev = prev;
		// if (prev && prev.next) return false;
		this.next = next;
		// if (next && next.prev) return false;
		this.index = null;
	};

	mirror() {
		var tmp = this.next;
		this.next = this.prev;
		this.prev = tmp;
	}

	unshiftInd() {
		this.index--;
		if (this.next) this.next.unshiftInd();
		return true;
	};

	shiftInd() {
		this.index++;
		if (this.next) this.next.shiftInd();
		return true;
	};


	append(node) {
		if (!this.next) {
		this.next = node;
		node.prev = this;
		node.index = this.index + 1;
		} else {
		next = this.next;
		this.next = node;
		node.prev = this;
		node.index = this.index + 1;
		node.next = next;
		next.prev = node;
		next.shiftInd();
		}
		return true;
	};
	
	prepend(node) {
		if (!this.prev) {
		this.prev = node;
		node.index = 0;
		node.next = this;
		this.shiftInd();
		} else {
		prev = this.prev;
		node.index = prev.index + 1;
		this.shiftInd();
		this.prev = node;
		node.next = this;
		node.prev = prev;
		prev.next = node;
		}
		return true;
	};


	
	delete() {
		var next = this.next;
		var prev = this.prev;
		if (prev) prev.next = next;
		if (next) {
			next.prev = prev;
			next.unshiftInd();
		};
		return true;
	}

}

module.exports = Node;
