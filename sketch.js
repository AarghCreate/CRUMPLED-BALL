//constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variables
var ground , Top , left , right;
var paper;
var paperIMG , binIMG ;
var block1 , block2 , block3;

function setup() 
{
	createCanvas(1000, 500);

	engine = Engine.create();
	world = engine.world;
	Engine.run( engine );

	ground = new Ground( 500 , 480 , 1000 , 40 );
	Top = new Ground( 500 , 20 , 1000 , 40 );
	left = new Ground( 20 , 250 , 40 , 500 );
	right = new Ground( 980 , 250 , 40 , 500 );
	block1 = new block( 700 , 410 , 10 , 100 );//left
	block2 = new block( 750 , 450 , 100 ,10 );//bottom
	block3 = new block( 800 , 410 , 10 ,100 );//right
	paper  = new Paper( 200 , 200 , 30 , 30 );

  
}


function draw() 
{
	need( "white" , CENTER );
	//block1.display();
	block2.display();
	//block3.display();

    paper.display();

	ground.display();
	Top.display();
	left.display();
	right.display();
}

function keyPressed()
{
	if( keyCode===UP_ARROW )
	{
		Matter.Body.applyForce(paper.body,paper.body.position,
		{
			x:35 ,
			y:-65
		}
		);
	}
}	

	
