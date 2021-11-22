import React, {useState} from 'react'


export default function FormText(props) {
const [text,setText] = useState(' ')

    const UpperCase = () => {
        // console.log("your have clock the button");
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert('Converted into UpperCase', 'success')
    }

    const loCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert('Converted into Lowercase', 'success')
    }
 
    const copyHandlar = () => {
        var text = document.getElementById('Box')
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert('your text is copyed succesfully', 'success')
    }

    const clear = () =>{
        let newText = "";
        setText(newText)
        props.showAlert('your text area is clear', 'success')
    }

 const onChangeHandler= (event) => {
    //  console.log("on chnage");
     setText(event.target.value)
 }

    return (
        <>
    <div className = "container" style={{color:props.mode === 'dark' ? 'white' :'black'}}>
        <h1>{props.heading}</h1>
<div className="my-3">
{/* <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label> */}
<textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? 'gray' :'white' ,color:props.mode === 'dark' ? 'white' :'black'}} id="Box" rows="9" value ={text} onChange={onChangeHandler}></textarea>
</div>
<button className= {`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick = {UpperCase}>Click To UpperCase Your Text</button>
<button className = {`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick = {loCase}> Convert Into LowerCase</button>
<button className = {`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick = {clear} >Clear Text</button>
<button className = {`btn btn-${props.mode === 'dark' ? 'light' : 'primary'} mx-1`} onClick = {copyHandlar}>Copy Text</button>
    </div>

  {/* creating another div container for word and character count and preview and reading timming */}
  <div className = "container" style={{color:props.mode === 'dark' ? 'white' :'black'}}>
      <h3  my = "6">Text Analyse</h3>
      {/* word and character count */}
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
       
       {/* reading timing */}
       <p>{0.008 * text.split(" ").length} Minutes Reading</p>

    <h3>Preview</h3>
    <p>{text.length>0?text:'Type in text box to preview.'}</p>
  </div>
    </>
    )
}
