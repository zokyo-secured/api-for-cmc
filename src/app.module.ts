import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ReportModule } from './report/report.module';
import { ThrottlerModule } from "@nestjs/throttler";
import { UserModule } from './user/user.module';
// import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './roles/role.guard';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb://localhost/cmc-audit-report',
      { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10,
    }),
    UserModule,
    AuthModule,
    ReportModule,
  ],
  controllers: [AppController],
  providers: [
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    AppService, 
    UserModule, 
  ],
})
export class AppModule {}
