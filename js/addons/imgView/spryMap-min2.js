function SpryMap(param) {
    function MoveMap(x, y) {
        var newX = x, newY = y;
        if (m.lockEdges) {
            var rightEdge = -m.map.offsetWidth + m.viewingBox.offsetWidth, topEdge = -m.map.offsetHeight + m.viewingBox.offsetHeight;
            newX = newX < rightEdge ? rightEdge : newX;
            newY = newY < topEdge ? topEdge : newY;
            newX = newX > 0 ? 0 : newX;
            newY = newY > 0 ? 0 : newY;
        }
        m.map.style.left = newX + "px";
        m.map.style.top = newY + "px";
    }

    function AddListener(element, event, f) {
        if (element.attachEvent) {
            element["e" + event + f] = f;
            element[event + f] = function () {
                element["e" + event + f](window.event)
            };
            element.attachEvent("on" + event, element[event + f])
        } else element.addEventListener(event, f, false)
    }

    function Coordinate(startX, startY) {
        this.x = startX;
        this.y = startY;
    }

    var m = this;
    m.map = document.getElementById(param.id);
    m.width = typeof param.width == "undefined" ? 800 : param.width;
    m.height = typeof param.height == "undefined" ? 800 : param.height;
    m.scrolling = typeof param.scrolling == "undefined" ? true : param.scrolling;
    m.scrollTime = typeof param.scrollTime == "undefined" ? 300 : param.scrollTime;
    m.lockEdges = typeof param.lockEdges == "undefined" ? true : param.lockEdges;
    m.viewingBox = document.createElement("div");
    if (typeof param.cssClass != "undefined")m.viewingBox.className = param.cssClass;
    m.mousePosition = new Coordinate;
    m.mouseLocations = [];
    m.velocity = new Coordinate;
    m.mouseDown = false;
    m.timerId = -1;
    m.timerCount = 0;
    m.map.parentNode.replaceChild(m.viewingBox, m.map);
    m.viewingBox.appendChild(m.map);
    m.viewingBox.style.overflow = "hidden";
    m.viewingBox.style.width = m.width + "px";
    m.viewingBox.style.height = m.height + "px";
    m.viewingBox.style.position = "relative";
    m.map.style.position = "absolute";
    MoveMap(typeof param.startX == "undefined" ? 0 : -param.startX, typeof param.startY == "undefined" ? 0 : -param.startY);
    var MouseMove = function (b) {
        var e = b.clientX - m.mousePosition.x + parseInt(m.map.style.left), d = b.clientY - m.mousePosition.y + parseInt(m.map.style.top);
        MoveMap(e, d);
        m.mousePosition.x = b.clientX;
        m.mousePosition.y = b.clientY
    };
    var OnScrollTimer = function () {
        if (m.mouseDown) {
            m.mouseLocations.unshift(new Coordinate(m.mousePosition.x, m.mousePosition.y));
            if (m.mouseLocations.length > 10)
                m.mouseLocations.pop();
        } else {
            var totalTics = m.scrollTime / 20;
            var fractionRemaining = (totalTics - m.timerCount) / totalTics;
            var xVelocity = m.velocity.x * fractionRemaining;
            var yVelocity = m.velocity.y * fractionRemaining;
            MoveMap(-xVelocity + parseInt(m.map.style.left), -yVelocity + parseInt(m.map.style.top));
            if (m.timerCount == totalTics) {
                clearInterval(m.timerId);
                m.timerId = -1
            }
            ++m.timerCount;
        }
    };
    AddListener(m.viewingBox, "mousedown", function (e) {
        m.viewingBox.style.cursor = "url(data:image/x-win-bitmap;base64,AAACAAEAICACAAcABQAwAQAAFgAAACgAAAAgAAAAQAAAAAEAAQAAAAAAAAEAAAAAAAAAAAAAAgAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AAAA/AAAAfwAAAP+AAAH/gAAB/8AAAH/AAAB/wAAA/0AAANsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////////////////////////////////////gH///4B///8Af//+AD///AA///wAH//+AB///wAf//4AH//+AD///yT/////////////////////////////8=), default";
        m.mousePosition.x = e.clientX;
        m.mousePosition.y = e.clientY;
        AddListener(document, "mousemove", MouseMove);
        m.mouseDown = true;
        if (m.scrolling) {
            m.timerCount = 0;
            if (m.timerId != 0) {
                clearInterval(m.timerId);
                m.timerId = 0;
            }
            m.timerId = setInterval(OnScrollTimer, 20);
        }
        e.preventDefault();
    });
    AddListener(document, "mouseup", function () {
        if (m.mouseDown) {
            var handler = MouseMove;
            if (document.detachEvent) {
                document.detachEvent("onmousemove", document["mousemove" + handler]);
                document["mousemove" + handler] = null;
            } else {
                document.removeEventListener("mousemove", handler, false);
            }
            m.mouseDown = false;
            if (m.mouseLocations.length > 0) {
                var clickCount = m.mouseLocations.length;
                m.velocity.x = (m.mouseLocations[clickCount - 1].x - m.mouseLocations[0].x) / clickCount;
                m.velocity.y = (m.mouseLocations[clickCount - 1].y - m.mouseLocations[0].y) / clickCount;
                m.mouseLocations.length = 0;
            }
        }
        m.viewingBox.style.cursor = "move";
    });
};