let staff = ["salary", "master", "chef", "customer"];
let option = prompt("what do you want? (C,R,U,D)");
option = option.toLocaleUpperCase();
if (option == "C") {
  let new_item = prompt("name your new staff");
  staff.push(new_item);
  console.log(staff);
} else if (option == "R") {
  console.log("this is your staff");
} else if (option == "U") {
  let index = prompt("enter your update");
  if (0 < index && index < staff.length) {
    new_value = prompt("enter new name");
    staff[index] = new_value;
    console.log(staff);
  } else {
    console.log("character not find");
  }
} else if (option == "D") {
  let index = prompt("enter your position you want delete");
  staff.splice(index, 1);
  console.log(staff);
} else if (option == true) {
  for (let i = 0; i < staff.length; i++) {
    console.log(i, staff);
  }
} else {
  alert("not find please your enter again");
}

// }

// for (let i = 0; i < staff.length; i++) {
//   console.log(i, staff);
// }

// // forech
// staff.forEach((i) => {
//   console.log(i);
// });

// const number = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(number.map((a) => a * 3));
// console.log(number.filter((a) => a % 2 == 0));

// class Animal{
//     constructor(name);

//     talk(){}

//     hello(){
//         console.log(`hello ${this.name}`);
//         for (let i = 0; i < i; i++) {
//            console.log(this.talk);

//         }
//     }

// }

// class dog extends Animal{
//     constructor(name){
//         super(name);
//         this.name = `dog ${name}`;

//     }
//       talk() {
//           console.log('gau');
//       }

// }
// const d1 =new dog ('nick');
// const d2 =new dog ('kiti');
// const dogs = [d1,d2]
// dog.forEach(a => {
//     a.hello();
// });
