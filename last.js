import { readFileSync } from "fs";
import MDBReader from "mdb-reader";

const buffer = readFileSync("IAM.mdb");
const reader = new MDBReader(buffer);

const tableName = "Imast";

const table = reader.getTable(tableName);
const rows = table.getData();

// 🔽 last row
const lastRow = rows[rows.length - 1];

console.log(lastRow);