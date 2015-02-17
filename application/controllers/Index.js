/**
 * @file The default controller for your home page.
 */
var turnpike           = require('turnpike');
var EndpointController = turnpike.classes.base.controller.EndpointController;

/**
 * Controller that serves the default home page.
 *
 * @constructor
 */
function Index(connection) {
  EndpointController.call(this, connection);
}
EndpointController.extend(Index);

Index.prototype.main = function(readyCallback) {
  readyCallback();
};

module.exports = Index;
