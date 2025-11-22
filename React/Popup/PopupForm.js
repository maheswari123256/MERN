import React from 'react'
const PopupForm=({closeForm})=>{
    return(
        <div className='popup'>
            <p className='hider' onClick={closeForm}>x</p>
            <form>
                <label for="name">Name</label>
                <input type='text' name='name' required/>
                <label for="age">Age</label>
                <input type='number' name='age' required/>
                <label for="email">Email</label>
                <input type='email'name="email" required></input>
                <button>submit</button>
            </form>

        </div>
    )
}
export default PopupForm;
