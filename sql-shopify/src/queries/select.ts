import {APPS_CATEGORIES, CATEGORIES} from "../shopify-table-names";

export const selectCount = (table: string): string => {
  return `Select COUNT(*) AS c from ${table}`;
};

export const selectRowById = (id: number, table: string): string => {
  return `Select * from ${table} WHERE id = ${id}`;
};

export const selectCategoryByTitle = (title: string): string => {
  return `Select id from categories WHERE title = '${title}'`;
};

export const selectAppCategoriesByAppId = (appId: number): string => {
    return `SELECT a.title AS app_title, c.id AS category_id, c.title AS category_title
            FROM categories c
                   INNER JOIN apps_categories ac ON c.id = ac.category_id
                   INNER JOIN apps a ON ac.app_id = a.id
            WHERE app_id = ${appId}`};

export const selectUnigueRowCount = (tableName: string, columnName: string): string => {
  return `Select COUNT(DISTINCT ${columnName}) as c FROM ${tableName}`;
};

export const selectReviewByAppIdAuthor = (appId: number, author: string): string => {
  return `Select * FROM reviews WHERE author = '${author}'`;
};

export const selectColumnFromTable = (columnName: string, tableName: string): string => {
  return `Select ${columnName} FROM ${tableName}`;
};

