is_started = false;

function makeTable(width, height, offset, adjust_number){

    var square_side = Math.round(height / 10);
    var num_horizontal_square = Math.floor(width/square_side);

    // startEmojiArmy(square_side, num_horizontal_square)

    var num_of_square = (num_horizontal_square)*10;

    var table = $('<table></table>').attr('id', 'tab').css("margin-top", -offset);
    table.css("position", "absolute").css("z-index", "0").css('top', '0').css("table-layout", "fixed");

    for(i=0; i< 10; i++){
        var row = $('<tr></tr>').addClass('row');
        for(j=0; j<num_horizontal_square; j++){
            var cols = $('<td></td>').addClass('box').attr('row', i).attr('col', j)
                            .css("height", square_side).css("min-width", square_side);
            row.append(cols);
        }
        table.append(row);
    }

    $('.jumbotron').append(table);
    $('.front').css('z-index', "5");

    startColorAnimation( adjust_number, num_horizontal_square );

    return;
}

// function startEmojiArmy(square_size, horizontal_squares, verticle_rows = 10){
//     var verticle_spot = Math.round(Math.random()*verticle_rows)
//     var horizontal_spot = Math.round(Math.random()*horizontal_squares)

//     var emoji = $('<div></div>').addClass('em em-blush').css("z-index", 2)
//                     .css("position", "absolute").css('opacity', 50)
//                     .css('top', verticle_spot*square_size - 14)
//                     .css('left', horizontal_spot*square_size - 9);
//     $('.jumbotron').append(emoji);
//     startEmojiAnimation(emoji[0], 
//     {
//         "verticle_spot" : verticle_spot,
//         "horizontal_spot" : horizontal_spot
//     },{
//         "horizontal_squares" : horizontal_squares, 
//         "verticle_squares" : verticle_rows,
//         "square_size" : square_size
//     });
// }

// function startEmojiAnimation(emoji_name, current_position, bounds_information){
//     var direction = Math.floor(Math.random()*4);
//     var new_position = confirmDirection(direction, current_position, bounds_information)
//     FX.emojiRun(emoji_name, {
//         duration: 500,
//         new_position: new_position,
//         complete: function() {
//             console.log("Done");
//         }
//     });
// }

// function confirmDirection(direction, current_position, bounds_information){
//     if (direction == 0){
//         if (current_position.verticle_spot == 0) {
//             current_position.verticle_spot += 1;
//             return [bounds_information.square_size*current_position.verticle_spot, 'top'];
//         }
//         current_position.verticle_spot -= 1;
//         return [bounds_information.square_size*current_position.verticle_spot, 'top'];
//     } else if (direction == 1){
//         if (current_position.horizontal_spot == bounds_information.horizontal_squares) {
//             current_position.horizontal_spot -= 1;
//             return [bounds_information.square_size*current_position.horizontal_spot, 'left'];
//         }
//         current_position.horizontal_spot += 1
//         return [bounds_information.square_size*current_position.horizontal_spot, 'left'];
//     } else if (direction == 2){
//         if (current_position.verticle_spot == bounds_information.verticle_squares) {
//             current_position.verticle_spot -= 1;
//             return [bounds_information.square_size*current_position.verticle_spot, 'top']
//         }
//         current_position.verticle_spot += 1;
//         return [bounds_information.square_size*current_position.verticle_spot, 'top']
//     } else {
//         if (current_position.horizontal_spot == 0) {
//             current_position.horizontal_spot += 1;
//             return [bounds_information.square_size*current_position.horizontal_spot, 'left'];
//         }
//         current_position.horizontal_spot -= 1;
//         return [bounds_information.square_size*current_position.horizontal_spot, 'left'];
//     }

// }

// var time = 0;
// var timeout = 700*20;

// function startColorAnimation( horizontal_cols, verticle_rows = 10 ){
//     if (time == timeout) {
//         return;
//     } else {
//         console.log("HIT");
//         time += 700;
//         singleSquareAnimate(pickNewSquare(horizontal_cols, verticle_rows)
//                                         , horizontal_cols, verticle_rows);   
//         window.setTimeout(startColorAnimation(horizontal_cols, verticle_rows), 1000);
//     }
//     return;

// }


function startColorAnimation( adjust_number, horizontal_cols, verticle_rows = 10 ){
    for (var i = 35; i >= 0; i--) {
        singleSquareAnimate(pickNewSquare(horizontal_cols, verticle_rows)
                                        , horizontal_cols, verticle_rows
                                        , adjust_number);   
    };
}

function singleSquareAnimate(square, horizontal_cols, verticle_rows, adjust_number){
    var select_element_string = '[row="' + square[0] + '"][col="' + square[1] + '"]';
    $( select_element_string ).css("background-color", 
            colors[Math.round(Math.random()*colors.length)])
            .css('opacity', 0 );

    FX.fadeIn($( select_element_string )[0], {
        duration: 1000,
        complete: function() {
                FX.fadeOut($( select_element_string )[0], {
                    duration: 1000,
                    complete: function() {
                        if (adjust_number == global_adjust) {
                            singleSquareAnimate(pickNewSquare(horizontal_cols, verticle_rows),
                                             horizontal_cols, verticle_rows, adjust_number);
                        }
                    }
                });
        }
    });
}

function pickNewSquare(num_horizontal_square, verticle_rows){
    var col = Math.floor(Math.random()*num_horizontal_square);
    var row = Math.floor(Math.random()*verticle_rows);
    return[row,col]
}

var num_of_square;
var color_squares_class = [];

var colors = ["#D6E77D", "#B5D894", "#71C9A0", "#72C8B8", "#69C7D1", "#61CCDF", "#6898CB", "#5F73B2", 
                "#8C78B1", "#DB8FBB", "#F4857B", "#F29A80", "#F99F75", "#FBB07E", "#FCCD80", "#FDE18D"];

function main(){
    var width = $( window ).width();
    var adjust_number = 0;
    return makeNewTable(width, adjust_number);
}

var last_updated_width = main();
var global_adjust;

$( window ).on('resize', function() {
    var width = $( window ).width();

    if (last_updated_width >= 992 && width < 992){
        last_updated_width = makeNewTable(width, global_adjust);
    } else if (last_updated_width < 768 && width > 768){
        last_updated_width = makeNewTable(width, global_adjust);
    } else if ((last_updated_width >= 768 && last_updated_width < 992) && (width < 768 || width >= 992)){
        last_updated_width = makeNewTable(width, global_adjust);
    } else if (last_updated_width - width > 100 || last_updated_width - width < 100 ){
        last_updated_width = makeNewTable(width, global_adjust);
    }

});

function makeNewTable(width, adjust_number){
    adjust_number = adjust_number + 1;
    global_adjust = adjust_number;
    var height = null;
    var offset = null;
    if (width >= 992) {
        height = 346;
        offset = 4;
    } else if (width >= 768) {
        height = 500;
        offset = 7;
    } else {
        height = 465;
        offset = 8.5;
    }
    $('#tab').remove()
    console.log(height);
    makeTable(width, height, offset, adjust_number);
    return width;
}











