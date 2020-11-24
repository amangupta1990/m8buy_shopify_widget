import { DancingIcon } from "./dancingIcon";
import { M8buyIcon } from "./m8buyIcon";
import MoneyBagIcon from "./moneybagIcon";

export function ProductMessage(){
    
    return(
        <div className="flex flex-row">
            <div className="left flex flex-col pt4  pr-8 pl-8">
                <p className=" w-24 text-center block m-auto">Ask friends to help you decide</p>
                <div class="button-container flex flex-row">
                    <DancingIcon className="mr-2 mt-1"></DancingIcon><button className=" rounded-lg bg-purple-600 text-white p-2 w-16 "><M8buyIcon className="block m-auto"></M8buyIcon></button>
                </div>
            </div>
            <div className="right flex flex-col pt4  pr-8 pl-8 border border-l border-r-0 border-t-0 border-b-0 border-gray-400">
                <p className=" text-purple-600">$14.00 - $21.00 </p>
                <p className=" w-24 text-center block m-auto">cashback when friends buy</p>
                <div class="button-container flex flex-row">
                    <MoneyBagIcon className="mr-2 mt-1"></MoneyBagIcon><button className=" rounded-lg bg-purple-600 text-white p-2 w-16 "><M8buyIcon className="block m-auto"></M8buyIcon></button>
                </div>
            </div>
        </div>
    )

}