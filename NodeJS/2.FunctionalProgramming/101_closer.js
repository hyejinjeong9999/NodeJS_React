//closer : 내부함수가 참조하는 외부함수의 지역변수가 외부함수가 리턴된 이후에도 유효성이 유지될 때'//

function grandParent(g1,g2){
    const g3 = '3 ';
    return function parent(p1,p2){
        const p3 ='33 ';
        return function chile(c1,c2){
            const c3 = '333 ';
            return g1 + g2 + g3 + p1 + p2 + p3 + c1 + c2 + c3;
        };
    };
}

const parentFunction = grandParent('1 ','2 ');
const childFunction = parentFunction('11 ','22 ');
console.log(childFunction('111 ','222 '));
//1+2+3+11+22+33+111+222+333 == 738