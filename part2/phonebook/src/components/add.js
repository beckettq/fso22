import React from 'react'

const FormInput = ({name, controller, changeHandler}) => {
    return (
        <div>
          {name}: <input value = {controller} onChange = {changeHandler}/>
        </div>
    )
}

export default FormInput