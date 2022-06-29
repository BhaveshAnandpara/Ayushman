import React from 'react';
import Tesseract from 'tesseract.js';


const App = () => {
    const [isLoading, setIsLoading] = React.useState(false);
    const [image, setImage] = React.useState('');
    const [improvedImage, setImprovedImage] = React.useState('');
    const [text, setText] = React.useState('');
    const [progress, setProgress] = React.useState(0);
    let scannedText = ""

    function improve(e) {

        var selectedFile = e.target.files[0];
        var reader = new FileReader();

        console.log("file object : ", selectedFile);

        var imgtag = document.createElement('img')
        imgtag.title = selectedFile.name;

        reader.onload = function (e) {
            imgtag.src = e.target.result;
            // imgtag.style.filter = "grayscale(1)"
            // imgtag.width = "2000"
            // imgtag.height = "1191"

            fetch(imgtag.src)
            .then(res => res.blob())
            .then(blob => {
                const file = new File([blob], 'dot.png', blob)
                console.log("before set image : " , selectedFile);
                setImage(file)
                console.log("after set image : " , image);
                console.log(file)
            })

            threshold(imgtag)
        };

        reader.readAsDataURL(selectedFile);
        document.querySelector('.target').appendChild(imgtag)

        console.log("img tag : ", imgtag);



    }

    function threshold(tag){
        var base64String = tag.src
        console.log("Started");
        var  threshold = 120

        let ctx = document.createElement('canvas').getContext("2d")
        let newImg = new Image()

        newImg.onload = function(){

            var w = ctx.canvas.width = newImg.width
            var h = ctx.canvas.height = newImg.height

            ctx.drawImage(newImg , 0 ,0 , w, h)
            var d = ctx.getImageData(0,0,w,h)

            for( var i = 0 ; i < d.data.length ; i+=4){
                d.data[i] = d.data[i+1] = d.data[i+2] = d.data[i+1] > threshold ? 255 : 0;
            }

            ctx.putImageData(d,0,0)
            document.querySelector(".target").appendChild(ctx.canvas)

        }

        newImg.src = base64String


    }

    const handleSubmit = () => {
        setIsLoading(true);
        console.log(image);
        Tesseract.recognize(image, 'eng', {
            logger: (m) => {
                console.log(m);
                if (m.status === 'recognizing text') {
                    setProgress(parseInt(m.progress * 100));
                }
            },
        })
            .catch((err) => {
                console.error(err);
            })
            .then((result) => {
                console.log(result.data);
                setText(result.data.text);
                scannedText = result.data.text
                console.log(scannedText);
                setIsLoading(false);
                date()
            });



    };

    function date() {
        let regexp = /\d{2}([\/.-])\d{2}\1\d{4}/g;
        console.log(
            scannedText.match(regexp)
        );
    }

    return (
        <div className="container" style={{ height: '100vh' }}>
            <div className="row h-100">
                <div className="col-md-5 mx-auto h-100 d-flex flex-column justify-content-center">
                    {!isLoading && (
                        <h1 className="text-center py-5 mc-5">Image To Text</h1>
                    )}
                    {isLoading && (
                        <>
                            <progress className="form-control" value={progress} max="100">
                                {progress}%{' '}
                            </progress>{' '}
                            <p className="text-center py-0 my-0">Converting:- {progress} %</p>
                        </>
                    )}
                    {!isLoading && !text && (
                        <>
                            <input
                                type="file"
                                onChange={(e) => {
                                    improve(e)
                                    // setImage(e.target.files[0])

                                }



                                }
                                className="form-control mt-5 mb-2"
                            />
                            <input
                                type="button"
                                onClick={
                                handleSubmit
                                }
                                className="btn btn-primary mt-5"
                                value="Convert"
                            />
                        </>
                    )}
                    {!isLoading && text && (
                        <>
                            <textarea
                                className="form-control w-100 mt-5"
                                rows="30"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                            ></textarea>

                        </>
                    )}
                </div>
            </div>
            <div className="target">

            </div>


        </div>
    );
};

export default App;