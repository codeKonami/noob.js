NOOB = {
  common: {
    init: function() {
      console.log("common:init");
      // application-wide code
    }
  },

  index: {
    init: function() {
      console.log("index:init");
      // controller-wide code
    },

    core: function() {
      console.log("index:core");
      // action-specific code
      $('.fun').click(function(e){
        e.preventDefault();
        alert('fffunnnn');
      });
    }
  },

  contact: {
    init: function() {
      console.log("contact:init");
      // controller-wide code
    },

    core: function() {
      console.log("contact:core");
      // action-specific code
    }
  }
};

UTIL = {
  exec: function( controller, action ) {
    var ns = NOOB,
        action = ( action === undefined ) ? "init" : action;

    if ( controller !== "" && ns[controller] && typeof ns[controller][action] == "function" ) {
      ns[controller][action]();
    }
  },

  init: function() {
    var body = document.body,
        controller = body.getAttribute( "data-controller" ),
        action = body.getAttribute( "data-action" );

    UTIL.exec( "common" );
    UTIL.exec( controller );
    UTIL.exec( controller, action );
  }
};

$( document ).ready( UTIL.init );
