//Some Queries
    const div = document.querySelector('#container');
    const btnCreate = document.querySelector('#NumSq');
    const btnRemove = document.querySelector('#removeSq');




//This Will Make/Create The Grids
    
    //This Function will create the grids..
    function makeSquares(){
        let ask1 = prompt('How Many Squares Do You Want?', '');
        if(ask1 == null) return;
        if(ask1 < 100 && !ask1 < 1){
            for(let i = 0; i < (Math.pow(ask1, 2)); i++){
                const makeDiv = document.createElement('div');
                div.appendChild(makeDiv).className = 'grid';
            };
        };
        div.style.gridTemplateColumns = `repeat(${ask1}, auto)`
        div.style.gridTemplateRows = `repeat(${ask1}, auto)`
    };


    //This Button Will Ask You To Provide Numbers of Sq Needed...
    btnCreate.addEventListener('click', () => {
        div.innerHTML = '';

        makeSquares();

        let grid2 = document.querySelectorAll('.grid');

        for(let i = 0; i < grid2.length; i++){
            grid2[i].addEventListener('mouseover', function(){
                this.style.backgroundColor = `${rgbColors()}`;
            });
        };
    })



// THIS WILL GENERATES RGB COLORS
    function rgbColors(){
        var x = Math.floor(Math.random()*256);
        var y = Math.floor(Math.random()*256);
        var z = Math.floor(Math.random()*256);
        var rgbColor = `rgb(${x},${y},${z})`;
        return rgbColor
    }




//This Will Remove/Clear The Grids
    btnRemove.addEventListener('click', function (){
        div.innerHTML = '';
    });








// SOME DUMB STUFF THAT I TRIED IT...


    // function makeRowCol(a, b){
    //     makeSquares(a*b);
    // };


    // let grid2 = document.querySelectorAll('div');

    // for(let i = 0; i < grid2.length; i++){
    //     grid2[i].addEventListener('mouseover', function(){
    //         this.style.backgroundColor = 'red';
    //     })
    // };


    // grid2.addEventListener('mouseover', (e) => {
    //     e.this.style.color = 'aqua';
    // })



    // function removeGrid(){
    //     const grids = document.querySelectorAll('.rows column')
    //     btnRemove.addEventListener('click', function() {
    //         grids.forEach(grid => {
    //             grid.innerHTML = '';
    //         })
    //     })
    // };




    // btn.addEventListener('click', () => {
    //     // let ask1 = prompt('How Many Squares Do You Want?', '');
    //     // let ask2 = prompt(`${ask1}x ?`, '');

    //     // if (ask1 == null || ask2 == null) return;
    //     // if (ask1 < 100 || ask2 < 100) {
    //     //     makeRowCol(ask1, ask2);
    //     // } else {
    //     //     return 'No 100 Squares Or Over';
    //     // }
    // });



    // div.style.gridTemplateColumns = `repeat$`
        // 
    // let rows1 = div.querySelectorAll('div');
    // 
    // rows1.addEventListener('mouseover', function(e) {
        // e.target.style.backgroundColor = 'green';
    // });





    //This is what i made before i get it :


    //const makeDiv = document.createElement('div');

    //makeColumn(16);



    //function makeColumn(column){
    //    for(let i = 0; i < rows.length; i++){
    //        for(let j = 0; j < column; j++){
    //            const makeDiv = document.createElement('div');
    //            rows[j].appendChild(makeDiv).className = 'column';
    //        };
    //    };
    //};

