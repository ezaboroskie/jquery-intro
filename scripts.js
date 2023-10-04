
 $(document).ready(function(){

    $("#mj-gif").hide()
    $(".body-content").hide();

    $(".header-link").click(function(){
        $("#mj-gif").hide()
        $(".body-content").hide()
        let index = $(this).index()
        $(".body-content").eq(index).show().fadeIn('slow')
    })
    $(".footer-link:eq(0)").click(function(){
        $(".body-content").hide()
        $("#mj-gif").show()
    })

})
