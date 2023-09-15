const { PrismaClient } = require('@prisma/client');
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

const prisma = new PrismaClient()


// ADD MOVIES TO THE DATABASE
// fs.createReadStream('./dataset/tags.csv')
//   .pipe(csv())
//   .on('data', async (data) => {
//     try {
//       await prisma.movie.create(
//       {data: 
//         {
//         movieId: Number(data.movieId),
//         title: data.title.slice(0, data.title.length -7),
//         genres: data.genres,
//         year: Number(data.title.slice(data.title.length - 5, data.title.length -1))
  
//         }
//       })
//     } catch (error) {
//     }
//   })
//   .on('end', async () => {
//   });

// ADD TAGS TO THE DATABASE
// fs.createReadStream('./dataset/tags.csv')
//   .pipe(csv())
//   .on('data', async (data) => {
//     try {
  
//       await prisma.tag.create({data: {
  //         movieId: Number(data.movieId),
  //         tag: data.tag,
  //         userId: Number(data.userId),
//         timestamp: new Date(Number(data.timestamp)),
//       }})
//       // results.push(data)
//     } catch (error) {
  //       // console.log(error)
  //     }
  //   })
  //   .on('end', async () => {
    //     // console.log(results)
    //   });
    
    // ADD LINKS TO THE DATABASE
  //   fs.createReadStream('./dataset/links.csv')
  //   .pipe(csv())
  //   .on('data', async (data) => {
  //     try {
  //       await prisma.link.create(
  //         {
  //           data: {
  //             movieId: Number(data.movieId),
  //             imdbId: Number(data.imdbId),
  //             tmdbId: Number(data.tmdbId),
  //           }})
  //           // results.push(data)
  //         } catch (error) {
  //           console.log(error)
  //         }
  //       })
  // .on('end', async () => {
  //   // console.log(results)
  // });

  let movies = new Array(65000)
  // movies[0] = {oi: 'oi'}
  // console.log(movies[0] ? 's' : 'n')
  
  // ADD RATINGS TO THE DATABASE
  fs.createReadStream('./dataset/ratings.csv')
  .pipe(csv())
  .on('data', async (data) => {
    try {
      data.movieId = Number(data.movieId)
      data.rating = Number(data.rating)
      movies[data.movieId] = {
        movieId: Number(data.movieId),
        rating: movies[data.movieId] ? movies[data.movieId].rating + data.rating  : data.rating,
        quantity: movies[data.movieId] ?  movies[data.movieId].quantity + 1 : 1
      }
      // console.log(movies)
    }
      catch (error) {
        console.log(error)
      }
    })
    .on('end', async () => {

        movies.map(async (movie) => {
          try {
            await prisma.rating.create({data: {
              movieId: movie.movieId,
              rating: movie.rating / movie.quantity,
              quantity: movie.quantity
            }})
          } catch (error) {
            console.log(error)
          }
        })
    });
