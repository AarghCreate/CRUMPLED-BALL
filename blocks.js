class block
{
    constructor( x , y , width , height , IMG)
    {
        var options=
        {
            isStatic:true
        }

        this.body = Bodies.rectangle( x , y , width , height , options );
        this.width = width;
        this.height = height;

        this.image = loadImage("dustbingreen.png");
        
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate( pos.x , pos.y );
        rotate( angle );
        strokeWeight( 1 );
        stroke( "red" );
        fill( "orange" );
        image( this.image , 0 , 10 , 100 , -100 );
        //rect( 0 , 0 , this.width , this.height );

        pop();
    }
}