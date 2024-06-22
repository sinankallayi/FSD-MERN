// console.log("hello world")

// var x=10;
// var x=20;
// console.log(x)


// let a=15;
// console.log(a)

// {
//     let b=100
//     console.log(b)
// }

// var z=77;
// console.log(typeof(z))

let temp=18;
if(temp<30){
    console.log("cold day")
}else if(temp==30){
    console.log("normal day")
}else{
    console.log("hot day")
}


for(let i=0;i<10;i++){
    console.log(i)
}

let fruits=["apple","banana","grapes"]
console.log(fruits[1])

fruits.push("orange")
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.unshift("banana")
console.log(fruits)

fruits.shift("banana")
console.log(fruits)



let person={
    firstName:"Sinan",
    lastName:"Kallayi",
    age:25,
    city:"silver villa"
}

console.log(person)
console.log(person.age)

let people = [
    {
      name: 'Alice',
      age: 25,
      place: {
        city: 'Wonderland',
        country: 'Fairyland'
      }
    },
    {
      name: 'Bob',
      age: 30,
      place: {
        city: 'TechCity',
        country: 'Geekland'
      }
    },
    {
      name: 'Charlie',
      age: 28,
      place: {
        city: 'Artsville',
        country: 'Createland'
      }
    }
  ];

  console.log(people[0])
  console.log(people[2].place.country)