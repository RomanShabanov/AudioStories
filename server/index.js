const express = require( 'express' )
const app = express();
const routes = require( './routes' );

const bodyParser = require( 'body-parser' );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( {
  extended: true
} ) );

app.use( function( req, res, next ) {
  res.setHeader( 'Access-Control-Allow-Origin', 'http://localhost:8100' );
  res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE' );
  res.setHeader( 'Access-Control-Allow-Headers', 'X-Requested-With,content-type' );
  res.setHeader( 'Access-Control-Allow-Credentials', true );
  next();
} );

app.get( '/', ( req, res ) => res.send( 'Hello Vadim!' ) )
app.use( '/', routes );

app.listen( 3000, () => console.log( 'API listening on port 3000!' ) )

const authors = [
  { id: 1, name: "Pjotr" },
  { id: 2, name: "Pjotr2" },
  { id: 3, name: "Pjotr" },
  { id: 4, name: "Pjotr" },
  { id: 5, name: "Pjotr" },
  { id: 6, name: "Pjotr" },
];

app.get( '/authors', ( req, res ) => {
  res.status( 200 ).json( authors );
} );

app.get( '/authors/:id', ( req, res ) => {
  const author = authors.filter( author => author.id === +req.params.id )[ 0 ];

  if ( author ) {
    res.status( 200 ).json( author )
  } else {
    res.status( 400 ).json( { message: 'Author is missing.' } )
  }

} )
