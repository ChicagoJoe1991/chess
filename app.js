let log = console.log;
let l = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

//html for the board using css grid
$(document).ready(function(){
    for(i=8;i>0;i--){
        for(j=0;j<8;j++){
            $('#container').append('<div id="space">'+ l[j] + i +'</div>');
        };
    };
});

$('#space').append('<img src="knight.svg"/>');


$('img').addEventListener('click', (e) => {


});