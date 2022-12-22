import { Module } from '@nestjs/common';
import { NotificationsRepositoriy } from '@application/repositories/notifications-repositories';
import { PrismaService } from './prisma/prisma.service';
import { PrismaNotificationsRepository } from './prisma/repositories/prisma-notifications-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepositoriy,
      useClass: PrismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepositoriy],
})
// eslint-disable-next-line prettier/prettier
export class DatabaseModule { }
