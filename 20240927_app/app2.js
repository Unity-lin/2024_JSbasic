const tasklist = document.getElementById("tasklist");
const input = document.getElementById("input");
const addtask = document.getElementById("addtask");
const deletes = document.getElementById("delete");   


    addtask.addEventListener('click', function() {
        var div = document.createElement('div');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        var text = document.createTextNode(input.value);
        div.appendChild(checkbox);
        div.appendChild(text);
        tasklist.appendChild(div);
    });

    deletes.addEventListener('click', ) //delete기능 구현 안됨 아니 체크박스 이벤트를 어따가 넣어야할지 모르겠음

    /**
     * 명시적으로 체크박스를 선정하지 못하겠음.
     * 그 놈만 줄이 쳐저야함. 
     * 줄을 어떻게 치나? => css 속성.. 
     */


    /**
     * dom 
     * <div id="p">
     *  <div = "c">
     *  <div = "c>"
     *  <div = "c">
     * </div>
     */