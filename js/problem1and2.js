const object = {
  name:'Abul',
  age:25,
  isMerried: true,
  certificates:['psc','jsc','ssc','hsc'],
  wife:{
    name:'Chokina',
    age:20
  },
  method:function(){
    const result = `${this.name} vai ${this.certificates[3]} pash and biya korche ${this.wife.name} apare jar boyosh ${this.wife.age} bochor.`;
    return result; 
  }
}

console.log(object.method());