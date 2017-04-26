const isButtonFacebook = number === 3;

if (isButtonFacebook) {
  return (
    <div className="small-4 medium-2 columns">
      <div>
        <i className={icon}></i>
      </div>
      <div className="fb-share-button" data-href="https://food.ee/" data-layout="button" data-size="large" data-mobile-iframe="true">
        <a className="fb-xfbml-parse-ignore" target="_blank"  href={url}>
        <button
          type="button"
          className="button"
          disabled={disabled}
          onClick={handleClick}
        >{button}</button></a>
      </div>
    </div>
  );
}
