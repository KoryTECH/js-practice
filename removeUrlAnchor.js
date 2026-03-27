function removeUrlAnchor(url){
    url = url.split('');
    let ashTag = [];
    for (let index = 0; index < url.length; index++) {
      if (url[index] === `#`){
        continue;
      }
      else {
        ashTag.push(url[index]);
      }
    }
    return ashTag.join('');
  }
  removeUrlAnchor(`korede#@gmail.com`)