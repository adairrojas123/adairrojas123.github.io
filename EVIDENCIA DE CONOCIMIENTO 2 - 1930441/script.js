calcular.addEventListener("click", function(){
    var num_tabla = parseInt(document.getElementById("tabla").value);
    var num_resultados = parseInt(document.getElementById("resultados").value);

    if (num_tabla>0 && num_tabla<51){
        if (num_resultados>0 && num_resultados<21){
            document.getElementById("error_resultados").style.display = "none";
            document.getElementById("error_tabla").style.display = "none";
            
            document.write("<ul>");

            for (var i=1; i<num_resultados+1; i++) {
                document.write("<li>");
                document.write(num_tabla + "*" + i + " = " + (num_tabla*i), "<br>")
            }

            document.write("</ul>");

        }else{
            document.getElementById("error_resultados").style.display = "inline";
        }
    }else{
        document.getElementById("error_tabla").style.display = "inline";
    }
})