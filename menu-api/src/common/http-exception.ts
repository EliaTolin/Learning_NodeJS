export default class HttpException extends Error{
    statusCode?: number;
    status?: number;
    msg:string;
    error:string|null;
    constructor(statusCode:number, msg:string, error?:string)
    {
        super(msg);
        this.statusCode = statusCode;
        this.msg = msg;
        this.error = error || null;
    }
}