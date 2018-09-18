const express = require( 'express' );
const AuthorsRoutes = express.Router();

const authors = [
  { id: 1, name: "Andre" },
  { id: 2, name: "Pjotr2" },
  { id: 3, name: "Andrei" },
  { id: 4, name: "Pjotr" },
  { id: 5, name: "Pjotr" },
  { id: 6, name: "Pjotr" },
];

AuthorsRoutes.route( '/' )
  .get( ( req, res ) => {
    if ( Object.keys( req.query ).length ) {

      let filterAuthors = authors.filter( author => {

        Object.keys( req.query ).map( search => {
          if ( author && author[ search ] && author[ search ].toString().indexOf( req.query[ search ] ) < 0 ) {
            author = false;
          }
        } )
        return author;

      } );
      res.status( 200 ).json( filterAuthors );
    } else {
      res.status( 200 ).json( authors );
    }
  } )
  .post( ( req, res ) => {
    let author = {
      id: authors[ authors.length - 1 ].id + 1,
      title: req.body.title
    }

    authors.push( author );

    res.status( 200 ).json( { message: "New author created" } );
  } )
  .delete( ( req, res ) => {

  } )
  .put( ( req, res ) => {

  } );

AuthorsRoutes.route( '/:id' )
  .get( ( req, res ) => {
    const author = authors.filter( author => author.id === +req.params.id )[ 0 ];

    if ( author ) {
      res.status( 200 ).json( author )
    } else {
      res.status( 400 ).json( { message: 'author is missing.' } )
    }
  } )
  .put( ( req, res ) => {
    authors = authors.filter( author => {

      if ( author.id === +req.params.id ) {
        author.title = req.body.title;
      }

      return author;
    } );
  } ).delete( ( req, res ) => {
    authors = authors.filter( author => author.id !== +req.params.id );
  } )

module.exports = AuthorsRoutes;
