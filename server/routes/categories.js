const express = require( 'express' );
const CategoriesRoutes = express.Router();

let categories = [
  { id: 1, title: "Боевики.Триллеры" },
  { id: 2, title: "Детективы" },
  { id: 3, title: "Драматургия" },
  { id: 4, title: "Историческая проза" },
  { id: 5, title: "Классическая проза" },
  { id: 6, title: "Литература на иностранных языках" },
  { id: 7, title: "Любовный роман" },
  { id: 8, title: "Поэзия" },
  { id: 9, title: "Приключенческая литература" },
  { id: 10, title: "Сентиментальная проза" },
  { id: 11, title: "Современная проза" },
  { id: 12, title: "Фантастика" },
  { id: 13, title: "Фэнтези" },
  { id: 14, title: "Эзотерическая художественная литература" },
  { id: 15, title: "Эпос.Фольклор.Афоризмы" },
  { id: 16, title: "Юмор и сатира" },
];

CategoriesRoutes.route( '/' )
  .get( ( req, res ) => {
    res.status( 200 ).json( categories )
  } )
  .post( ( req, res ) => {
    let category = {
      id: categories[ categories.length - 1 ].id + 1,
      title: req.body.title
    }

    categories.push( category );

    res.status( 200 ).json( { message: "New category created" } );
  } )
  .delete( ( req, res ) => {

  } )
  .put( ( req, res ) => {

  } );

CategoriesRoutes.route( '/:id' )
  .get( ( req, res ) => {
    const category = categories.filter( category => category.id === +req.params.id );

    if ( category[ 0 ] ) {
      res.status( 200 ).json( category[ 0 ] )
    } else {
      res.status( 400 ).json( { message: 'Category is missing.' } )
    }
  } )
  .put( ( req, res ) => {
    categories = categories.filter( category => {

      if ( category.id === +req.params.id ) {
        category.title = req.body.title;
      }

      return category;
    } );
  } ).delete( ( req, res ) => {
    categories = categories.filter( category => category.id !== +req.params.id );
  } )

module.exports = CategoriesRoutes;
