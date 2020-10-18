noColors  = 6;
var h1 = document.querySelector('h1')
var squares = document.querySelectorAll('.square')
var colors = colorPicker(noColors);
var pickedColor = pickColor()
// var answer = document.querySelector('#ans')
var answerCorectness = document.querySelector('#displayMessage')
var resetButton = document.querySelector('#reset')
var easyBtn = document.querySelector('#easyBtn')
var hardBtn = document.querySelector('#hardBtn')
hardBtn.classList.add('selected')
var red = document.querySelector('#red')
var green = document.querySelector('#green')
var blue = document.querySelector('#blue')
var differen = (pickedColor.slice(4,pickedColor.length-1)).split(',')
var inst_button = document.querySelector('#inst')
red.textContent = String(differen[0] + ',');
green.textContent = differen[1] + ',';
blue.textContent = differen[2]  ;
easyBtn.addEventListener('click',function(){
    noColors = 3;
    resetButton.textContent = 'New COLORS'
    easyBtn.classList.add('selected');
    hardBtn.classList.remove('selected');
    colors = colorPicker(noColors);
    pickedColor = pickColor();
    console.log(pickedColor)
    var differen = (pickedColor.slice(4,pickedColor.length-1)).split(',');
    red.textContent = String(differen[0] + ',');
    green.textContent = String(differen[1] + ',');
    blue.textContent = String(differen[2] ) ;
    runaway.style.backgroundColor = 'steelblue'
    for(var i =0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = 'none'
        }
    }

});
hardBtn.addEventListener('click',function(){
    resetButton.textContent = 'New Colors'
    noColors = 6;
    runaway.style.backgroundColor = 'steelblue'
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    colors = colorPicker(noColors);
    pickedColor = pickColor()
    var differen = (pickedColor.slice(4,pickedColor.length-1)).split(',');
    red.textContent = String(differen[0] + ',');
    green.textContent = String(differen[1] + ',');
    blue.textContent = String(differen[2]) ;
    for(var i =0 ;i<squares.length;i++){
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = 'block';
    };
});
resetButton.addEventListener('click',function(){
    colors = colorPicker(noColors);
    resetButton.textContent = 'New Colors'
    pickedColor = pickColor();
    var differen = (pickedColor.slice(4,pickedColor.length-1)).split(',');
    red.textContent = String(differen[0] + ',');
    green.textContent = String(differen[1] + ',');
    blue.textContent = String(differen[2]) ;
    for(var i = 0 ; i<squares.length ; i++){
        squares[i].style.backgroundColor = colors[i]
    }
    runaway.style.backgroundColor = 'steelblue'

    answerCorectness.textContent = '';
});

function generateColors(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
    ans = "rgb(" + r + ', ' + g + ', ' + b + ")";
    return {
        r,
        g,
        b,
        ans
    };
};
// console.log(r)
function colorPicker(noOfColors){
    var arr = []
    for(i = 0; i < noOfColors;i++){
        arr.push(generateColors().ans)

    }
    return arr
}
for(var i = 0;i < squares.length ; i++ ){
    squares[i].style.backgroundColor = colors[i]
    squares[i].addEventListener('click',function(){
        var clickedColor = this.style.backgroundColor
        if(clickedColor === pickedColor){
            answerCorectness.textContent = 'Correct!!';
            changeColors(pickedColor)
            runaway.style.background = pickedColor
            resetButton.textContent = 'Play Again?'
        }else{
            answerCorectness.textContent = 'Try Again'
            this.style.backgroundColor = '#232323'
        }
    });
}

function changeColors(color){
    for(i = 0 ; i< squares.length ; i++){
        squares[i].style.backgroundColor = color;
    };
};

function pickColor(){
    random = Math.floor(Math.random()*noColors)
    return colors[random]
};