import { Controller } from "@nestjs/common";

@Controller('/user')
export class UserController {
    public create(): any{
        return { data: 'Create!'};
    }

    public getOne(): any{
        return { data: 'Create!'};
    }

    public getAll(): any{
        return { data: 'Create!'};
    }

    public update(): any{
        return { data: 'Create!'};
    }

    public delete(): any{
        return { data: 'Create!'};
    }
}

