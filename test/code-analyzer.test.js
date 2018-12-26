import assert from 'assert';
import {GenerateHtmlCode, parseCode, Starter} from '../src/js/code-analyzer';

// describe('The javascript parser',() => {
//     it('is parsing an empty function correctly', () => {
//         assert.equal(
//             JSON.stringify(parseCode('')),
//             '{"type":"Program","body":[],"sourceType":"script"}'
//         );
//     });
//
//     it('is parsing a simple variable declaration correctly', () => {
//         assert.equal(
//             JSON.stringify(parseCode('let a = 1;')),
//             '{"type":"Program","body":[{"type":"VariableDeclaration","declarations":[{"type":"VariableDeclarator","id":{"type":"Identifier","name":"a"},"init":{"type":"Literal","value":1,"raw":"1"}}],"kind":"let"}],"sourceType":"script"}'
//         );
//     });
//
// });

describe('TEST',() => {
    it('TEST1', () => {

        let code = 'function foo(x, y, z){\n' +
             '    let a = x + 1;\n' +
             '    let b = a + y;\n' +
             '    let c = 0;\n' +
             '    \n' +
             '    if (b < z) {\n' +
             '        c = c + 5;\n' + '        return x + y + z + c;\n' + '    } else if (b < z * 2) {\n' + '        c = c + x + 5;\n' + '        return x + y + z + c;\n' + '    } else {\n' + '        c = c + z + 5;\n' + '        return x + y + z + c;\n' +
             '    }\n' +
             '}\n';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'2,3,5');
        assert.equal(y,'<pre>function foo(x, y, z) {\n<strong style="color:red">    if (x + 1 + y < z) {</strong>\n        return x + y + z + (0 + 5);\n<strong style="color:green">    } ' +
            'else if (x + 1 + y < z * 2) {</strong>\n        return x + y + z + (0 + x + 5);\n    } else {\n        return x + y + z + (0 + z + 5);\n    }\n}\n</pre>');
    });
});
describe('TEST',() => {
    it('TEST2', () => {
        let code = 'function foo(x, y, z){\n' +
             '    let a = x + 1;\n' +
             '    let b = a + y;\n' +
             '    let c = 0;\n' +
             '    \n' +
             '    while (a < z) {\n' +
             '        c = a + b;\n' +
             '        z = c * 2;\n' +
             '    }\n' +
             '    \n' +
             '    return z;\n' +
             '}\n';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'2,3,5');
        assert.equal(y,'<pre>function foo(x, y, z) {\n    while (x + 1 < z) {\n        z = (x + 1 + (x + 1 + y)) * 2;\n    }\n    return z;\n}\n</pre>');
    });
});
describe('TEST',() => {
    it('TEST3', () => {

        let code = 'function binarySearch(X, V, n){' +
             '    let low=0; ' +
            '     let high=2; ' +
            '     let mid=1;' + '}';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'2,3,5');
        assert.equal(y,'<pre>function binarySearch(X, V, n) {\n}\n</pre>');
    });
});
describe('TEST',() => {
    it('TEST4', () => {

        let code = 'function a(Z){let x=4; let y=5; if(x<y){ return y;} else {return x;}}';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'2');
        assert.equal(y,'<pre>function a(Z) {\n<strong style="color:green">    if (4 < 5) {</strong>\n        return y;\n    } else {\n        return x;\n    }\n}\n</pre>');

    });
});
describe('TEST',() => {
    it('TEST5', () => {

        let code = 'function vars(x){let i=0; return i;}';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'2');
        assert.equal(y,'<pre>function vars(x) {\n    return i;\n}\n</pre>');
    });
});
describe('TEST',() => {
    it('TEST6', () => {

        let code = 'function a(x,y){if(x+1>y) x=y; else if(y-1>x) y=x;}';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'2,5');
        assert.equal(y,'<pre>function a(x, y) {\n<strong style="color:red">    if (4 + 1 > 5)</strong>\n        x = y;\n<strong style="color:red">    else if (5 - 1 > 4)</strong>\n      ' +
            '  y = x;\n}\n</pre>');
    });
});
describe('TEST',() => {
    it('TEST7', () => {

        let code = 'function Z(){let x=0; let y=1; while(x>y){ x=x+1;}}';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'');
        assert.equal(y,'<pre>function Z() {\n    while (0 > 1) {\n        x = 0 + 1;\n    }\n}\n</pre>');
    });
});
describe('TEST',() => {
    it('TEST8', () => {

        let code = 'function x(y) {y = 4; return y;}';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'2');
        assert.equal(y,'<pre>function x(y) {\n    return y;\n}\n</pre>');

    });
});
describe('TEST',() => {
    it('TEST9', () => {

        let code = 'function a(x,y,z,c){let d=1; if(c>d) return y;}';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'1,2,3,4');
        assert.equal(y,'<pre>function a(x, y, z, c) {\n<strong style="color:red">    if (0 > 1)</strong>\n        return y;\n}\n</pre>');
    });
});
describe('TEST',() => {
    it('TEST10', () => {

        let code = 'function arr(x){if(x>0) return x; else return x+3}';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'1');
        assert.equal(y,'<pre>function arr(x) {\n<strong style="color:red">    if (0 > 0)</strong>\n        return x;\n    else\n        return 0 + 3;\n}\n</pre>');
    });
});
// describe('TEST',() => {
//     it('TEST11', () => {
//
//         let code = '{i++; if(i>7){i=x;}else{x=i;}}';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"Update Expression","name":"","condition":"","value":"i++"},{"line":1,"type":"if statement","name"' +
//             ':"","condition":"i > 7","value":""},{"line":1,"type":"Assignment Expression","name":"i","condition":"","Value":"x"},{"line":1,"typ' +
//             'e":"Assignment Expression","name":"x","condition":"","Value":"i"}]');
//     });
// });
// describe('TEST',() => {
//     it('TEST12', () => {
//
//         let code = '{let a=5; let b=3}';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"Variable Declaration","name":"a","condition":"","Value":"5"},{"line":1,"type":"Variable Declaration' +
//             '","name":"b","condition":"","Value":"3"}]');
//     });
// });