//[?] 원본 데이터 중에서 대상 데이터와 가장 가까운 값

// 근삿값 알고리즘(Near Algorithm): 가까운 값 -> 차잇값의 절댓값의 최솟값
(function() {
    //[0] Initialize
    var min = Number.MAX_SAFE_INTEGER;

    //[1] Input
    var numbers = [ 10, 20, 30, 27, 17 ];
    var target = 25; // target과 가까운 값
    var near = 0; // 가까운 값: 27 
    var N = numbers.length;

    //[2] Process: NEAR
    for (let i = 0; i < N; i++) {
        var abs = Math.abs(numbers[i] - target); // 차잇값의 절댓값
        if (abs < min) {
            min = abs; // MIN: 최솟값 알고리즘
            near = numbers[i]; // NEAR: 차잇값의 절댓값의 최솟값일 때의 값
        }
    }

    //[3] Output
    console.log(target + "와/과 가장 가까운 값: " + near + "(차이: " + min + ")");  
})();
