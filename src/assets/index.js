import sunny from './day.svg';
import rainy from './rainy-1.svg'
import heavy_rain from './rainy-7.svg'
import fewCloud from './cloudy-day-1.svg'
import cloudy from "./cloudy.svg"
import windy from './windy.png'
import thunder from './thunder.svg'
import snowy from './snowy-6.svg'
function image_detect(my_data){
   // if(my_data === '04d'){
   //  return rainy
   // }
   switch(my_data){
      case('01d'):
      case('01n'):
         return sunny;
         break;
      case('02d'):
      case('02n'):
         return fewCloud;
         break;

      case('03d'):
      case('03n'):
      case('04d'):
      case('04n'):
         return cloudy;
         break;

      case('09d'):
      case('09n'):
         return heavy_rain;
         break;
      

      case('10d'):
      case('10n'):
          return rainy;
          break;

      case('11d'):
      case('11n'):
          return thunder;
          break;

      case('13d'):
      case('13n'):
          return snowy;
          break;

      case('50d'):
      case('50n'):
          return windy;
          break;
          
      default:
         return;
   }
}
export default image_detect;