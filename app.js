import { readFileSync } from "fs";
import MDBReader from "mdb-reader";

const buffer = readFileSync("IAM.mdb");
const reader = new MDBReader(buffer);

const tableNames = reader.getTableNames();

const result = {};

tableNames.forEach((tableName) => {
    try {
        const table = reader.getTable(tableName);
        const rows = table.getData();   // all rows
        result[tableName] = rows.length;
    } catch (err) {
        result[tableName] = "Error reading";
    }
});

console.log(result);