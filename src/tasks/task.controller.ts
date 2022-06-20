import { Controller, Get, Param } from '@nestjs/common';
import { TaskService } from './task.service';

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
}
