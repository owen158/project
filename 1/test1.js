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
    }
};