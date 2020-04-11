var fetch = require('isomorphic-unfetch');

function run(gen) {
    const iter = gen();
    let result = iter.next();

    function step() {
        if (!result.done) {
            if (result.value && typeof result.value.then === 'function') {
                result.value.then(res => {
                    result = iter.next(res);
                    step();
                })
            } else if (typeof result.value === 'function') {
                result.value((data) => {
                    result = iter.next(data)
                    step();
                })
            } else {
                result = iter.next();
                step();
            }
        }
    }

    step();
}

function mock(str) {
    return function(cb) {
        setTimeout(() => cb(str), 100);
    }
}

function* gen() {
    const result = yield fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => response.json());

    console.log(result);

    const test = yield mock('privet');

    console.log(test);
    yield console.log(2);
}


run(gen)