export interface Chart {
    title: string;
    type: string;
    data: any[][];
    columnNames: string[];
    formatters?: any;
    options: any;
    description: string;
}
