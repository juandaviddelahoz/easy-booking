var funcionesJS = (function(){

    return{
        limpiarModalnfoCotizante: function(){
            const $modalInfoCotizante = $('#modalInfoCotizante');
            const $botonInfoCotizante = $('#botonInfoCotizante');

            $botonInfoCotizante.on('click', function(){
                $modalInfoCotizante.modal('show');
            });

            $modalInfoCotizante.on('hidden.bs.modal', function (event){
                const $formulario = $modalInfoCotizante.find('form');
                $formulario[0].reset();
            })
        },

        limpiarModalAereos: function(){
            const $modalAereos = $('#modalAereos');
            const $botonAereos = $('#botonAereos');

            $botonAereos.on('click', function(){
                $modalAereos.modal('show');
            });

            $modalAereos.on('hidden.bs.modal', function (event){
                const $formulario = $modalAereos.find('form');
                $formulario[0].reset();
            })
        },

        limpiarModalServicios: function(){
            const $modalServicios = $('#modalServicios');
            const $botonServicios = $('#botonServicios');

            $botonServicios.on('click', function(){
                $modalServicios.modal('show');
            });

            $modalServicios.on('hidden.bs.modal', function (event){
                const $formulario = $modalServicios.find('form');
                $formulario[0].reset();
            })
        },

    }
})(funcionesJS||{})