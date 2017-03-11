
var Game = new Interface("Game",["playGames"]);
 var Food = new Interface("Food",["eat","throwFood"]);
 var Person = function(name) {
     this.name = name;
 };
 Person.prototype.playGames = function() {
     alert(this.name + "在打游戏!");
 };
 Person.prototype.eat = function() {
     alert(this.name + "在吃饭!");
 };
 Person.prototype.throwFood = function() {
     alert(this.name + "丢掉食物");
 };
 //创建对象p
 var p = new Person("小明");
 //用于检测对象是否实现了接口的方法,参数为数组,第一个元素为对象,其余元素为实现的接口对象

