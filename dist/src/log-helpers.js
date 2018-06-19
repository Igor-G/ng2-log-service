export function namespaceIsValid(namespace) {
    if (namespace === null) {
        return false;
    }
    var namespaceExpression = new RegExp('^[a-zA-Z0-9\:\*]{1,}$');
    var passed = namespaceExpression.test(namespace);
    return passed;
}
export function logMessageIsValid(msg) {
    return (msg !== null);
}
//# sourceMappingURL=log-helpers.js.map