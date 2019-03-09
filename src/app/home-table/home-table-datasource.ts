import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface HomeTableItem {
  category: string;
  id: number;
  description: string;
  reportedBy:string;
  assignedTo:string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: HomeTableItem[] = [
  {id: 1, category: 'Hydrogen', description: 'Item is Hydrogen',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 2, category: 'Helium', description: 'Item is Helium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 3, category: 'Lithium', description: 'Item is Lithium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 4, category: 'Beryllium',description: 'Item is Beryllium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 5, category: 'Boron',description: 'Item is Boron',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 6, category: 'Carbon',description: 'Item is Carbon',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 7, category: 'Nitrogen',description: 'Item is Nitrogen',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 8, category: 'Oxygen',description: 'Item is Oxygen',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 9, category: 'Fluorine',description: 'Item is Fluorine',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 10, category: 'Neon',description: 'Item is Neon',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 11, category: 'Sodium',description: 'Item is Sodium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 12, category: 'Magnesium',description: 'Item is Magnesium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 13, category: 'Aluminum',description: 'Item is Aluminum',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 14, category: 'Silicon',description: 'Item is Silicon',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 15, category: 'Phosphorus',description: 'Item is Phosphorus',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 16, category: 'Sulfur',description: 'Item is Sulfur',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 17, category: 'Chlorine',description: 'Item is Chlorine',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 18, category: 'Argon',description: 'Item is Argon',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 19, category: 'Potassium',description: 'Item is Potassium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 20, category: 'Calcium',description: 'Item is Calcium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 21, category: 'Sodium',description: 'Item is Sodium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 22, category: 'Magnesium',description: 'Item is Magnesium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 23, category: 'Aluminum',description: 'Item is Aluminum',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 24, category: 'Silicon',description: 'Item is Silicon',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 25, category: 'Phosphorus',description: 'Item is Phosphorus',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 26, category: 'Sulfur',description: 'Item is Sulfur',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 27, category: 'Chlorine',description: 'Item is Chlorine',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 28, category: 'Argon',description: 'Item is Argon',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 29, category: 'Potassium',description: 'Item is Potassium',reportedBy: 'Zack', assignedTo: 'Max'},
  {id: 30, category: 'Calcium',description: 'Item is Calcium',reportedBy: 'Zack', assignedTo: 'Max'}
];

/**
 * Data source for the HomeTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class HomeTableDataSource extends DataSource<HomeTableItem> {
  data: HomeTableItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<HomeTableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: HomeTableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: HomeTableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'category': return compare(a.category, b.category, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/category columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
