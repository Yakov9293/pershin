var iframe = document.querySelector('iframe');
var doc = iframe.contentWindow.document;
var script = doc.createElement('script');
doc.head.appendChild(script);
var checkButton = document.getElementById('checkButton');
/*Переменные для храненения текущего значения редакторов*/
var currentHTML;
var currentJS;

function aceHTML() {
    var editor = ace.edit("editorHTML");
    editor.getSession().setMode("ace/mode/html");
    editor.getSession().on('change', function () {
        doc.body.innerHTML = editor.getValue();
        currentHTML = editor.getValue();
    });
    editor.setValue('<p>Привет, Яша</p>');
}

function aceJS() {
    var editor = ace.edit("editorJS");
    editor.getSession().setMode("ace/mode/javascript");
    editor.getSession().on('change', function () {
        currentJS = editor.getValue();
        checkButton.onclick = function () {
            eval(currentJS);
        }
    });

    editor.setValue('');
}

aceHTML();
aceJS();