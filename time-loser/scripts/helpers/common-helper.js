function getCurrentTime() {
    var time = new Date();
    var timeResult = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
    return timeResult;
}