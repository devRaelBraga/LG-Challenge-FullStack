import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  // Tests GetMovies function, should return the first 500 movies
  describe('root', () => {
    it('should return an object"', async () => {
      const result = await appController.getMovies()
      const tests = (result.length == 500) && (typeof(result) == 'object')
      
      expect(tests).toBe(true);
    });
  });
  
  // Tests getRating function, which must return 500 best rated movies
  describe('root', () => {
    it('should return best-rated movies"', async () => {
      const result = await appController.getRating()
      const tests = (result.length == 500) && (typeof(result) == 'object') && (result[0].movieId == 318)

      expect(tests).toBe(true);
    });
  });

  // Tests Search function, searching by title, by year, by title and year, and with no params
  describe('root', () => {
    it('should return a searched movie"', async () => {
      const promises = [
        appController.searchByTitle('Toy Story'),
        appController.searchByTitle('Toy Story', 1995),
        appController.searchByTitle(''),
        appController.searchByTitle('', 1995),
      ]
      const [result1, result2, result3, result4] = await Promise.all(promises)

      const tests = (result1[1].movieId == 3114 && result1.length == 9) && // tests if the second movie received is Toy Story 2, and check if there are 9 movies with "Toy Story" on it
        (result2.length == 1 && result2[0].movieId == 1) &&               //  tests if the received movie is "Toy Story", 1995
        (result3.length == 500) && (typeof(result3) == 'object') &&       //  tests if by searching without params, still receive data
        (result4.length == 500 && result4[0].year == 1995)                //  tests if by searching wiht only year, will receive movies from this year
      
      expect(tests).toBe(true);
    });
  });
});
