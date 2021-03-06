var $list       = $( '.card-grid' ),
    $items      = $list.find( '.card' ),
    setHeights  = function()
    {
        $items.css( 'height', 'auto' );

        var perRow = Math.floor( $list.width() / $items.width() );
        if( perRow == null || perRow < 2 ) return true;

        for( var i = 0, j = $items.length; i < j; i += perRow )
        {
            var maxHeight   = 0,
                $row        = $items.slice( i, i + perRow );

            $row.each( function()
            {
                var itemHeight = parseInt( $( this ).outerHeight() );
                if ( itemHeight > maxHeight ) maxHeight = itemHeight;
            });
            $row.css( 'height', maxHeight);
        }
    };

setHeights();
$( window ).on( 'resize', setHeights );
