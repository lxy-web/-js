let company = {
    sales: [{
        name: 'John',
        salary: 1000
    }, {
        name: 'Alice',
        salary: 1600
    }],

    development: {
        sites: [{
            name: 'Peter',
            salary: 2000
        }, {
            name: 'Alex',
            salary: 1800
        }],

        internals: [{
            name: 'Jack',
            salary: 1300
        }]
    }
};
// 求出每个人的工资 
function treeRecursion(param: any) {
    if (Array.isArray(param)) { // 判断每一项是否为数组 
        return param.reduce((prev, next) => prev + next.salary, 0); // prev定义初始值为0，每一次用前一项和后一项相加 返回出去
    } else {
        let numAll: number = 0;
        Object.keys(param).map(v => { // 便利出对象里面的每一项
            numAll += treeRecursion(param[v]);  // 进行递归查询相加
        })
        return numAll
    }
}
console.log('1.每个人的工资是', treeRecursion(company));

// numToRecursion(1) => 1
// numToRecursion(2) => 2 + 1 => 3
// numToRecursion(3) => 3 + 2 + 1 => 6

function numToRecursion(param: number): number {
    if (param === 1) { // 如果等于1，直接返回
        return param
    } else { // 大于1
        return param += numToRecursion(param - 1); // 传递的参数相加每次递减的参数
    }
}

console.log('2.numToRecursion()', numToRecursion(100))

// 计算阶乘     
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// 任务是编写一个函数 factorial(n) 使用递归调用计算 n!。

// alert( factorial(5) ); // 120
function factorial(param: number): number {
    if (param === 1) {
        return param
    } else {
        return param *= factorial(param - 1); // 递归调用，用第一次传递的参数 乘等于 每次递归减去1的数
    }

}
console.log('3.计算阶乘', factorial(4))
// 斐波那契数
// 重要程度: 5
// 斐波那契数 序列有这样的公式： Fn = Fn-1 + Fn-2。换句话说，下一个数字是前两个数字的和。
// 前两个数字是 1，然后是 2(1+1)，然后 3(1+2)，5(2+3) 等：1, 1, 2, 3, 5, 8, 13, 21...。
// 斐波那契数与 黄金比例 以及我们周围的许多自然现象有关。
// 编写一个函数 fib(n) 返回第 n 个斐波那契数。
// 
function fib(n: any) {
    if (n <= 1 ) {
        return n
    } else {
        return fib(n - 1) + fib(n - 2); // 递归调用前一项和前二项相加
    }
}
console.log('4.斐波那契数',fib(20));

// 从上而下的动态规划
function dynamicProg(n){
    console.time('yyy-ddd-mmm')
    let a = 1,
        b = 1;
        for(let i = 3 ; i <= n ; i++ ){
            let c = a + b;
            a = b
            b = c
        }
        return b
}
console.timeEnd('yyy-ddd-mmm')

console.log(dynamicProg(77))