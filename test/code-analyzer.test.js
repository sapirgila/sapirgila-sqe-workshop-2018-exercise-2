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
             '        c = c + 5;\n' +
             '        return x + y + z + c;\n' +
             '    } else if (b < z * 2) {\n' +
             '        c = c + x + 5;\n' +
             '        return x + y + z + c;\n' +
             '    } else {\n' +
             '        c = c + z + 5;\n' +
             '        return x + y + z + c;\n' +
             '    }\n' +
             '}\n';
        let parse = parseCode(code);
        let x=Starter(parse);
        let y=GenerateHtmlCode(x,'2,3,5');
        assert.equal(y,'<pre>function foo(x, y, z) {\n<strong style="color:red">    if (x + 1 + y < z) {</strong>\n        return x + y + z + 5;\n<strong style="color:green">    } else if (x + 1 + y < z * 2) {</strong>\n        return x + y + z + (0 + x + 5);\n    } else {\n        return x + y + z + (0 + z + 5);\n    }\n}\n</pre>');


    });
});
// describe('TEST',() => {
//     it('TEST2', () => {
//
//         let code = '{for(var i=0;i<5;i++){i++;}}';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"For Statement","name":"","condition":"var i = 0;i < 5;i++","value":""},{"line":1,"type":"Update Expr' +
//             'ession","name":"","condition":"","value":"i++"}]');
//     });
// });
// describe('TEST',() => {
//     it('TEST3', () => {
//
//         let code = 'function binarySearch(X, V, n){' +
//             '    let low, high, mid;' +
//             '    low = 0;' +
//             '    high = n - 1;' +
//             '}';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"FunctionDeclaration","name":"binarySearch","condition":"","value":""},{"line":1,"type":"Variable Declaration","name":"X","condition":"","Value":""},{"line":1,"type":"Variable Declaration","name":"V","condition":"","Value":""},{"line":1,"type":"Variable Declaration","name":"n","condition":"","Value":""},{"line":1,"type":"Variable Declaration","name":"low","condition":"","Value":"null"},{"line":1,"type":"Variable Declaration","name":"high","condition":"","Value":"null"},{"line":1,"type":"Variable Declaration","name":"mid","condition":"","Value":"null"},{"line":1,"type":"Assignment Expression","name":"low","condition":"","Value":"0"},{"line":1,"type":"Assignment Expression","name":"high","condition":"","Value":"n - 1"}]');
//     });
// });
// describe('TEST',() => {
//     it('TEST4', () => {
//
//         let code = '{function a(){if(x<y){ return y;} else {return x;}}}';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"FunctionDeclaration","name":"a","condition":"","value":""},{"line":1,"type":"if statement","name"' + ':"","condition":"x < y","value":""},{"line":1,"type":"return statement","name":"","condition":"","value":"y"},{"line":1,"type":"' + 'return statement","name":"","condition":"","value":"x"}]');
//     });
// });
// describe('TEST',() => {
//     it('TEST5', () => {
//
//         let code = 'for(var i=0;i<5;i++){if(x>i) x=i; else {x=x;}}';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"For Statement","name":"","condition":"var i = 0;i < 5;i++","value":""},{"line":1,"type":"if statemen' +
//             't","name":"","condition":"x > i","value":""},{"line":1,"type":"Assignment Expression","name":"x","condition":"","Value":"i"},{"li' +
//             'ne":1,"type":"Assignment Expression","name":"x","condition":"","Value":"x"}]');
//     });
// });
// describe('TEST',() => {
//     it('TEST6', () => {
//
//         let code = 'if(x>y) x=y; else if(y>x) y=x;';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"if statement","name":"","condition":"x > y","value":""},{"line":1,"type":"Assignment Expression","' +
//             'name":"x","condition":"","Value":"y"},{"line":1,"type":"else if statement","name":"","condition":"y > x","value":""},{"line":1,"t' +
//             'ype":"Assignment Expression","name":"y","condition":"","Value":"x"}]');
//     });
// });
// describe('TEST',() => {
//     it('TEST7', () => {
//
//         let code = 'while(x>y) x++;';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"while statement","name":"","condition":"x > y","value":""},{"line":1,"type":"Update Expression","n' +
//             'ame":"","condition":"","value":"x++"}]');
//     });
// });
// describe('TEST',() => {
//     it('TEST8', () => {
//
//         let code = 'for(var j=0;j<i;j++) {x--; y++;}';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"For Statement","name":"","condition":"var j = 0;j < i;j++","value":""},{"line":1,"type":"Update Exp' +
//             'ression","name":"","condition":"","value":"x--"},{"line":1,"type":"Update Expression","name":"","condition":"","value":"y++"}]');
//     });
// });
// describe('TEST',() => {
//     it('TEST9', () => {
//
//         let code = 'if(x+1>i) {x=x+1;}';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"if statement","name":"","condition":"x + 1 > i","value":""},{"line":1,"type":"Assignment Expression' +
//             '","name":"x","condition":"","Value":"x + 1"}]');
//     });
// });
// describe('TEST',() => {
//     it('TEST10', () => {
//
//         let code = 'while(x>y){for(var i=0;i<5;i++){x=x+1}}';
//         let parse = parseCode(code);
//         let check = [];
//         Starter(parse,check);
//         assert.equal(JSON.stringify(check),'[{"line":1,"type":"while statement","name":"","condition":"x > y","value":""},{"line":1,"type":"For Statement","name' +
//             '":"","condition":"var i = 0;i < 5;i++","value":""},{"line":1,"type":"Assignment Expression","name":"x","condition":"","Value":"x + 1"' +
//             '}]');
//     });
// });
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