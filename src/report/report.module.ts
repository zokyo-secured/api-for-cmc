import { Module } from '@nestjs/common';
import { ReportService } from './report.service';
import { ReportController } from './report.controller';
import { MongooseModule } from "@nestjs/mongoose";
import { ReportSchema } from 'src/schemas/Report.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Report', schema : ReportSchema }]),
  ],
  providers: [ReportService],
  controllers: [ReportController]
})
export class ReportModule {}
