var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**************************************************************************
  Demo for a socket.io client
  NOTE: This code has not been optimized for size or speed. It was written
        with ease of understanding in mind.
**************************************************************************/
window.addEventListener('load', () => __awaiter(this, void 0, void 0, function* () {
    const keys = document.getElementById('keys');
    // Establish connection with socket.io server. Note that this just works
    // because `<script src="/socket.io/socket.io.js"></script>` is in index.html
    const socket = io();
    // Handle browser's keydown event
    document.addEventListener('keydown', event => {
        if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
            // Send ArrowKey message to server
            socket.emit('ArrowKey', event.code);
        }
    });
    // Handle ArrowKey message received from server (i.e. user pressed
    // an arrow key in a different browser window).
    socket.on('ArrowKey', code => {
        // Add code of the pressed key to HTML list
        const newLi = document.createElement('li');
        newLi.innerText = code;
        keys.appendChild(newLi);
    });
}));

//# sourceMappingURL=index.js.map
