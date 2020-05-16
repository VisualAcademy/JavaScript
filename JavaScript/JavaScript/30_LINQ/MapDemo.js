//[?] map() 함수: 컬렉션 개체의 개수만큼 매개 변수로 전달한 함수(anonymous function, lambda expression) 실행
var data1 = [1, 2, 3, 4, 5];
console.log(data1);

//[1] 익명 함수(무명 메서드)
var data2 = data1.map(function (d) { return d; });
console.log(data2);

var data3 = data1.map(function (data) { return data * data; });
console.log(data3);

//[2] 화살표 함수: goes to 연산자, 람다 연산자
var data4 = data1.map(d => d);
console.log(data4);

var data5 = data1.map(d => d * 2);
console.log(data5);

//[!] 컬렉션(리스트, JSON, ...)
var numbers = [1, 4, 9];

var newNumbers = numbers.map(n => Math.sqrt(n));
console.log(newNumbers);

var people = [
    { name: "홍길동", age: 21 },
    { name: "백두산", age: 35 },
];

var names = people.map(person => `${person.name} - ${person.age}`);
console.log(names);
