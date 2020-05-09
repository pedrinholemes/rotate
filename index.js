var image = document.getElementById('image');
    var rotateBool = false;
    var currentRotate = 0;
    document.getElementById('stop').style.display = 'none'
    rotate(); 
    function rotate(){
      setInterval( () => {
        if(rotateBool){
            var rotateDeg = `rotate(${currentRotate}deg)`;
            image.style.transform = rotateDeg;
            image.style.webkitTransform= rotateDeg;
            image.style.mozTransform = rotateDeg;
            if (currentRotate==360) {
              currentRotate = 0;
            }else if(currentRotate < 360){
              currentRotate++;
            }else if(currentRotate > 360){
              currentRotate=0;
            }
            
    
        }else{
          return false
  
        }
      }, 0.5);
    }
    function stopRotate(){
      document.getElementById('stop').style.display = 'none'
      document.getElementById('run').style.display = 'block'
      rotateBool = false
    }
    function runRotate(){
      document.getElementById('stop').style.display = 'block'
      document.getElementById('run').style.display = 'none'
      rotateBool = true
    }
