const Node = require('./node');

class LinkedList {

	constructor() {
		this.length = 0;
		this._head = null;
		this._tail = null;
	}

	append(data) {
		var node = new Node(data);
		if (this.length == 0) {
			node.index = 0;
			this._head = node;
			this._tail = node;
			this.length = 1;
			return this;
		}

		if (this.length == 1) {
			this._head.append(node);
			this._tail = node;
		} else {
			this._tail.append(node);
			this._tail = node;
		}
		this.length = this.length + 1;
		return this;
	}

	head() {
		if (this._head) {
			return this._head.data;
		}
		return null;
	}

	tail() {
		if (this._tail) {
			return this._tail.data;
		}
		return null;
	}

	getAt(index) {
		if (index >= 0 && this.length > index) {
			if (index > (this.length / 2)) {
				var target = this._tail;
				while (target.index != index) target = target.prev;
			} else {
				var target = this._head;
				while (target.index != index) target = target.next;
			}
			return target;
		}
	return false;
	}

	at(index) {
		var res = this.getAt(index);
		if (res) { return res.data; }
		return false;
	}

	insertAt(index, data) {
		var res = this.getAt(index);
		if (res) { res.data = data; }
		return this;
	}

	isEmpty() {
		return this.length == 0;
	}

	clear() {
		this.length = 0;
		this._head = null;
		this._tail = null;
		return this;
	}

	deleteAt(index) {
		var res = this.getAt(index);
		if (res) { res.delete();}
		return this;
	}

	reverse() {
		if (this.length > 1) {
			var tmp = this._head;
			this._head = this._tail;
			this._tail = tmp;

			do {
				tmp.index = this.length - tmp.index - 1;
				tmp.mirror();
				tmp = tmp.prev;
			} while (tmp)
		}
		return this;
	}

	indexOf(data) {
		if (this.length <= 0) return false;
		var tmp = this._head;
		while (tmp.data != data && tmp.next) {
			tmp = tmp.next
		}
		return (tmp.data == data) ? tmp.index : -1;
	}
}

module.exports = LinkedList;
