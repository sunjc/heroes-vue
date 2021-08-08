export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZES = [10, 20, 50, 100]

export interface Page<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  number: number;
}

export interface Pageable {
  page: number;
  size: number;
  sort?: { prop: string, order: string | null };
}

export class PageRequest implements Pageable {
  page = 1;
  size = DEFAULT_PAGE_SIZE;
  sort?: { prop: string, order: string | null };
}

export function pageParams<T>(query?: T, pageable?: Pageable): URLSearchParams {
  const params = new URLSearchParams();
  params.append('page', pageable ? (pageable.page - 1).toString() : '0');
  params.append('size', pageable ? pageable.size.toString() : DEFAULT_PAGE_SIZE.toString());

  if (pageable && pageable.sort) {
    params.append('sort', pageable.sort.order === 'ascending' ? `${pageable.sort.prop},ASC` : `${pageable.sort.prop},DESC`);
  }

  if (query) {
    Object.keys(query).forEach(key => {
      let value = (query as any)[key];
      if (value === '') {
        return;
      }
      if (value instanceof Date) {
        value = value.toISOString();
      }
      params.append(key, value);
    });
  }

  return params;
}
