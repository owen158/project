//定义一个接口方法,参数为长度为2的数组,数组第一个元素为对象接口对象,第二个元素为接口方法的数组
var Interface = function(name) {
    //arguments为实际传进来的参数
    if(arguments.length != 2) throw new Error("创建的接口不符合标准,必须有俩个参数,第二个参数是接口的方法");
    this.name = name;
    this.methods = [];
    //获取方法数组
    var methods = arguments[1];
    for(var i = 1; i < methods.length; i++) {
        this.methods.push(methods[i]);
        console.log(this.methods)
    }
};
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

 Interface.checkImplements = function(obj) {
   if(arguments.length < 2) throw new Error("要检查的接口必须传入接口对象的参数,参数的个数必须大于等于2");
   for(var i = 1; i < arguments.length; i++) {
       var intObj = arguments[i];
       console.log(intObj)
       if(intObj.constructor != Interface) throw new Error(intObj + "接口的对象不正确");
       //检查方法是否符合要求
       var cmethods = intObj.methods;
       console.log(cmethods)
       for(var j =0; j < cmethods.length; j++) {
           if(!obj[cmethods[j]] || typeof obj[cmethods[j]] != "function") throw new Error("必须实现:" + cmethods[j] + "这个方法");
       }
   }
}
function checkPerson(person) {
    //调用检测方法,传入要检测的对象及其需要实现的接口对象
    Interface.checkImplements(person,Game,Food);
};
//检测对象p是否实现了接口
checkPerson(p);
p.playGames()
