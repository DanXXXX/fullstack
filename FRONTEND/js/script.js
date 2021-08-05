
    $("#btn").click(function getALLCountries(){
        $.ajax({
            url : "http://localhost:8000/all",
            success: function(data, statuts, response){
            $("#Pays").html(data[1].name)
            }
        })
    })







