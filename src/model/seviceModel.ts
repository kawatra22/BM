export class dtoRequest {
    Total:number;
    Page:number;
    PageSize:number;
    Data : any;
    Sortdatafield:string;
    SortOrder :string;
    Message : string;
    Status : number;
}

export class dtoResponse {
    Total:number;
    Page:number;
    PageSize:number;
    Data : any;
}

export class dtoUserLogin{
    ID:number;
    UserID:number;
    Username:string;
    Password:string;
    ModifiedDate:Date;
    UserRole:number;
    FirstName:string;
    LastName:string;
}