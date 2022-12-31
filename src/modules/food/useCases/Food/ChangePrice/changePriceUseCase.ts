import { IFoodRepository } from "../../../repositories/IFoodRepository";

class ChangePriceUseCase {
    constructor( private foodRepository: IFoodRepository ){};

    async execute(id: string, newPrice: string){
        await this.foodRepository.changePrice(id, newPrice);
    } 
};

export { ChangePriceUseCase };