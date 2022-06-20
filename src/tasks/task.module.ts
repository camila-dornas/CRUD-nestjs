import { Module } from '@nestjs/common';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
  imports: [],
  controllers: [TaskController],
  providers: [TaskService],
})
export class TaskModule {}

// @Module({})
// export class TaskModule {
//   imports: [];
//   controller: [TaskController];
//   provider: [TaskService];
// }
