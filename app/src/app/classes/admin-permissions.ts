export class AdminPermissions {

    public allowedAreas: string [];

    public CreateUser: boolean;
    public ReadUser: boolean;
    public UpdateUser: boolean;
    public DeleteUser: boolean;

    constructor(c: boolean, r: boolean, u: boolean, d: boolean, allowedAreas: string []) {
        this.CreateUser = c;
        this.ReadUser = r;
        this.UpdateUser = u;
        this.DeleteUser = d;
        this.allowedAreas = allowedAreas;
    }
}
