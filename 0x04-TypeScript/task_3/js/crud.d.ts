import (RowID, RowElement) from './interface';

interface InsertRow {
	(row: RowElement): RowID;
}

interface DeleteRow {
	(rowID: RowID): void;
}

interface updateRow {
	(rowID: RowID, row: RowElement): RowID;
}
