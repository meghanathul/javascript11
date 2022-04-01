// 1.
var marks=[23,45,67,78,91];
const data=marks.map((e)=>e+10)
console.log(data)

// 2
var marks1=[23,45,67,78,91];
const data1=marks1.filter((e)=>e<65)
console.log(data1)
// 3
var marks3=[23,45,67,78,91];
const data3=marks3.reduce((x,y)=>x=x+y,0)
console.log('sum=' +data3)

// 4
const str1='Peter is good friend of Mike.Peter is working in a IT company in Australia';
console.log('Before replacing--'+str1)
const res1=str1.replaceAll('Peter','John')
console.log('After replacing---'+res1)

// 5
var str='Hello this is me';
const res=str.split(' ').reverse().join(' ');
console.log(res)

//7
let employee={
    name:'xyz',
    age:33,
    salary:2400
}

const emp=Object.keys(employee)
console.log('keys : '+emp)


const emp1=Object.values(employee)
console.log('values : '+emp1)


//8
let person={
    name:'abc',
    last:'xyz'
}

let fullname=function(city){
    console.log('My full name is '+this.name + ' '+this.last+'i lived in '+ ' '+city)
}

fullname.call(person,'pune')

fullname.apply(person,['pune'])


const per=fullname.bind(person,'pune')
console.log(per)
per()




