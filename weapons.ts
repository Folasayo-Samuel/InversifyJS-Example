import { injectable } from 'inversify';
import { IWeapon } from "./types";

@injectable()
export class Sword implements IWeapon {
    name = "Sword";

    use(){
        return 'Swinging the sword!';
    }
}

@injectable()
export class Bow implements IWeapon {
    name = "Bow";

    use(){
        return 'Shooting an arrow!';
    }
}