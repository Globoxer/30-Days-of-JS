$(document).ready(function(){
    $('div#wrapper').each(function(){
        //get current div
        var $div_parent = $(this)

        //get Array of childs in parent div
        var $divsArr = $div_parent.children('div.card')

        //sort Array of childs in parent div randomly
        $divsArr.sort(function(a,b){

            //Get random number between 1 and 10
            var temp = parseInt(Math.random()*10)

            //Get 1 or 0, whether temp is odd or even
            var isOddOrEven = temp%2

            //Get +1 or -1, whether temp greater or smaller than 5
            var isPosOrNeg = temp > 5 ? 1 : -1

            //Return -1, 0 or +1
            return(isOddOrEven*isPosOrNeg)
        })
        //append child items to parent
        .appendTo($div_parent)
    })
})

function refreshPage(){
    window.location.reload()
}