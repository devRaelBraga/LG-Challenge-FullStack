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
  private prisma: PrismaClient = new PrismaClient();
  
  async getMovies(): Promise<movie[]> {

    try {
      return await this.prisma.filmeRating.findMany({
        take: 500
      });
    } catch (error) {
      return error.message
    }
  }
  
  async getRecomendation(): Promise<movie[]> {

    try {
      let movies: movie[] = await this.prisma.filmeRating.findMany()
  
      movies = movies.map((movie) => {
          const overallRating = movie.rating * movie.quantity / 2
  
          return {
            ...movie,
            overallRating
          }
      })
  
      movies.sort((a, b) => b.overallRating - a.overallRating)
  
      return movies.slice(0, 500)

    } catch (error) {
      return error.message
    }

  }

  async searchTitleYear(searchedTitle:string, year:number, genre:string, top:number): Promise<movie[]> {

    try {
      let whereClause: any = {}


  
      if(searchedTitle){
        whereClause.title = {
          contains: searchedTitle
        }
      }

      if(genre){
        whereClause.genres = {
          contains: genre
        }
      }
  
      if(year){
        whereClause.year = {
          equals: year
        }
      }
  
      return await this.prisma.filmeRating.findMany({
        where: whereClause,
        take: top? top : 500
      })
    } catch (error) {
      return error.message
    }
  }
}
