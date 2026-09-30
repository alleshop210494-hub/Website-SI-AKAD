import { gradingService } from '../services/grading.service';

export class GradingController {
  async getReportCard(studentId: string, academicYearId: string) {
    return gradingService.generateReportCard(studentId, academicYearId);
  }

  async submitGrades(body: any) {
    return gradingService.calculateAndSaveGrade(body);
  }
}

export const gradingController = new GradingController();