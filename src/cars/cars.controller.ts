import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dtos/create-car.dto';
import { UpdateCarDto } from './dtos/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe) tambien se puede usar aca o en un nivel mas alto
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  getAllCars() {
    return this.carsService.findAll();
  }

  @Get(':id')
  // getCarById(@Param('id', ParseUUIDPipe) id: string) {
  getCarById(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.carsService.findOneById(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  createCar(@Body() body: CreateCarDto) {
    return this.carsService.create(body)
  }

  @Patch(':id')
  // updateCar(@Param('id', ParseIntPipe) id: number, @Body() body: any) {
  updateCar(@Param('id', ParseUUIDPipe) id: string, @Body() body: UpdateCarDto) {
    return this.carsService.update(id, body)
  }

  @Delete(':id')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this.carsService.delete(id)
  }
}
