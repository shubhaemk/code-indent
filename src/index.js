// DS : { node : 'actual code', level : a number which indicates ate what level it is }

//Rules -
/*
    1. if '{' is found increase the level
    2. if '}' is found decrese the level
    3. Assign each node a level without brackets

 */
import '../index.css';

//testing strings
window.addEventListener('load',function(){
    /* let strCode = ` public class PrettyPrint   
 { public static void main(String args[]) { System.out.println("Hello World"); String input = "This is a sample code"; System.out.println(Indent(input)); } public static String Indent(String input) { return "Indented: " + input; } }`;
    strCode = strCode.trim();

    strCode2 = `
    function(x){let x;
let y;        for(xda)
      {        for(wwqeq){}}}
`
 */
    // indent string
    let stringCode = '';

    // indent level
    let level = 0;

    // Stack of object
    let NodeStack = [];


    // node object
    class Node {
        constructor(value, level) {
            this.value = value;
            this.level = level;
        }
    }

    // helper : Function to trim white-spaces
    let strTrim = str => str.trim();


    /* 
                CODE BEGINS 
    */

    //this function builds node stack by parsing the original string

    let buildNode = str => {
        let quoteFlag = false;
        let strCode = str;
        while (true) {
            for (let i = 0; i < strCode.length; i++) {
                if (strCode[i] === '\"' || strCode[i] === '\'') {
                    quoteFlag = !quoteFlag;
                }
                if (quoteFlag === false) {
                    if (strCode[i] === '{') {
                        let node = new Node(strTrim(strCode.slice(0, i)), level);
                        NodeStack.push(node);
                        node = new Node(strTrim(strCode[i]), level);
                        NodeStack.push(node);
                        level++;
                        strCode = strCode.slice(i + 1, strCode.length);
                        break;
                    }
                    if (strCode[i] === ';') {
                        let node = new Node(strTrim(strCode.slice(0, i + 1)), level);
                        NodeStack.push(node);
                        strCode = strCode.slice(i + 1, strCode.length);
                        break;
                    }
                    if (strCode[i] === '}') {
                        level--;
                        let node = new Node(strTrim(strCode[i]), level);
                        NodeStack.push(node);
                        strCode = strCode.slice(i + 1, strCode.length);
                        break;
                    }
                }
            }
            if (strCode.length === 0) {
                break;
            }
        }
    }

    //this function indents a node and returns it depending on its level

    let indentString = node => {
        let tempString = '';
        let emptyString = '   ';
        for (let i = 0; i < node.level; i++) {
            tempString = tempString.concat(emptyString);
        }
        return tempString.concat(node.value.trim().concat('\n'));
    }

    // travels through NodeStack and passes each one to get indented string 

    let buildString = (strCode) => {
        buildNode(strTrim(strCode));
        for (let index in NodeStack) {
            stringCode = stringCode.concat(indentString(NodeStack[index]));
        }
    }


    let indent = () => {
        NodeStack = [];
        stringCode = '';
        let strCode = document.getElementById('inputCode').value;
        buildString(strCode);
        document.getElementById('outputCode').value = stringCode;
    }

    let reset = () => {
        NodeStack = [];
        stringCode = '';
        document.getElementById('inputCode').value = '';
        document.getElementById('outputCode').value = '';
    }

    let textCopy = () => {
        var copyText = document.getElementById("outputCode");
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        document.execCommand('copy');
    }

    document.getElementById('indentButton').addEventListener('click', indent);
    document.getElementById('resetButton').addEventListener('click', reset);
    document.getElementById('copyButton').addEventListener('click', textCopy);
});