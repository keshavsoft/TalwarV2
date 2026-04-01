import { readFileSync } from "fs";
import MDBReader from "mdb-reader";

const buffer = readFileSync("IAM.mdb");
const reader = new MDBReader(buffer);

const tableName = "Imast";

const table = reader.getTable(tableName);

// ✅ FIX here
const columns = table.getColumns();

const schema = columns.map(col => ({
    name: col.name,
    type: col.type
}));

console.log(schema);