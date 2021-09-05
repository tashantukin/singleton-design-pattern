//check out the delayed instantiation of an object

//take a look at a constant interface to gain access to the object

// see how only one instance of the object is needed


(function (win, $) {

var CircleGeneratorSingleton  = (function() {
    var instance;

    function init() {

        var _aCircle = [],
            _stage = $('.advert');

            function _position (circe, left, top){
                circle.css('left', left)
                circle.css('top', top)
            }

            function create(left, top){
                var circle = $(`<div class="circle"> </div>`)
                _position(circle, left, top)
                return circle;



            }

            function add(circle) {
                _stage.append(circle)
                _aCircle.push(circle);

            }


            function index(){
                return _aCircle.length;



            }

            return {index: index,
                    create:create,
                    add:add}





    }


    return {
        getInstance : function() {
            if(!instance) {
                instance = init();
            }

            return instance;

        }
    }
})

   $(document).ready(function(){
        $('.advert').click(function(e){
           
           console.log('click')
           var cg = CircleGeneratorSingleton.getInstance();
            var circle = cg.create(e.pageX-25, e.pageY-25)

            cg.add(circle);


        })
    })
})(window, jQuery)