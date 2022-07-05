import React from 'react'
import { useState } from 'react'
import img from '../Assets/Images/img1.jpg'
function Improve() {

    const [image, setImage] = useState()
    var uploadedImage

    function show() {
        // console.log(image);
        console.log(uploadedImage);

        var img = document.createElement('img')
        img.onload = function(){
            img.style.filter = "grayscale(1)"
            img.width = "2000"
            img.height = "1191"
          }          
        img.id = "imgID"
        img.src = uploadedImage
        var container = document.querySelector(".img-container")
        console.log(img);
        container.appendChild(img)


    }

    return (
        <>
            <input type="file" onChange={
                (e) => {
                    uploadedImage = URL.createObjectURL(e.target.files[0])
                    setImage(e.target.files[0])
                    show()
                }


            } />

            <div className="img-container">

            </div>
        </>
    )
}

export default Improve
