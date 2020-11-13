System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao() {
        return function (target, propertyKey, descriptor) {
            const method = descriptor.value;
            descriptor.value = function (...args) {
                console.log('------------------------------------');
                console.log(`params: ${propertyKey} = ${JSON.stringify(args)}`);
                let t = performance.now();
                const rtn = method.apply(this, args);
                console.log(`return: ${propertyKey}: ${JSON.stringify(rtn)}`);
                console.log(`time: ${propertyKey}: ${performance.now() - t} ms`);
                return rtn;
            };
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
