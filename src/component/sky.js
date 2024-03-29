import React from 'react'

  const sky = ({tempInfo}) => {
    const {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
    }=tempInfo;

    // let sec =sunset;
    // let date = new Date(sec * 1000);
    // let timeStr = `${date.getHourse()}:${date.getMinutes()}`;
  return (
    <>
    <article className='widget'>
    <div className='weatherIcon'>
      <i className={'wi wi-day-sunny'}></i>
    </div>
    
    <div className='weatherInfo'>
    <div className='temperature'>
    
    <span>{temp}&deg;</span>

    </div>
    

    <div className='description'>
      <div className='weatherCondition'>Sunny</div>
      <div className='place'>{name},{country}</div>
    </div>
    </div>

      <div className='date'> {  new Date().toLocaleString() } </div>

      {/* our four column section */}
       <div className='extra-temp'>
       <div className='temp-info-minmax'>
       <div className='two-sided-section'>
       <p>
        <i className={'wi wi-sunset'}></i>
       </p>
       <p className='extra-info-leftside'>
         {sunset} <br/>
        sunset
       </p>
       </div>
      <div className='two-sided-section'>
       <p>
        <i className={'wi wi-humidity'}></i>
       </p>
       <p className='extra-info-leftside'>
        {humidity} <br/>
        Humidity
       </p>
      </div>
      </div>

        <div className='weather-extra-info'>
        <div className='two-sided-section'>
       <p>
        <i className={'wi wi-rain'}></i>
       </p>
       <p className='extra-info-leftside'>
        {pressure}<br/>
        Pressure
       </p>
      </div>

      <div className='two-sided-section'>
       <p>
        <i className={'wi wi-strong-wind'}></i>
       </p>
       <p className='extra-info-leftside'>
        {speed} <br/>
        speed
       </p>
      </div>
        

        </div>     
       </div>
   </article>
</>
  );
};
export default sky;
