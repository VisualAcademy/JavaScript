//[?] 주어진 데이터에서 가장 많이 나타난(중복된) 값

// 최빈값 알고리즘(Mode Algorithm): 점수 인덱스(0~n)의 개수(Count)의 최댓값(Max)
(function() {
    //[1] Input: 범위는 0부터 n점까지의 점수만 들어온다고 가정 
    var scores = [ 1, 3, 4, 3, 5 ]; // 0~5까지만 들어온다고 가정
    var indexes = Array(6).fill(0); // 0~5까지 점수 인덱스의 개수 저장
    var max = Number.MIN_SAFE_INTEGER; // MAX 알고리즘 적용
    var mode = 0; // 최빈값이 담길 그릇

    //[2] Process: Data -> Index -> Count -> Max -> Mode
    for (let i = 0; i < scores.length; i++) {
        indexes[scores[i]]++; // COUNT        
    }
    for (let i = 0; i < indexes.length; i++) {
        if (indexes[i] > max) {
            max = indexes[i]; // MAX -> 2
            mode = i; // MODE -> 3
        }        
    }

    //[3] Output
    console.log("최빈값: " + mode + " -> " + max + "번 나타남");    
})();
