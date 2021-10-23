import axios from "axios";

export function splitYear(data){
    
    return data.split("/")[2]
}

const url = "https://g54qw205uk.execute-api.eu-west-1.amazonaws.com/DEV/stub";
const body = { "angular_test": "angular-developer" }

export function getSalesData(data) {
  
    let first_year = [];
    let second_year = [];
    let third_year = [];
    let fourth_year = [];
 
                for (let sale of data) {
                    // console.log(splitYear(sale["Order Date"]))
                    if (splitYear(sale["Order Date"]) === "2014") {
                        first_year.push(sale);
                    } else if (splitYear(sale["Order Date"]) === "2015") {
                        second_year.push(sale)
                    } else if (splitYear(sale["Order Date"]) === "2016") {
                        third_year.push(sale)
                    } else {
                        fourth_year.push(sale)
                    }
            
          
                }
            
    return {
             first_year, second_year, third_year, fourth_year
         }
}



export function splitMonth(data){
    
    return data.split("/")[0]
}


export const saleArrayList = (arr) => {
    let Jan = 0;
    let Feb = 0;
    let Mar = 0;
    let Apr = 0;
    let May = 0;
    let Jun = 0;
    let Jul = 0;
    let Aug = 0;
    let Sep = 0;
    let Oct = 0;
    let Nov = 0;
    let Dec = 0;

    for (let sale of arr) {
        
        switch (splitMonth(sale["Order Date"])){
            case '1':
                Jan += Number(sale.Profit);
                break;
            case '2':
                Feb += Number(sale.Profit);
                break;
            case '3':
                Mar += Number(sale.Profit);
                break;
            case '4':
                Apr += Number(sale.Profit);
                break;
            case '5':
                May += Number(sale.Profit);
                break;
            case '6':
                Jun += Number(sale.Profit)
                break;
            case '7':
                Jul += Number(sale.Profit);
                break;
            case '8':
                Aug += Number(sale.Profit);
                break;
            case '9':
                Sep += Number(sale.Profit);
                break;
            case '10':
                Oct += Number(sale.Profit);
                break;
            case '11':
                Nov += Number(sale.Profit);
                break;
            default:
                Dec += Number(sale.Profit);
        }
      
    }
    // console.log([Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct,Nov, Dec])
    return [Jan, Feb, Mar, Apr, May, Jun, Jul, Aug, Sep, Oct,Nov, Dec]
}


