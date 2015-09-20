/*
 * Entity module
 *
 * Various entities and factories that create them
 *
 * NOTE: factory functions should be well managed and consistent
 * because their function pointers are used in the level JSON files
 */


// Dependencies
var _ = require('underscore'),
	traits = require('./traits.js');


// Entity object
function Entity (name, x, y, sprite) {
	this.name = name;
	this.x = x;
	this.y = y;
	this.sprite = sprite;
}


// createEntity :: int -> int -> Sprite -> Entity
exports.createEntity = function (name, x, y, sprite) {
	return new Entity(name, x, y, sprite);
};


// createFloor :: int -> int -> Sprite -> Entity
exports.createFloor = function (name, x, y, sprite) {
	var flr = exports.createEntity(name, x, y, sprite);

	return _.extend(flr, traits.walkable, traits.drawable);
};


// createWall :: int -> int -> Sprite -> Entity
exports.createWall = function (name, x, y, sprite) {
	var wall = exports.createEntity(name, x, y, sprite);

	return _.extend(wall, traits.collidable, traits.drawable);
};
