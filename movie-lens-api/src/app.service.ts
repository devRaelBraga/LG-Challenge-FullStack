import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';


type movie = {
  movieId: number;
  title: string;
  genres: string;
  year: number;
  rating: number;
  quantity: number;
  overallRating?: number;
}

@Injectable()
export class AppService {
  
  async getMovies(): Promise<movie[]> {
    const prisma = new PrismaClient();

    try {
      return await prisma.filmeRating.findMany({
        take: 500
      });
    } catch (error) {
      return error.message
    }
  }
  
  async getRecomendation(): Promise<movie[]> {
    const prisma = new PrismaClient();

    try {
      let movies: movie[] = await prisma.filmeRating.findMany({
        take: 500
      })
  
      movies = movies.map((movie) => {
          const overallRating = movie.rating * movie.quantity / 2
  
          return {
            ...movie,
            overallRating
          }
      })
  
      movies.sort((a, b) => b.overallRating - a.overallRating)
  
      return movies

    } catch (error) {
      return error.message
    }

  }

  async searchTitleYear(searchedTitle:string, year:number): Promise<movie[]> {
    const prisma = new PrismaClient()

    try {
      let whereClause: any = {}
  
      if(searchedTitle){
        whereClause.title = {
          contains: searchedTitle
        }
      }
  
      if(year){
        whereClause.year = {
          equals: year
        }
      }
  
      return await prisma.filmeRating.findMany({
        where: whereClause,
        take: 500
      })
    } catch (error) {
      return error.message
    }



  }
}
