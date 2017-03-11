Interface.checkImplements = function(obj) {
   if(arguments.length < 2) throw new Error("要检查的接口必须传入接口对象的参数,参数的个数必须大于等于2");
   for(var i = 1; i < arguments.length; i++) {
       var intObj = arguments[i];
       if(intObj.constructor != Interface) throw new Error(intObj + "接口的对象不正确");
       //检查方法是否符合要求
       var cmethods = intObj.methods;
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