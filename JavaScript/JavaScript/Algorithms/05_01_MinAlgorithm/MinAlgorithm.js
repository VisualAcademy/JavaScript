//[?] 주어진 데이터 중에서 가장 작은 [짝수] 값

// 최솟값 알고리즘(Min Algorithm): (주어진 범위 + 주어진 조건)의 자료들의 가장 작은 값
(function() {
    //[0] Initialize
    var min = Number.MAX_SAFE_INTEGER; // 숫자 형식의 데이터 중 가장 큰 값으로 초기화

    //[1] Input
    var numbers = [ 2, 5, 3, 7, 1 ]; // MIN: 1 -> MIN: 2(짝수)
    var N = numbers.length; // 슈도코드

    //[2] Process: MIN
    for (let i = 0; i < N; i++) {
        if (numbers[i] < min && numbers[i] % 2 == 0) { // 짝수 최솟값
            min = numbers[i]; // MIN: 더 작은 값으로 할당 
        }                    
    }

    //[3] Output
    console.log("짝수 최솟값: " + min);
})();
