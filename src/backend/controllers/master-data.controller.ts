import { masterDataService } from '../services/master-data.service';
import { AppError } from '../errors/app-error';

export class MasterDataController {
  async get(resource: string | null, searchParams: URLSearchParams) {
    if (resource === 'students' || !resource) {
      const search = searchParams.get('search') || undefined;
      const classId = searchParams.get('classId') || undefined;
      return masterDataService.getStudents({ search, classId });
    }

    throw new AppError(`Resource '${resource}' tidak dikenali`, 400);
  }

  async create(resource: string | null, body: any) {
    if (resource === 'students' || !resource) {
      return masterDataService.createStudent(body);
    }

    throw new AppError(`Resource '${resource}' tidak dikenali`, 400);
  }
}

export const masterDataController = new MasterDataController();