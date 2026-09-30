export interface GradeComponent {
    id: string;
    studentId: string;
    subjectId: string;
    academicYearId: string;
    assignmentScore: number;
    formativeScore: number;
    summativeScore: number;
    finalScore: number;
    letterGrade: 'A' | 'B' | 'C' | 'D' | 'F';
    predicate: string;
    feedback?: string;
  }
  
  export interface ReportCard {
    studentId: string;
    studentName: string;
    nisn: string;
    className: string;
    academicYear: string;
    semester: string;
    grades: {
      subjectCode: string;
      subjectName: string;
      kkm: number;
      score: number;
      letterGrade: string;
      predicate: string;
    }[];
    overallGPA: number;
    attendanceSummary: {
      hadir: number;
      izin: number;
      sakit: number;
      alpa: number;
    };
    teacherNotes?: string;
  }