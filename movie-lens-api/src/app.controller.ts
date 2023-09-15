import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMovies() {
    return this.appService.getMovies();
  }
  
  @Get('/recomendation')
  getRating() {
    return this.appService.getRecomendation();
  }

  @Get('/search?')
  searchByTitle(
    @Query('title') title:string = '',
    @Query('year') year?:number,
  ) { 
    return this.appService.searchTitleYear(title, Number(year));
  }
}
