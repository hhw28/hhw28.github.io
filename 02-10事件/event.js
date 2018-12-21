// 绑定事件
function addEvent(node, type, handler) {
	if (!node) return false;
	if (node.addEventListener) {
		node.addEventListener(type, handler, false);
		return true;
	}else if (node.attachEvent) {
		node['e' + type + handler] = handler;
		node[type + handler] = function() {
			node['e' + type + handler](window.event);
		};
		node.attachEvent('on' + type, node[type + handler]);
		return true;
	}
	return false;
}

// 解绑事件
function removeEvent(node, type, handler) {
	if (!node) return false;
	if (node.removeEventListener) {
		node.removeEventListener(type, handler, false);
		return true;
	}else if (node.detachEvent) {
		node.detachEvent('on' + type, node[type + handler]);
		node[type + handler] = null;
	}
	return false;
}

//event对象不同
function getEvent(e) {
	return e || window.event;
}
//获取目标元素
function getTarget(e) {
	return e.target || e.srcElement;
}
//阻止默认事件
function preventDefault(e) {
	if (e.preventDefault){
		e.preventDefault(); 
	}else {
		e.returnValue = false;
	}
} 
//阻止冒泡
function stopPaprogation() {
	if (e.stopPaprogation) {
		e.stopPaprogation
	}else {
		cancelBubble = true;
	}
}