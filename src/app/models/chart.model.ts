export interface Chart {
    title: string;
    type: string;
    data: any[][];
    columnNames: string[];
    width: string;
    height: string;
    formatters?: any;
    options: any;
    description: string;
}
