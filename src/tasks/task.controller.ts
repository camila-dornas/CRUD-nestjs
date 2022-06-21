import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TaskService } from './task.service';
import { Task } from './tasks';

@Controller('tasks') // define o nome da rota geral
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Get()
  getAll() {
    return this.taskService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.taskService.getById(id);
  }

  @Post()
  createTask(@Body() task: Task) {
    return this.taskService.createTask(task);
  } // precisou retirar o parametro do body para funcionar

  @Put(':id')
  update(@Param('id') id: number, @Body() task: Task) {
    task.id = id;
    return this.taskService.update(task);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.taskService.delete(id);
  }
}

// ref: https://docs.nestjs.com/recipes/crud-generator
