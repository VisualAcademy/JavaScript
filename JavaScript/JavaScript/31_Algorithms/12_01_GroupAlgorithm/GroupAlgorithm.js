//[?] 컬렉션 형태의 데이터를 특정 키 값으로 그룹화

// 그룹 알고리즘(Group Algorithm): 특정 키 값에 해당하는 그룹화된 합계 리스트 만들기

(function() {
    //[1] Input: 테스트용 레코드 JSON 배열
    var records = [
        { Name: "RADIO", Quantity: 3 },
        { Name: "TV", Quantity: 1 },
        { Name: "RADIO", Quantity: 2 },
        { Name: "DVD", Quantity: 4 }
    ]; // 입력 데이터 
    var groups = []; // 출력 데이터 
    var N = records.length; // 의사코드 

    //[2] Process: Group 알고리즘(SORT -> SUM -> GROUP)
    //[A] 그룹 정렬: SORT
    for (let i = 0; i < N - 1; i++) {
        for (let j = i + 1; j < N; j++) {
            if (records[i].Name > records[j].Name) {
                var temp = records[i];
                records[i] = records[j];
                records[j] = temp; // SWAP 
            }
        }        
    }

    //[B] 그룹 소계: GROUP
    var groupCount = 0; // 그룹수 
    var subtotal = 0; // 소계
    var newRecords = JSON.parse(JSON.stringify(records)); // Deep Copy
    for (let i = 0; i < N; i++) {
        subtotal += newRecords[i].Quantity; // 같은 상품명의 수량을 누적(SUM)        
        if (i + 1 == N || // 단락(short circutin)이면 아래 조건 무시 
            newRecords[i].Name != newRecords[i + 1].Name) {
            groups.push(newRecords[i]); // JSON 개체를 임시로 추가 
            //[!] 다음 레코드가 없거나, 현재 레코드와 다음 레코드가 다르면 저장
            groups[groupCount].Name = newRecords[i].Name; // 한 그룹의 키(Key)  지정
            groups[groupCount].Quantity = subtotal; // 소계
            groupCount++; // 그룹수 증가
            subtotal = 0; // 하나의 그룹이 완료되면 소계 초기화
        }
    }

    //[3] Output
    console.log("[1] 정렬된 원본 데이터:");
    for (let i = 0; i < N; i++) {
        console.log(records[i].Name + " - " + records[i].Quantity);                
    }    

    console.log("[2] 이름으로 그룹화된 데이터:")
    for (let i = 0; i < groupCount; i++) {
        console.log(groups[i].Name + " - " + groups[i].Quantity);                
    }
})();
