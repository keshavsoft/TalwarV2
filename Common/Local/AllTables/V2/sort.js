import { readFileSync } from "fs";
import MDBReader from "mdb-reader";
// const dataPath = "\\\\tally\\e\\talwar\\V1\\Data\\2026\\IAM.mdb";

const buffer = readFileSync("Data/IAM.mdb");
const reader = new MDBReader(buffer);

const tableNames = reader.getTableNames();

const result = [];

tableNames.forEach((tableName) => {
    try {
        const table = reader.getTable(tableName);
        const count = table.getData().length;

        result.push({ table: tableName, rows: count });
    } catch {
        result.push({ table: tableName, rows: -1 });
    }
});

// 🔽 sort DESC
result.sort((a, b) => b.rows - a.rows);

console.log(result);