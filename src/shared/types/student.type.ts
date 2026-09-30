export interface Student {
    id: string;
    userId: string;
    nisn: string;
    nis: string;
    fullName: string;
    gender: 'L' | 'P';
    birthPlace: string;
    birthDate: string;
    classId: string;
    className?: string;
    parentId?: string;
    parentName?: string;
    address: string;
    isClassLeader?: boolean;
    createdAt: string;
  }