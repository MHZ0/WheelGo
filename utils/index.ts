import { CarProps } from "@/app/types";

export const calculateCarRent = ( city_mpg: number, year: number, highway_mpg: number ) => {

	const basePricePerDay = 50; // Base rental price per day in dollars
	const mileageFactor = 0.1; // Additional rate per mile driven
	const ageFactor = 0.05; // Additional rate per year of vehicle age
  
	// Calculate additional rate based on mileage and age
	const mileageRate = city_mpg * mileageFactor;
	const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
	// Calculate total rental rate per day
	const rentalRatePerDay = ((basePricePerDay + mileageRate + ageRate + highway_mpg)-30);
  
	return rentalRatePerDay.toFixed(0);
  };

const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';

export async function fetchCars() {

        const headers = {
            'X-RapidAPI-Key': 'd1d7a4a121msh4d7888435822439p118f30jsnee6ab5d6cdc2',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
        };
        const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
        const response = await fetch( url, { headers : headers } );

        const result = await response.json(); // parses JSON response into native JavaScript objects
        
        return result;
}


 /* export const generateCarImageUrl = (car: CarProps, angle?:string) => {
  const url = new URL ('https://cdn.imagin.studio/car-image-api')
  
  const { make, year, model } = car
  
  url.searchParams.append('customer', 'hrjavascript-mastery')
  url.searchParams.append('make', make)
  url.searchParams.append('modelFamily', model.split(' ')[0])
  url.searchParams.append('zoomType', 'fullscreen')
  url.searchParams.append('modelYear', `${year}`)
  url.searchParams.append('angle', `${angle}`)
  
  return `${url}`;
  } */